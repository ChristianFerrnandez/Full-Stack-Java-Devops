package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TypeUserRepository typeUserRepository;
	
	@PostMapping("/users")
	void addUser(@RequestBody User user) {
		userRepository.save(user);
	}
	
	
	@GetMapping("/users")
	public @ResponseBody Iterable<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	@PutMapping("/users/update/{id}")
	public void updateUser (@RequestBody User user, @PathVariable Integer id) {
		User userfound = userRepository.findById(id).get();
		
		userfound.setId(user.getId());
		userfound.setName(user.getName());
		userfound.setFirstname(user.getFirstname());
		userfound.setEmail(user.getEmail());
		userfound.setTypeUser(user.getTypeUser());
		
		userRepository.save(userfound);
	}	

	
	@GetMapping("/users/adduser")
	public @ResponseBody Iterable<TypeUser> getAllTypeUsers() {
		return typeUserRepository.findAll();
	}
	
	@GetMapping("/users/{id}")
	public User getUser (@PathVariable Integer id) {
		return userRepository.findById(id).get();
	}
	
	
	@DeleteMapping("/users/delete/{id}") 
	public void deleteUser (@PathVariable Integer id)  {
		userRepository.deleteById(id);
	}
	

}