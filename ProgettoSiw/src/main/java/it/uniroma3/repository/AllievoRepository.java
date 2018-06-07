package it.uniroma3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import it.uniroma3.model.Allievo;

public interface AllievoRepository extends CrudRepository<Allievo, Long> {

	public List<Allievo> findByLuogoNascita(String luogoNascita);

	public List<Allievo> findByNomeAndCognomeAndLuogoNascita(String nome, String cognome, String luogoNascita);

	public Optional<Allievo> findById(Long id);

	public Optional<Allievo> findByEmail(String email);
	
}
