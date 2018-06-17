//package it.uniroma3.service;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User.UserBuilder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import it.uniroma3.model.Responsabile;
//
//@Service
//public class ResponsabileDetailsService implements UserDetailsService {
//
//	@Autowired
//	private ResponsabileService responsabileService;
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		
//		Optional<Responsabile> responsabile = responsabileService.findByUsername(username);
//
//		UserBuilder builder = null;
//		if (responsabile.isPresent()) {
//			builder = org.springframework.security.core.userdetails.User.withUsername(username);
//			builder.password(new BCryptPasswordEncoder().encode(responsabile.get().getPassword()));
//			builder.roles(responsabile.get().getRole());
//			throw new UsernameNotFoundException("User not found.");
//		}
//
//		return builder.build();
//	}
//	
//}