package com.backend.travelapp.service;

import com.backend.travelapp.exception.AuthenticateException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.model.User;
import com.backend.travelapp.request.EditProfileRequest;
import com.backend.travelapp.request.SignUpRequest;
import com.backend.travelapp.request.VerifyRequest;
import com.backend.travelapp.response.EditProfileResponse;
import com.backend.travelapp.response.GetUserResponse;
import com.backend.travelapp.response.VerifyResponse;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {
    User findUserProfileByJwt(String token) throws UserNotFoundException;

    List<GetUserResponse> getAllUsers(String token) throws UserNotFoundException, AuthenticateException;

    VerifyResponse verifyUserByEmailAndPhone(VerifyRequest request);

   EditProfileResponse editProfile(String token, EditProfileRequest request) throws UserNotFoundException;
}
