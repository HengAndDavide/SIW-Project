package it.uniroma3.controller;

import java.util.Date;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import it.uniroma3.model.Allievo;
import it.uniroma3.model.Attivita;
import it.uniroma3.model.Partecipazione;
import it.uniroma3.service.AllievoService;
import it.uniroma3.service.AttivitaService;
import it.uniroma3.service.PartecipazioneService;

@Controller
public class PartecipazioneController {

	@Autowired
	private AllievoService allievoService;

	@Autowired
	private AttivitaService attivitaService;

	@Autowired
	private PartecipazioneService ps;
	
	private Allievo allievoCorrente;

	@RequestMapping("/insPartecipazione")
	private String insPartecipazione(Model model) {
		return "partecipazione/partecipazioneForm";
	}

	@RequestMapping(value = "/inserisciPartecipazione", method = RequestMethod.POST)
	public String inserisciPartecipazione(@ModelAttribute("allievo") Allievo allievo,
			@RequestParam("oraInizio") Date oraInizio, 
			@RequestParam("oraFine") Date oraFine,
			Model model) {

		Allievo allievo = this.allievoService.findByNomeAndCognome(nome, cognome);
		Attivita attivita = this.attivitaService.findByDescrizioneAndOraInizioAndOraFine(descrizione, oraInizio, oraFine);

		if (this.allievoService.alreadyExists(allievo)) {
			Partecipazione partecipazione = new Partecipazione(allievo, attivita);
			this.ps.save(partecipazione);
			model.addAttribute("partecipazione", partecipazione);
			model.addAttribute("allievo", allievo);
			model.addAttribute("listaAttivita", this.attivitaService.findAll());
			return "partecipazione/showPartecipazione";
		}
		model.addAttribute("allievo", allievo);
		model.addAttribute("listaAttivita", this.attivitaService.findAll());
		return "partecipazione/inserisciPartecipazione";
	}

}