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
    @Column(name = "ID", nullable = false)
    private long ticketID;

    @Column(name = "price", nullable = false)
    private Double ticketPrice;

    @Column(name = "train", nullable = false)
    private int ticketTrain;

    @Min(1)
    @Max(50)
    @Column(name = "seat", nullable = false)
    private int ticketSeat;

    @Length(min = 3, max = 45)
    @Column(name = "depature", nullable = false)
    private String ticketDepature;

    @Length(min = 3, max = 45)
    @Column(name = "destination", nullable = false)
    private String ticketDestination;


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
    private int passenger;

    @Override
    public String toString() {
        return "Ticket{" +
                "ticketID=" + ticketID +
                ", ticketPrice=" + ticketPrice +
                ", ticketTrain=" + ticketTrain +
                ", ticketSeat=" + ticketSeat +
                ", ticketDepature='" + ticketDepature + '\'' +
                ", ticketDestination='" + ticketDestination + '\'' +
                ", depatureDate=" + depatureDate +
                ", arrivalDate=" + arrivalDate +
                ", travelDuration=" + travelDuration +
                ", isRoundTrip=" + isRoundTrip +
                '}';
    }

    public long getTicketID() {
        return ticketID;
    }

    public void setTicketID(int ticketID) {
        this.ticketID = ticketID;
    }

    public Double getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(Double ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    public int getTicketTrain() {
        return ticketTrain;
    }

    public void setTicketTrain(int ticketTrain) {
        this.ticketTrain = ticketTrain;
    }

    public int getTicketSeat() {
        return ticketSeat;
    }

    public void setTicketSeat(int ticketSeat) {
        this.ticketSeat = ticketSeat;
    }

    public String getTicketDepature() {
        return ticketDepature;
    }

    public void setTicketDepature(String ticketDepature) {
        this.ticketDepature = ticketDepature;
    }

    public String getTicketDestination() {
        return ticketDestination;
    }

    public void setTicketDestination(String ticketDestination) {
        this.ticketDestination = ticketDestination;
    }

    public Date getDepatureDate() {
        return depatureDate;
    }

    public void setDepatureDate(Date depatureDate) {
        this.depatureDate = depatureDate;
    }

    public Date getArrivalDate() {
        return arrivalDate;
    }

    public void setArrivalDate(Date arrivalDate) {
        this.arrivalDate = arrivalDate;
    }

    public Double getTravelDuration() {
        return travelDuration;
    }

    public void setTravelDuration(Double travelDuration) {
        this.travelDuration = travelDuration;
    }

    public boolean isRoundTrip() {
        return isRoundTrip;
    }

    public void setRoundTrip(boolean roundTrip) {
        isRoundTrip = roundTrip;
    }
}
