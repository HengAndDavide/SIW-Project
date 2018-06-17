package it.uniroma3.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import it.uniroma3.model.CentroFormazione;
import it.uniroma3.model.Responsabile;
import it.uniroma3.service.CentroFormazioneService;
import it.uniroma3.service.ResponsabileService;

@Controller
public class MainController {

	private CentroFormazione centroFormazione;

	@Autowired
	private CentroFormazioneService cs;

	@Autowired
	private ResponsabileService r;
	
	@GetMapping("/")
	public String home() {
		return "index";
	}

	@GetMapping("/login")
	public String login() {
		return "login";
	}

	@RequestMapping("/login2")
	public String login2(@RequestParam("username") String username, @RequestParam("password") String password,
			Model model, BindingResult br) {
		if (!br.hasErrors()) {
			Optional<Responsabile> responsabile = this.r.findByUsernameAndPassword(username, password);
			if (responsabile == null) {
				model.addAttribute("notesiste", "Dati Errati");
				return "login2";
			} else {
				this.centroFormazione = responsabile.get().getCentroFormazione();
				return "centroFormazione/showCentroFormazione";
			}
		}
		model.addAttribute("errorParam", "Inserisci Dati");
		return "login2";
	}

	// // Login form with error
	// @RequestMapping("/login-error.html")
	// public String loginError(Model model) {
	// model.addAttribute("loginError", true);
	// return "login";
	// }

	@RequestMapping("/contatti")
	public String contatti() {
		return "contatti";
	}

	@RequestMapping("/admin/amministrazione")
	public String amministrazione() {
		return "amministrazione";
	}

	// // Setta CentroFormazione
	// @RequestMapping("/settaCentroFormazione")
	// public String settaCentriFormazione(Model model) {
	// model.addAttribute("listaCentriFormazione",
	// this.centroFormazioneService.findAll());
	// return "settaCentroFormazione";
	// }
	//
	// // Settare CentroFormazione tramite ID
	// @RequestMapping(value = "/setCentroFormazioneId/{id}", method =
	// RequestMethod.GET)
	// public String settaCentroFormazione(@PathVariable("id") Long id, Model model)
	// {
	// this.setCentroFormazione(this.centroFormazioneService.findById(id));
	// model.addAttribute("centroFormazioneScelto",
	// this.getCentroFormazione().getNome());
	// return "/listaCentri/" + this.centroFormazione.getNome().toString();
	// }

	public CentroFormazione getCentroFormazione() {
		return centroFormazione;
	}

	public void setCentroFormazione(CentroFormazione centroFormazione) {
		this.centroFormazione = centroFormazione;
	}

}
