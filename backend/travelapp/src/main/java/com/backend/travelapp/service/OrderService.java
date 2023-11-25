package com.backend.travelapp.service;

import com.backend.travelapp.response.ConfirmedOrderResponse;
import com.backend.travelapp.exception.AuthenticateException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.request.CreateOrderRequest;
import com.backend.travelapp.response.CancelledOrderResponse;
import com.backend.travelapp.response.CreateOrderResponse;
import com.backend.travelapp.response.GetOrderResponse;

import java.util.List;

public interface OrderService {
    CreateOrderResponse createNewOrder(String token, CreateOrderRequest request) throws UserNotFoundException;

    List<GetOrderResponse> getAllOrders(String token) throws UserNotFoundException, AuthenticateException;

    ConfirmedOrderResponse confirmedOrder(String token, Long orderId) throws UserNotFoundException, AuthenticateException;

    CancelledOrderResponse cancelledOrder(String token, Long orderId) throws UserNotFoundException, AuthenticateException;
}
