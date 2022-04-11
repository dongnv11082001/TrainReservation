package com.example.train_ticket_management.entity;

import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
@Table(name = "User")

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Length(min = 3, max = 45)
    @Column(name = "username", nullable = false)
    private String username;

    @Length(min = 3, max = 45)
    @Column(name = "hashedPassword", nullable = false)
    private String hashedPassword;

    @Length(min = 3, max = 45)
    @Column(name = "firstName", nullable = false)
    private String firstName;

    @Length(min = 3, max = 45)
    @Column(name = "lastName", nullable = false)
    private String lastName;

    @Length(min = 3, max = 10)
    @Column(name = "Gender")
    private String gender;

    @Length(min = 3, max = 20)
    @Column(name = "phoneNumber")
    private String phoneNumber;

    @Length(min = 3, max = 45)
    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "createdAt", nullable = false)
    private Date createdAt;

    @Column(name = "avatarURL")
    private String avatarURL;

    @Column(name = "updatedAt")
    private Date updatedAt;

    @Column(name = "deletedAt")
    private Date deletedAt;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        User user = (User) o;
        return false;
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
