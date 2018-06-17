package it.uniroma3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
	private Attivita attivitaCorrente;

	@RequestMapping("/partecipaAttivita/{id}")
	private String insPartecipazione(@PathVariable("id") Long id, Model model) {
		this.allievoCorrente = this.allievoService.findById(id);
		List<Attivita> listaAttivita = this.attivitaService.getListaAttivitaPossibili(this.allievoCorrente);
		model.addAttribute("listaAttivita", listaAttivita);
		return "partecipazione/attivitaList";
	}

	@RequestMapping(value = "/confermaPartecipazione/{id}", method = RequestMethod.GET)
	public String findAttivita(@PathVariable("id") Long id, Model model) {
		this.attivitaCorrente = this.attivitaService.findById(id);
		model.addAttribute("attivita", this.attivitaCorrente);
		model.addAttribute("allievo", this.allievoCorrente);
		return "partecipazione/confermaPartecipazione";
	}

	@RequestMapping(value = "/savePartecipazione", method = RequestMethod.POST)
	public String savePartecipazione(Model model) {
		Partecipazione partecipazione = new Partecipazione(this.allievoCorrente, this.attivitaCorrente);
		this.ps.save(partecipazione);
		this.allievoCorrente.getListaPartecipazione().add(partecipazione);
		model.addAttribute("allievo", this.allievoCorrente);
		return "allievo/showAllievo";
	}

}