package com.backend.travelapp.controller;

import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.request.EditProfileRequest;
import com.backend.travelapp.request.SignUpRequest;
import com.backend.travelapp.response.EditProfileResponse;
import com.backend.travelapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/edit_profile")
public class EditProfileController {
    private final UserService userService;

    @Autowired
    public EditProfileController(UserService userService) {
        this.userService = userService;
    }
    @PutMapping
    public ResponseEntity<EditProfileResponse> editProfile(
            @RequestHeader("Authorization") String token,
            @RequestBody EditProfileRequest request) throws UserNotFoundException {
        return ResponseEntity.ok(userService.editProfile(token, request));
    }
}
