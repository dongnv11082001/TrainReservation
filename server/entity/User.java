package com.example.train_ticket_management.entity;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import java.util.Date;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userID", nullable = false)
    private long userID;

    @Length(min=3, max = 45)
    @Column(name = "userName", nullable = false)
    private String userName;

    @Length(min=3, max = 45)
    @Column(name = "userPassword", nullable = false)
    private String userPassword;

    @Length(min=3, max = 45)
    @Column(name = "userFirstName", nullable = false)
    private String userFirstName;

    @Length(min=3, max = 45)
    @Column(name = "userLastName", nullable = false)
    private String userLastName;

    @Length(min=3, max = 45)
    @Column(name = "userEmail", nullable = false)
    private String userEmail;

    @Column(name = "createdDate", nullable = false)
    private Date createdDate;

    @Column(name = "updateDate", nullable = false)
    private Date updateDate;

    public long getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }
}
