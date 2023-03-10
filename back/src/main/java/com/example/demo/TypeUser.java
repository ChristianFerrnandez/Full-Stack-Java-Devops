package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TypeUser")
public class TypeUser {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer typeid;
	private String nametype;
	

	public Integer getTypeid() {
		return typeid;
	}
	public void setTypeid(Integer typeid) {
		this.typeid = typeid;
	}
	public String getNametype() {
		return nametype;
	}
	public void setNametype(String nametype) {
		this.nametype = nametype;
	}
	


	
}
