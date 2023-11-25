package com.backend.travelapp.controller;

import com.backend.travelapp.exception.AuthenticateException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.response.CancelledOrderResponse;
import com.backend.travelapp.response.ConfirmedOrderResponse;
import com.backend.travelapp.response.GetOrderResponse;
import com.backend.travelapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/orders")
public class AdminOrderController {
    private final OrderService orderService;

    @Autowired
    public AdminOrderController(OrderService orderService) {
        this.orderService = orderService;
    }
    @GetMapping
    public ResponseEntity<List<GetOrderResponse>> getAllOrders(@RequestHeader("Authoriz ation") String token)
            throws UserNotFoundException, AuthenticateException {
        return ResponseEntity.ok(orderService.getAllOrders(token));
    }
    @PutMapping("/confirmed/{orderId}")
    public ResponseEntity<ConfirmedOrderResponse> confirmedOrder(
            @RequestHeader("Authorization") String token,
            @PathVariable Long orderId) throws UserNotFoundException, AuthenticateException {
        return ResponseEntity.ok(orderService.confirmedOrder(token, orderId));
    }

    @PutMapping("/cancelled/{orderId}")
    public ResponseEntity<CancelledOrderResponse> cancelledOrder(
            @RequestHeader("Authorization") String token,
            @PathVariable Long orderId) throws UserNotFoundException, AuthenticateException {
        return ResponseEntity.ok(orderService.cancelledOrder(token, orderId));
    }

}
