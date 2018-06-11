package it.uniroma3.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PartecipazioneController {

	@RequestMapping("/homePartecipazione")
	public String homeAllievo() {
		return "allievo/gestioneAllievi";
	}
	
	

}