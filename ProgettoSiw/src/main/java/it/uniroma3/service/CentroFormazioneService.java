package it.uniroma3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.uniroma3.model.CentroFormazione;
import it.uniroma3.repository.CentroFormazioneRepository;

@Transactional
@Service
public class CentroFormazioneService {

	@Autowired
	private CentroFormazioneRepository centroRepository;

	// Metodi di ricerca
	public CentroFormazione findById(Long id) {
		Optional<CentroFormazione> CentroFormazione = this.centroRepository.findById(id);
		if (CentroFormazione.isPresent())
			return CentroFormazione.get();
		else
			return null;
	}

	public CentroFormazione findByNome(String nome) {
		Optional<CentroFormazione> CentroFormazione = this.centroRepository.findByNome(nome);
		if (CentroFormazione.isPresent())
			return CentroFormazione.get();
		else
			return null;
	}

	public CentroFormazione findByIndirizzo(String indirizzo) {
		Optional<CentroFormazione> CentroFormazione = this.centroRepository.findByIndirizzo(indirizzo);
		if (CentroFormazione.isPresent())
			return CentroFormazione.get();
		else
			return null;
	}

	public CentroFormazione findByEmail(String email) {
		Optional<CentroFormazione> centro = this.centroRepository.findByEmail(email);
		if (centro.isPresent())
			return centro.get();
		else
			return null;
	}

	public CentroFormazione findByNomeAndEmail(String nome, String email) {
		Optional<CentroFormazione> centro = this.centroRepository.findByNomeAndEmail(nome, email);
		if (centro.isPresent())
			return centro.get();
		else
			return null;
	}

	public CentroFormazione findByNomeAndEmailAndIndirizzo(String nome, String email, String indirizzo) {
		Optional<CentroFormazione> centro = this.centroRepository.findByNomeAndEmailAndIndirizzo(nome, email,
				indirizzo);
		if (centro.isPresent())
			return centro.get();
		else
			return null;
	}

	public List<CentroFormazione> findAll() {
		return (List<CentroFormazione>) this.centroRepository.findAll();
	}

	// Metodi di supporto

	public void uppa(CentroFormazione centroFormazione) {
		centroFormazione.setNome(uppaString(centroFormazione.getNome()));
		centroFormazione.setIndirizzo(uppaString(centroFormazione.getIndirizzo()));
		centroFormazione.getEmail().toLowerCase();
	}

	public String uppaString(String str) {
		StringBuilder b = new StringBuilder(str);
		int i = 0;
		do {
			b.replace(i, i + 1, b.substring(i, i + 1).toUpperCase());
			i = b.indexOf(" ", i) + 1;
		} while (i > 0 && i < b.length());
		return b.toString();
	}

	public boolean alreadyExists(CentroFormazione centroFormazione) {
		Optional<CentroFormazione> centroFormazioneTrovato = this.centroRepository
				.findByNome(centroFormazione.getNome());
		if (centroFormazioneTrovato.isPresent())
			return true;
		else
			return false;
	}

	// Persistence
	public CentroFormazione save(CentroFormazione centroFormazione) {
		return this.centroRepository.save(centroFormazione);
	}

	public CentroFormazione update(CentroFormazione CentroFormazioneTrovato, String nome, String indirizzo,
			String email, String telefono, int capienzaMassima) {
		CentroFormazioneTrovato.setNome(nome);
		CentroFormazioneTrovato.setIndirizzo(indirizzo);
		CentroFormazioneTrovato.setEmail(email);
		CentroFormazioneTrovato.setTelefono(telefono);
		CentroFormazioneTrovato.setCapienzaMassima(capienzaMassima);
		return CentroFormazioneTrovato;
	}

	public void delete(Long id) {
		this.centroRepository.deleteById(id);
	}

}
