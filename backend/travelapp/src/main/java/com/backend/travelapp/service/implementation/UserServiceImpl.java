package com.backend.travelapp.service.implementation;

import com.backend.travelapp.exception.AuthenticateException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.model.Role;
import com.backend.travelapp.model.User;
import com.backend.travelapp.repository.UserRepository;
import com.backend.travelapp.request.EditProfileRequest;
import com.backend.travelapp.request.SignUpRequest;
import com.backend.travelapp.request.VerifyRequest;
import com.backend.travelapp.response.EditProfileResponse;
import com.backend.travelapp.response.GetUserResponse;
import com.backend.travelapp.response.VerifyResponse;
import com.backend.travelapp.secutiry.JwtService;
import com.backend.travelapp.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, JwtService jwtService, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User findUserProfileByJwt(String token) throws UserNotFoundException {
        String email = jwtService.extractEmail(token);
        User user = userRepository.findByEmail(email);
        if (user == null)
            throw new UserNotFoundException("User with email: " + email + " not exist!");
        return user;
    }

    @Override
    public List<GetUserResponse> getAllUsers(String token) throws UserNotFoundException, AuthenticateException {

        User user = findUserProfileByJwt(token);

        if (user.getRole() != Role.Admin)
            throw new AuthenticateException("Permission denied. You do not have the required permission to create a new tour.");
        if (user == null)
            throw new UserNotFoundException("Invalid with token! Please login again");

        List<User> userList = userRepository.findAll();
        if (userList == null) {
            throw new UserNotFoundException("Have not had any user yet!");
        }

        List<GetUserResponse> userResponseList = new ArrayList<>();

        for (User tmp : userList) {
            var u = GetUserResponse
                    .builder()
                    .userId(tmp.getUserId())
                    .email(tmp.getEmail())
                    .firstName(tmp.getFirstName())
                    .lastName(tmp.getLastName())
                    .build();
            userResponseList.add(u);
        }
        return userResponseList;
    }

    @Override
    public VerifyResponse verifyUserByEmailAndPhone(VerifyRequest request) {
        User user = userRepository.findByEmail(request.getEmail());
        if (user == null)
            throw new IllegalArgumentException("Your search did not return any results. Please try again with other information.");
        if (!user.getPhone().equals(request.getPhone()))
            throw new IllegalArgumentException("Your search did not return any results. Please try again with other information.");

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);

        return VerifyResponse
                .builder()
                .message("Change Password Successfully!")
                .build();
    }

    @Override
    public EditProfileResponse editProfile(String token, EditProfileRequest request) throws UserNotFoundException {

        User user = findUserProfileByJwt(token);
        if (user == null)
            throw new UserNotFoundException("Invalid with token! Please login again");

        User tmp = userRepository.findByEmail(request.getEmail());
        if (tmp != null)
            throw new IllegalArgumentException("Email is existed!");

        User tmp1 = userRepository.findByPhone(request.getPhone());
        if (tmp1 != null)
            throw new IllegalArgumentException("Phone number is existed!");

        user.setEmail(request.getEmail());
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setBirthDate(request.getBirthDate());
        user.setPhone(request.getPhone());
        user.setCountry(request.getCountry());
        userRepository.save(user);

        return EditProfileResponse
                .builder()
                .message("Your profile has been successfully changed.")
                .build();
    }
}
