package com.example.train_ticket_management.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bookingID", nullable = false)
    private long bookingID;

    @Column(name = "isBooked", nullable = false)
    private boolean isBooked;

    @Column(name = "bookingDate", nullable = false)
    private Date bookingDate;

    @ManyToOne
    @JoinColumn(name = "user_user_id")
    private User user;

    @OneToOne
    private Ticket ticket;

    public Booking(boolean isBooked, Date bookingDate, User user, Ticket ticket) {
        this.isBooked = isBooked;
        this.bookingDate = bookingDate;
        this.user = user;
        this.ticket = ticket;
    }

    public long getBookingID() {
        return bookingID;
    }

    public void setBookingID(int bookingID) {
        this.bookingID = bookingID;
    }

    public boolean isBooked() {
        return isBooked;
    }

    public void setBooked(boolean booked) {
        isBooked = booked;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Ticket getTicket() {
        return ticket;
    }

    public void setTicket(Ticket ticket) {
        this.ticket = ticket;
    }
}
