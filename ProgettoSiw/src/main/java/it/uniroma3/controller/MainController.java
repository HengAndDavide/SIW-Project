package it.uniroma3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import it.uniroma3.model.CentroFormazione;
import it.uniroma3.service.CentroFormazioneService;

@Controller
public class MainController {

	private CentroFormazione centroFormazione;

	@Autowired
	private CentroFormazioneService centroFormazioneService;
	
	@RequestMapping("/login")
	public String login() {
		return "login";
	}

	// Login form with error
	@RequestMapping("/login-error.html")
	public String loginError(Model model) {
		model.addAttribute("loginError", true);
		return "login";
	}

	// Setta CentroFormazione
	@RequestMapping("/settaCentroFormazione")
	public String settaCentriFormazione(Model model) {
		model.addAttribute("listaCentriFormazione", this.centroFormazioneService.findAll());
		return "settaCentroFormazione";
	}

	// Settare CentroFormazione tramite ID
	@RequestMapping(value = "/setCentroFormazioneId/{id}", method = RequestMethod.GET)
	public String settaCentroFormazione(@PathVariable("id") Long id, Model model) {
		this.setCentroFormazione(this.centroFormazioneService.findById(id));
		model.addAttribute("centroFormazioneScelto", this.getCentroFormazione().getNome());
		return "/listaCentri/" + this.centroFormazione.getNome().toString();
	}

	public CentroFormazione getCentroFormazione() {
		return centroFormazione;
	}

	public void setCentroFormazione(CentroFormazione centroFormazione) {
		this.centroFormazione = centroFormazione;
	}

}
