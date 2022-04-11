package com.example.train_ticket_management.repository;

import com.example.train_ticket_management.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository<Booking> extends JpaRepository<Booking, Long> {
}
