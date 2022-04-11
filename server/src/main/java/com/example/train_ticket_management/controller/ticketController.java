package com.example.train_ticket_management.controller;

import com.example.train_ticket_management.entity.Ticket;
import com.example.train_ticket_management.exception.ResourceNotFoundException;
import com.example.train_ticket_management.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/ticket")
public class ticketController {
    @Autowired
    private TicketRepository ticketRepository;


    //get all ticket
    @GetMapping(value = "/")
    public List<Ticket> getAllTicket() {
        List<Ticket> ticketList = ticketRepository.findAll();
        return ticketList;
    }

    //add ticket
    @PostMapping(value = "/add")
    public Ticket creatTicket(@RequestBody Ticket ticket) {
        System.out.println(ticket.toString());
        return ticketRepository.save(ticket);

    }

    //remove ticket by id
    @DeleteMapping(value = "/remove/{id}")
    public ResponseEntity<Map<String, Boolean>> removeTicket(@PathVariable Long id) {
        Ticket ticket = ticketRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ticket with id " + id + " does not exist!"));
        ticketRepository.delete(ticket);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //update ticket by id
    @PutMapping(value = "/update/{id}")
    public ResponseEntity<Ticket> updateTicket(@PathVariable Long id, @RequestBody Ticket updatedTicketDetail) {
        Ticket ticket = ticketRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ticket with id " + id + " does not exist!"));

        Ticket updatedTicket = ticketRepository.save(ticket);
        return ResponseEntity.ok(updatedTicket);
    }

    //get searched tickets


}

