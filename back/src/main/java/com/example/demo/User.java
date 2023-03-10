package com.example.demo;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "User")
public class User {
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private Integer id;
	private String name;
	private String firstname;
	private String email;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	@JoinColumn(name = "typeid")
	private TypeUser typeUser;
	
	
	public TypeUser getTypeUser() {
		return typeUser;
	}
	public void setTypeUser(TypeUser typeUser) {
		this.typeUser = typeUser;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
}