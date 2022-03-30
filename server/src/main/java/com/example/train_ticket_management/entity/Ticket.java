package com.example.train_ticket_management.entity;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.sql.Date;

@Entity
@Table
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
    @Column(name = "depature", nullable = false)
    private String departure;

    @Length(min = 3, max = 45)
    @Column(name = "destination", nullable = false)
    private String destination;


    @Column(name = "departureDate", nullable = false)
    private Date depatureDate;

    @Column(name = "arrivalDate", nullable = false)
    private Date arrivalDate;

    @Column(name = "travelDuration", nullable = false)
    private Double travelDuration;

    @Column(name = "isRoundTrip", nullable = false)
    private boolean isRoundTrip;

    @Column(name = "class", nullable = false)
    private String ticketClass;

    @Column(name = "passengers", nullable = false)
    private int passengers;

}
