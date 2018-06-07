package it.uniroma3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.uniroma3.model.Allievo;
import it.uniroma3.model.Attivita;
import it.uniroma3.model.CentroFormazione;
import it.uniroma3.repository.AttivitaRepository;

@Transactional
@Service
public class AttivitaService {

	@Autowired
	private AttivitaRepository attivitaRepository;

	public Attivita save(Attivita attivita) {
		return this.attivitaRepository.save(attivita);
	}

	public List<Attivita> findAll() {
		return (List<Attivita>) this.attivitaRepository.findAll();
	}

	public Attivita findById(Long id) {
		Optional<Attivita> attivita = this.attivitaRepository.findById(id);
		if (attivita.isPresent())
			return attivita.get();
		else
			return null;
	}
	
	public Attivita findByDescrizione(String descrizione) {
		Optional<Attivita> attivita = this.attivitaRepository.findByDescrizione(descrizione);
		if (attivita.isPresent())
			return attivita.get();
		else
			return null;
	}

	public void uppa(Attivita attivita) {
		String descrizione = attivita.getDescrizione();
		descrizione = descrizione.substring(0, 1).toUpperCase()
				+ descrizione.substring(1, descrizione.length()).toLowerCase();
		attivita.setDescrizione(descrizione);
	}

	public boolean alreadyExists(Attivita attivita) {
		Optional<Attivita> Attivita = this.attivitaRepository.findByDescrizione(attivita.getDescrizione());
		if (Attivita.isPresent())
			return true;
		else
			return false;
	}

	public Attivita update(Attivita attivitaTrovata, String descrizione, Double prezzo) {
		attivitaTrovata.setDescrizione(descrizione);
		attivitaTrovata.setPrezzo(prezzo);
		return attivitaTrovata;
	}

	public void delete(Long id) {
		this.attivitaRepository.deleteById(id);
	}

}
