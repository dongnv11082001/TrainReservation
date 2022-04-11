package com.example.train_ticket_management.entity;

import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.sql.Date;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
@Table(name = "Ticket")

public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Column(name = "price", nullable = false)
    private Double price;

    @Min(1)
    @Max(50)
    @Column(name = "seat", nullable = false)
    private int seat;

    @Length(min = 3, max = 45)
    @Column(name = "departure", nullable = false)
    private String departure;

    @Length(min = 3, max = 45)
    @Column(name = "destination", nullable = false)
    private String destination;

    @Column(name = "departureTime", nullable = false)
    private Date departureDate;

    @Column(name = "arrivalTime", nullable = false)
    private Date arrivalDate;

    @Column(name = "ticketClass", nullable = false)
    private String ticketClass;

    @ManyToOne
    private Booking booking;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Ticket ticket = (Ticket) o;
        return false;
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
