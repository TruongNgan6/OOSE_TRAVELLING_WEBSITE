package com.backend.travelapp.response;

import com.backend.travelapp.model.OrderStatus;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class GetOrderResponse {
    private Long orderId;
    private OrderStatus status;
    private String notes;
    private Long totalPrice;
    private Long tourId;
    private LocalDateTime createdAt;
}
