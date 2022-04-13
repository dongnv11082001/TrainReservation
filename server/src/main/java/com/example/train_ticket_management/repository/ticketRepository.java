package com.example.train_ticket_management.repository;

import com.example.train_ticket_management.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Date;
import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    List<Ticket> findAllByArrivalDate(Date arrDate);

    List<Ticket> findAllByDepatureDate(Date depDate);

    List<Ticket> findAllByTicketD(String ticketDep);

    List<Ticket> findAllByTicketDestination(String ticketDes);

    List<Ticket> findAllByDestinationAndDepatureAndArrivalDateAndDepatureDateAndClassAndPassengers(String des, String dep, Date arrDate, Date depDate, String ticketClass, String passengers);

}
