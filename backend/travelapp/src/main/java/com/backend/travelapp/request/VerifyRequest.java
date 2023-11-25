package com.backend.travelapp.request;

import lombok.Getter;

@Getter
public class VerifyRequest {
    private String email;
    private String phone;
    private String newPassword;
}
