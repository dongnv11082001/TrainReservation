package com.example.train_ticket_management.controller;

import com.example.train_ticket_management.entity.Ticket;
import com.example.train_ticket_management.repository.ticketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/")
public class ticketController {
    @Autowired
    ticketRepository ticketRepositor;

    @GetMapping(value = "/")
    public List<Ticket> getAllTicket() {
        List<Ticket> ticketList = ticketRepositor.findAll();
        return ticketList;
    }

    @GetMapping(value = "/{search}")
    public List<Ticket> showFilteredTicket (Model model, @Param("ticketDepature") String ticketDeparture, @Param("ticketArrival") String ticketArrival, @Param("depatureDate")Date depatureDate, @Param("arrivalDate") Date arrivaDate){
        List<Ticket> ticketList = ticketRepositor.findAll();
        model.addAttribute("ticketDeparture");
        return ticketList;
    }



}

