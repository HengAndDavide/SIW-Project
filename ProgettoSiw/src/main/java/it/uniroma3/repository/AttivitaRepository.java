package it.uniroma3.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import it.uniroma3.model.Attivita;
import it.uniroma3.model.CentroFormazione;

public interface AttivitaRepository extends CrudRepository<Attivita, Long> {

	public Optional<Attivita> findById(Long id);

	public Optional<Attivita> findByDescrizioneAndOraInizioAndOraFine(String descrizione, Date oraInizio, Date oraFine);

	public Optional<Attivita> findByDescrizione(String descrizione);

	public List<Attivita> findByCentroFormazione(CentroFormazione centroFormazione);
	
	public List<Attivita> findAll();

}
