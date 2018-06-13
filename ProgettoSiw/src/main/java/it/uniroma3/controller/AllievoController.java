package it.uniroma3.controller;

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

import it.uniroma3.controller.validator.AllievoValidator;
import it.uniroma3.model.Allievo;
import it.uniroma3.service.AllievoService;

@Controller
public class AllievoController {

	@Autowired
	private AllievoService allievoService;

	@Autowired
	private AllievoValidator validator;

	@RequestMapping("/homeAllievo")
	public String homeAllievo() {
		return "allievo/gestioneAllievi";
	}

	// Inserisci Allievo metodo Supporto
	@RequestMapping("/inserisciAllievo")
	public String inserisciAllievo(Model model) {
		model.addAttribute("allievo", new Allievo());
		return "allievo/allievoForm";
	}

	// Persistence Allievo
	@RequestMapping(value = "/saveAllievo", method = RequestMethod.POST)
	public String nuovoAllievo(@Valid @ModelAttribute("allievo") Allievo allievo, Model model,
			BindingResult bindingResult) {
		this.validator.validate(allievo, bindingResult);
		if (!bindingResult.hasErrors()) {
			this.allievoService.uploadParametri(allievo);
			if (this.allievoService.alreadyExists(allievo)) {
				model.addAttribute("exists", "Allievo esiste gia'");
				return "allievo/allievoForm";
			} else {
				this.allievoService.save(allievo);
				model.addAttribute("allievoTrovato", allievo);
				return "allievo/showAllievo";
			}
		}
		return "allievo/allievoForm";
	}

	// Ricerca Allievo metodo Supporto
	@RequestMapping("/cercaAllievo")
	public String cercaAllievo() {
		return "allievo/findAllievo";
	}

	// Search Allievo Email
	@RequestMapping(value = "/findAllievo")
	public String findAllievo(@RequestParam("email") String email, Model model) {

		if (!email.equals("") && email != null) {

			Allievo allievoTrovato = this.allievoService.findByEmail(email.toLowerCase());

			if (allievoTrovato == null) {
				model.addAttribute("notexists", "Allievo non esiste");
				return "allievo/findAllievo";
			} else {
				model.addAttribute("allievoTrovato", allievoTrovato);
				return "allievo/showAllievo";
			}
		}
		model.addAttribute("errorParam", "Inserisci Email");
		return "allievo/findAllievo";
	}

	// Search Allievo tramite ID
	@RequestMapping(value = "/findAllievoId/{id}", method = RequestMethod.GET)
	public String findAllievo(@PathVariable("id") Long id, Model model) {
		model.addAttribute("allievoTrovato", this.allievoService.findById(id));
		return "allievo/showAllievo";
	}

	// Modifica Allievo tramite id Supporto
	@RequestMapping(value = "/modificaAllievo/{id}", method = RequestMethod.GET)
	public String modificaAllievo(@PathVariable("id") Long id, Model model) {
		model.addAttribute("allievoTrovato", this.allievoService.findById(id));
		return "allievo/mergeAllievo";
	}

	// Update Allievo tramite Id
	@RequestMapping(value = "/updateAllievo/{id}", method = RequestMethod.POST)
	public String updateAllievo(@PathVariable("id") Long id, @RequestParam("nome") String nome,
			@RequestParam("cognome") String cognome, @RequestParam("email") String email,
			@RequestParam("telefono") String telefono, @RequestParam("luogoNascita") String luogoNascita, Model model) {
		Allievo allievo = this.allievoService.update(this.allievoService.findById(id), nome, cognome, email,
				telefono, luogoNascita);
		this.allievoService.uploadParametri(allievo);
		this.allievoService.save(allievo);
		model.addAttribute("allievoTrovato", allievo);
		return "allievo/showAllievo";
	}

	// Mostra Lista Allievi
	@RequestMapping("/listaAllievi")
	public String allievi(Model model) {
		model.addAttribute("listaAllievi", this.allievoService.findAll());
		return "allievo/allievoList";
	}

	// Delete Allievo tramite Id
	@RequestMapping(value = "/cancellaAllievo/{id}", method = RequestMethod.GET)
	public String cancelllaAllievo(@PathVariable("id") Long id, Model model) {
		this.allievoService.delete(id);
		return "allievo/deleteAllievo";
	}

}