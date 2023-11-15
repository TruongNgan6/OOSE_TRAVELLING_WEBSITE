package com.backend.travelapp.service;

import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.model.User;

public interface UserService {
    User findUserProfileByJwt(String token) throws UserNotFoundException;
}
