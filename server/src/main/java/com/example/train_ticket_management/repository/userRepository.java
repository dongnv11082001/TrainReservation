package com.example.train_ticket_management.repository;

import com.example.train_ticket_management.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepository extends JpaRepository<User, Long> {
}
