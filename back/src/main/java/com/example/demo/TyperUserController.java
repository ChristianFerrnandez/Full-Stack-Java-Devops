package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TyperUserController {

	@Autowired
	private TypeUserRepository typeUserRepository;
	
	@PostMapping("/typeusers")
	void addTypeUser(@RequestBody TypeUser typeuser) {
		typeUserRepository.save(typeuser);
	}

	@DeleteMapping("/typeusers/delete/{id}")
	public void deleteTypeUser(@PathVariable Integer id) {
		typeUserRepository.deleteById(id);
	}

	@GetMapping("/typeusers/{id}")
	public TypeUser getTypeUser(@PathVariable Integer id) {
		return typeUserRepository.findById(id).get();
	}

	@PutMapping("/typeusers/update/{id}")
	public void updateTypeUser(@RequestBody TypeUser typeuser, @PathVariable Integer id) {
		TypeUser typeuserfound = typeUserRepository.findById(id).get();

		typeuserfound.setTypeid(typeuser.getTypeid());
		typeuserfound.setNametype(typeuser.getNametype());

		typeUserRepository.save(typeuserfound);
	}

	
	
}
