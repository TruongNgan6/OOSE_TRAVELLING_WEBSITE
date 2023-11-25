package com.backend.travelapp.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ConfirmedOrderResponse {
    private String message;
}
