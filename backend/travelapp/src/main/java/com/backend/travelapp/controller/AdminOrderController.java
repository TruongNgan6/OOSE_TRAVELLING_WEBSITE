//package com.backend.travelapp.controller;
//
//import com.backend.travelapp.service.OrderService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestHeader;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/admin/order")
//public class AdminOrderController {
//    private final OrderService orderService;
//
//    @Autowired
//    public AdminOrderController(OrderService orderService) {
//        this.orderService = orderService;
//    }
//
//    @GetMapping
//    public ResponseEntity<List<GetOrderResponse>> getAllOrder(@RequestHeader("Authorization") String token) {
//        return ResponseEntity.ok()
//    }
//}
