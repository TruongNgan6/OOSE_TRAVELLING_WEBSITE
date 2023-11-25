package com.backend.travelapp.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CancelledOrderResponse {
    private String message;
}
