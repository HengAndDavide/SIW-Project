package it.uniroma3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.uniroma3.controller.MainController;
import it.uniroma3.model.Attivita;
import it.uniroma3.model.CentroFormazione;
import it.uniroma3.repository.AttivitaRepository;

@Transactional
@Service
public class AttivitaService {

	@Autowired
	private AttivitaRepository attivitaRepository;

	@Autowired
	private MainController mainController;

	// Metodi di ricerca
	public Attivita findById(Long id) {
		Optional<Attivita> attivita = this.attivitaRepository.findById(id);
		if (attivita.isPresent() && veroCentro(attivita.get()))
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

	public List<Attivita> findAll() {
		return (List<Attivita>) this.attivitaRepository.findAll();
	}

	// Metodi di supporto
	public boolean veroCentro(Attivita attivita) {
		return attivita.getCentroFormazione() == this.mainController.getCentroFormazione();
	}

	public void uploadParametri(Attivita attivita) {
		attivita.setDescrizione(uploadString(attivita.getDescrizione()));
	}

	public String uploadString(String str) {
		StringBuilder b = new StringBuilder(str);
		int i = 0;
		do {
			b.replace(i, i + 1, b.substring(i, i + 1).toUpperCase());
			i = b.indexOf(" ", i) + 1;
		} while (i > 0 && i < b.length());
		return b.toString();
	}

	public boolean alreadyExists(Attivita attivita) {
		Optional<Attivita> attivitaTrovata = this.attivitaRepository.findByDescrizione(attivita.getDescrizione());
		if (attivitaTrovata.isPresent())
			return true;
		else
			return false;
	}

	// Metodi persistence
	public Attivita save(Attivita attivita, CentroFormazione centroFormazione) {
		attivita.setCentroFormazione(centroFormazione);
		return this.attivitaRepository.save(attivita);
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
