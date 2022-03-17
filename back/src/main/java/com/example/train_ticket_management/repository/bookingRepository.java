package com.example.train_ticket_management.repository;

import com.example.train_ticket_management.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface bookingRepository extends JpaRepository<Ticket, Long> {
}
