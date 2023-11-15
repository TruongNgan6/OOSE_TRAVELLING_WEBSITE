package com.backend.travelapp.service.implementation;

import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.model.User;
import com.backend.travelapp.repository.UserRepository;
import com.backend.travelapp.secutiry.JwtService;
import com.backend.travelapp.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final JwtService jwtService;

    public UserServiceImpl(UserRepository userRepository, JwtService jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }

    @Override
    public User findUserProfileByJwt(String token) throws UserNotFoundException {
        String email = jwtService.extractEmail(token);
        User user = userRepository.findByEmail(email);
        if (user == null)
            throw new UserNotFoundException("User with email: " + email + " not exist!");
        return user;
    }
}
