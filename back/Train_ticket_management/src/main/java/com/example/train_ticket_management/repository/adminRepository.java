package com.example.train_ticket_management.repository;

import com.example.train_ticket_management.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface adminRepository extends JpaRepository<Admin, Long> {
}
