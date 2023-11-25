package com.backend.travelapp.request;

import lombok.Getter;

import java.time.LocalDate;

@Getter
public class EditProfileRequest {
    private String email;
    private String firstName;
    private String lastName;
    private LocalDate birthDate;
    private String phone;
    private String country;
}
