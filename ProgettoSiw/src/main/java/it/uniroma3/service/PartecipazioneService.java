package it.uniroma3.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.uniroma3.model.Attivita;
import it.uniroma3.model.Partecipazione;
import it.uniroma3.repository.PartecipazioneRepository;

@Transactional
@Service
public class PartecipazioneService {

	@Autowired
	private PartecipazioneRepository pr;

	public Partecipazione save(Partecipazione partecipazione) {
		return this.pr.save(partecipazione);
	}

	public List<Attivita> getAttivita(List<Partecipazione> listaPartecipazioni) {
		List<Attivita> listaAttivita = new ArrayList<>();
		for (Partecipazione partecipazione : listaPartecipazioni)
			listaAttivita.add(partecipazione.getAttivita());
		return listaAttivita;
	}

}
