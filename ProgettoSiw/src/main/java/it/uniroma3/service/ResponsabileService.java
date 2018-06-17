package it.uniroma3.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.uniroma3.model.Responsabile;
import it.uniroma3.model.Responsabile;
import it.uniroma3.repository.ResponsabileRepository;

@Transactional
@Service
public class ResponsabileService {

	@Autowired
	private ResponsabileRepository responsabileRepository;

	public Optional<Responsabile> findByEmail(String email) {
		Optional<Responsabile> responsabile = this.responsabileRepository.findByEmail(email);
		if (responsabile.isPresent())
			return responsabile;
		else
			return null;
	}
	
	public Responsabile save(Responsabile responsabile) {
		return this.responsabileRepository.save(responsabile);
	}

}