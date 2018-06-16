package it.uniroma3.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.uniroma3.model.Partecipazione;

@Transactional
@Service
public class PartecipazioneService {

	@Autowired
	private PartecipazioneRepository pr;

	public Partecipazione save(Partecipazione partecipazione) {
		return this.pr.save(partecipazione);
	}

}
