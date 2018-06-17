package it.uniroma3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import it.uniroma3.model.CentroFormazione;
import it.uniroma3.service.AmministrazioneService;
import it.uniroma3.service.CentroFormazioneService;

@Controller
public class AmmistrazioneController {

	@Autowired
	private AmministrazioneService as;

	@Autowired
	private MainController mc;

	@RequestMapping("/amministrazione")
	public String amministrazione(Model model) {
		if (!this.mc.getRsc().getRole().equals("admin")) {
			model.addAttribute("NoAdmin", "Prima devi fare Login come Amministratore");
			return "login2";
		}
		return "amministrazione/amministrazione";
	}

	@RequestMapping(value = "/statistiche", method = RequestMethod.GET)
	public String statistiche(Model model) {
		List<CentroFormazione> lista = this.as.ordina();
		model.addAttribute("classificaCentri", lista);
		return "amministrazione/statistiche";
	}

}
