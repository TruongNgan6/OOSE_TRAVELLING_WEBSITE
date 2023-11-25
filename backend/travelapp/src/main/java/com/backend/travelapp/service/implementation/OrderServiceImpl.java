package com.backend.travelapp.service.implementation;

import com.backend.travelapp.response.ConfirmedOrderResponse;
import com.backend.travelapp.exception.AuthenticateException;
import com.backend.travelapp.exception.OrderNotFoundException;
import com.backend.travelapp.exception.TourNotFoundException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.model.*;
import com.backend.travelapp.repository.*;
import com.backend.travelapp.request.CreateOrderRequest;
import com.backend.travelapp.response.CancelledOrderResponse;
import com.backend.travelapp.response.CreateOrderResponse;
import com.backend.travelapp.response.GetOrderResponse;
import com.backend.travelapp.service.OrderService;
import com.backend.travelapp.service.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class OrderServiceImpl implements OrderService {
    private final UserService userService;
    private final TourRepository tourRepository;
    private final OrderRepository orderRepository;
    private final ContactDetailRepository contactDetailRepository;
    private final BillingDetailRepository billingDetailRepository;
    private final TravellerDetailRepository travellerDetailRepository;

    public OrderServiceImpl(UserService userService, TourRepository tourRepository, OrderRepository orderRepository, ContactDetailRepository contactDetailRepository, BillingDetailRepository billingDetailRepository, TravellerDetailRepository travellerDetailRepository) {
        this.userService = userService;
        this.tourRepository = tourRepository;
        this.orderRepository = orderRepository;
        this.contactDetailRepository = contactDetailRepository;
        this.billingDetailRepository = billingDetailRepository;
        this.travellerDetailRepository = travellerDetailRepository;
    }

    @Override
    public CreateOrderResponse createNewOrder(String token, CreateOrderRequest request)
            throws UserNotFoundException {

        User user = userService.findUserProfileByJwt(token);
        if (user == null)
            throw new UserNotFoundException("Invalid user. Please login again!");

        Tour tour = tourRepository.findByTourId(request.getTourId());
        if (tour == null)
            throw new TourNotFoundException("Tour with id: " + request.getTourId() + " is not existed!");

        if (tour.getQuantity() == 0)
            throw new TourNotFoundException("Sorry, this tour is now full.");

        ContactDetail savedContactDetail = contactDetailRepository.save(request.getContactDetail());
        BillingDetail savedBillingDetail = billingDetailRepository.save(request.getBillingDetail());

        var order = Order
                .builder()
                .numberOfRooms(request.getNumberOfRooms())
                .numberOfPeople(request.getNumberOfPeople())
                .status(OrderStatus.PENDING)
                .travellerDetails(request.getTravellerDetails())
                .contactDetail(savedContactDetail)
                .billingDetail(savedBillingDetail)
                .notes(request.getNotes())
                .totalPrice(calculateTotalPrice(tour, request.getNumberOfRooms(), request.getNumberOfPeople()))
                .tour(tour)
                .user(user)
                .build();
        orderRepository.save(order);

        List<TravellerDetails> travellerDetailsCopy = new ArrayList<>(request.getTravellerDetails());
        for (TravellerDetails t : travellerDetailsCopy) {
            t.setOrder(order);
            travellerDetailRepository.save(t);
        }

        tour.setQuantity(tour.getQuantity() - 1);
        tourRepository.save(tour);

        return CreateOrderResponse
                .builder()
                .message("Create order successfully")
                .build();
    }

    @Override
    public List<GetOrderResponse> getAllOrders(String token)
            throws UserNotFoundException, AuthenticateException {

        User user = userService.findUserProfileByJwt(token);
        if (user == null)
            throw new UserNotFoundException("Invalid user. Please login again!");
        if (!user.getRole().equals(Role.Admin))
            throw new AuthenticateException("Permission denied. You do not have the required permission to get all orders.");

        List<Order> orderList = orderRepository.findAll();
        List<GetOrderResponse> orderResponseList = new ArrayList<>();

        for (Order o : orderList) {
            var tmp = GetOrderResponse
                    .builder()
                    .orderId(o.getOrderId())
                    .status(o.getStatus())
                    .notes(o.getNotes())
                    .totalPrice(o.getTotalPrice())
                    .createdAt(o.getCreatedAt())
                    .build();
            orderResponseList.add(tmp);
        }
        return orderResponseList;
    }

    @Override
    public ConfirmedOrderResponse confirmedOrder(String token, Long orderId)
            throws UserNotFoundException, AuthenticateException {
        User user = userService.findUserProfileByJwt(token);
        if (user == null)
            throw new UserNotFoundException("Invalid user. Please login again!");
        if (!user.getRole().equals(Role.Admin))
            throw new AuthenticateException("Permission denied. You do not have the required permission to confirmed order!.");

        Order order = orderRepository.findByOrderId(orderId);
        if (order == null)
            throw new OrderNotFoundException("Order with id: " + orderId + " is not existed!");
        order.setStatus(OrderStatus.CONFIRMED);
        orderRepository.save(order);

        return ConfirmedOrderResponse
                .builder()
                .message("Confirmed Order Sucessfully!")
                .build();
    }

    @Override
    public CancelledOrderResponse cancelledOrder(String token, Long orderId)
            throws UserNotFoundException, AuthenticateException {
        User user = userService.findUserProfileByJwt(token);
        if (user == null)
            throw new UserNotFoundException("Invalid user. Please login again!");
        if (!user.getRole().equals(Role.Admin))
            throw new AuthenticateException("Permission denied. You do not have the required permission to confirmed order!.");

        Order order = orderRepository.findByOrderId(orderId);
        if (order == null)
            throw new OrderNotFoundException("Order with id: " + orderId + " is not existed!");
        order.setStatus(OrderStatus.CANCELLED);
        orderRepository.save(order);

        return CancelledOrderResponse
                .builder()
                .message("Cancelled Order Sucessfully!")
                .build();
    }

    private Long calculateTotalPrice(Tour tour, Integer numberOfRooms, Integer numberOfPeople) {

        // tour price = gia goc cua tour * so nguoi
        Long tourPrice = tour.getPrice() * numberOfPeople;
        // room price = so phong * 100$ (cu 1 phong them 100$)
        Long roomPrice = (long) (numberOfRooms * 100);

        return tourPrice + roomPrice;
    }
}
