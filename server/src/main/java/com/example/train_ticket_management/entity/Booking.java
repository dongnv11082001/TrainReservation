package com.example.train_ticket_management.entity;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
@Table(name = "Booking")

public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "isRoundTrip", nullable = false)
    private boolean isRoundTrip;

    @Column(name = "passengers", nullable = false)
    private int passengers;

    @Column(name = "createdAt", nullable = false)
    private Date createdAt;

    @Column(name = "deletedAt")
    private Date deletedAt;

    @ManyToOne
    private User user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Booking booking = (Booking) o;
        return false;
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
