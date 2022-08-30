package com.moore.bundler.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="babies")
public class Baby {
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 @NotNull
	 @Size( min = 2, max = 50, message="Name must be atleast 2 characters!" )
	 private String name;
	 @NotNull
	 @Size( min = 2, max = 50, message="Gender must be atleast 2 characters!" )
	 private String gender;
	 @NotNull
	 @Size( min = 2, max = 50, message="Origin name must be atleast 2 characters!" )
	 private String origin;
	 @NotNull
	 @Size( min = 2, max = 250, message="Description must be atleast 2 characters!"  )
	 private String description;
	 @Column(updatable=false)
	 @DateTimeFormat(pattern="yyyy-MM-dd")
	 private Date createdAt;
	 @DateTimeFormat(pattern="yyyy-MM-dd")
	 private Date updatedAt;
	    @ManyToOne(fetch=FetchType.LAZY)
	    @JoinColumn(name="user_id")
	    private User user;
	    
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "users_babies", 
        joinColumns = @JoinColumn(name = "baby_id"), 
        inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> users;
    
    public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Baby () {}
    
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}
    
    
}
