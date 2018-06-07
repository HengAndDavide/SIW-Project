package it.uniroma3.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import it.uniroma3.model.Attivita;

public interface AttivitaRepository extends CrudRepository<Attivita, Long> {

	public Optional<Attivita> findByDescrizione(String descrizione);

	public Optional<Attivita> findById(Long id);
	
}
