package it.uniroma3.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.uniroma3.model.Allievo;
import it.uniroma3.model.Attivita;
import it.uniroma3.model.CentroFormazione;
import it.uniroma3.model.Partecipazione;
import it.uniroma3.repository.AttivitaRepository;
import it.uniroma3.repository.PartecipazioneRepository;

@Transactional
@Service
public class AttivitaService {

	@Autowired
	private AttivitaRepository attivitaRepository;

	@Autowired
	private PartecipazioneRepository pr;

	// Metodi di ricerca
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

	public Attivita findByDescrizioneAndOraInizioAndOraFine(String descrizione, Date oraInizio, Date oraFine) {
		Optional<Attivita> attivita = this.attivitaRepository.findByDescrizioneAndOraInizioAndOraFine(descrizione,
				oraInizio, oraFine);
		if (attivita.isPresent())
			return attivita.get();
		else
			return null;
	}

	public List<Attivita> findByCentroFormazione(CentroFormazione cf) {
		List<Attivita> listaAttivita = new ArrayList<>();
		if (cf != null)
			listaAttivita = this.attivitaRepository.findByCentroFormazione(cf);
		else
			listaAttivita = this.attivitaRepository.findAll();
		return listaAttivita;
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
		Optional<Attivita> attivitaTrovata = this.attivitaRepository.findByDescrizioneAndOraInizioAndOraFine(
				attivita.getDescrizione(), attivita.getOraInizio(), attivita.getOraFine());
		return attivitaTrovata.isPresent();
	}

	public List<Attivita> getListaAttivitaPossibili(Allievo allievoCorrente) {
		
		List<Partecipazione> listaPAllievo = allievoCorrente.getListaPartecipazione();
		List<Attivita> listaAttA = new ArrayList<>();
		for (Partecipazione p : listaPAllievo) {
			listaAttA.add(p.getAttivita());
		}
		List<Attivita> listaAttivitaPossibili = this.attivitaRepository.findAll();
		for (Attivita a : listaAttA) {
			listaAttivitaPossibili.remove(a);
		}
		return listaAttivitaPossibili;
	}

	// Metodi persistence
	public Attivita save(Attivita attivita) {
		return this.attivitaRepository.save(attivita);
	}

	public Attivita update(Attivita attivita, String descrizione, Double prezzo, Date dataAttivita, Date oraInizio,
			Date oraFine) {
		attivita.setDescrizione(descrizione);
		attivita.setPrezzo(prezzo);
		attivita.setDataAttivita(dataAttivita);
		attivita.setOraInizio(oraInizio);
		attivita.setOraFine(oraFine);
		return attivita;
	}

	public void delete(Long id) {
		this.attivitaRepository.deleteById(id);
	}

}
