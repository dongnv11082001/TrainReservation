package com.example.train_ticket_management.repository;

import com.example.train_ticket_management.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Date;
import java.util.List;

public interface TicketRepository<Ticket> extends JpaRepository<Ticket, Long> {
    List<Ticket> findAllByDepartureDateAndArrivalDateAndDepartureAndDestination(Date departureDate, Date arrivalDate, String arrival, String departure);
}
