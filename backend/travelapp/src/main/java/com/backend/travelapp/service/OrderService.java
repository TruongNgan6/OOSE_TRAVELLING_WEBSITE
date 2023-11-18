package com.backend.travelapp.service;

import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.request.CreateOrderRequest;
import com.backend.travelapp.response.CreateOrderResponse;

public interface OrderService {
    CreateOrderResponse createNewOrder(String token, CreateOrderRequest request) throws UserNotFoundException;
}
