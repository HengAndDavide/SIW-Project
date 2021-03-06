package it.uniroma3.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import it.uniroma3.model.CentroFormazione;
import it.uniroma3.model.Responsabile;
import it.uniroma3.service.AttivitaService;
import it.uniroma3.service.CentroFormazioneService;
import it.uniroma3.service.MainService;
import it.uniroma3.service.ResponsabileService;

@Controller
public class MainController {

	@Autowired
	private CentroFormazioneService cs;
	
	@Autowired
	private AttivitaController ac;
	
	@Autowired
	private MainService ms;

	@Autowired
	private ResponsabileService r;
	
	private Responsabile rsc;

	@GetMapping("/login")
	public String login() {
		return "login2";
	}
	
	@GetMapping("/logout")
	public String logout(Model model) {
		this.ac.setCf(null);
		model.addAttribute("logout", "Fatto Logout");
		return "login2";
	}

	@RequestMapping(value = "/login2", method = RequestMethod.GET)
	public String login2(@RequestParam("username") String username, @RequestParam("password") String password,
			Model model) {
		if (!username.equals("") || !password.equals("")) {
			Optional<Responsabile> responsabile = this.r.findByUsernameAndPassword(username, password);
			if (responsabile == null) {
				model.addAttribute("noEsiste", "Dati Errati");
				return "login2";
			} else {
				this.rsc = responsabile.get();
				return this.ms.gestisci(this.rsc);
			}
		}
		model.addAttribute("errorParam", "Inserisci Dati");
		return "login2";
	}
	
	@RequestMapping("/contatti")
	public String contatti() {
		return "contatti";
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
	
	public Responsabile getRsc() {
		return rsc;
	}

	public void setRsc(Responsabile rsc) {
		this.rsc = rsc;
	}

}
