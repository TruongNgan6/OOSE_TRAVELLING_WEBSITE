package com.backend.travelapp.controller;

import com.backend.travelapp.request.VerifyRequest;
import com.backend.travelapp.response.VerifyResponse;
import com.backend.travelapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/forgotpasswd")
public class ForgotPasswordController {
    private final UserService userService;

    @Autowired
    public ForgotPasswordController(UserService userService) {
        this.userService = userService;
    }
    @PutMapping("/verify")
    public ResponseEntity<VerifyResponse> verifyUser(@RequestBody VerifyRequest request) {
        return ResponseEntity.ok(userService.verifyUserByEmailAndPhone(request));
    }

}
