package it.uniroma3.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import it.uniroma3.model.Responsabile;

public interface ResponsabileRepository extends CrudRepository<Responsabile, Long> {

	public Optional<Responsabile> findByUsername(String username);

	public Optional<Responsabile> findByUsernameAndPassword(String username, String password);

}