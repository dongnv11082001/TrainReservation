package com.example.train_ticket_management.controller;

import com.example.train_ticket_management.entity.Booking;
import com.example.train_ticket_management.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController(value = "/Booking")
public class bookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping(value = "/")
    public List<Booking> getAllBooking(){
        return bookingRepository.findAll();
    }

    @GetMapping(value = "/search/{id}")
    public Booking findBooookingById(@PathVariable Long id){
       Booking booking =  bookingRepository.getById(id);
              // .orElseThrow(() ->new ResourceNotFoundException("Booking with id "+ id+ " does not exist!"));
       return booking;


    }
}
