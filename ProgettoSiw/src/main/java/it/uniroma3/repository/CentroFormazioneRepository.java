package it.uniroma3.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import it.uniroma3.model.CentroFormazione;

public interface CentroFormazioneRepository extends CrudRepository<CentroFormazione, Long> {
	
	public Optional<CentroFormazione> findById(Long id);
	
	public Optional<CentroFormazione> findByNome(String nome);
	
	public Optional<CentroFormazione> findByIndirizzo(String indirizzo);
	
	public Optional<CentroFormazione> findByEmail(String email);
	
	public Optional<CentroFormazione> findByNomeAndEmail(String nome, String email);
	
	public Optional<CentroFormazione> findByNomeAndEmailAndIndirizzo(String nome, String email, String indirizzo);
	
}
