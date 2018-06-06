package it.uniroma3.controller;

import java.util.Optional;

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

	@RequestMapping("/allievi")
	public String allievi(Model model) {
		model.addAttribute("allievi", this.allievoService.findAll());
		return "allievoList";
	}

	@RequestMapping("/home")
	public String home() {
		return "index.html";
	}

	@RequestMapping("/addAllievo")
	public String addAllievo(Model model) {
		model.addAttribute("allievo", new Allievo());
		return "allievoForm";
	}

	@RequestMapping(value = "/allievo/{id}", method = RequestMethod.GET)
	public String getAllievo(@PathVariable("id") Long id, Model model) {
		model.addAttribute("allievo", this.allievoService.findById(id));
		return "showAllievo";
	}

	@RequestMapping("/findAllievo")
	public String cercaAllievo() {
		return "findAllievo";
	}

	@RequestMapping(value = "/trovaAllievo")
	public String trovaAllievo(@RequestParam("email") String email, Model model) {

		Allievo allievo = this.allievoService.findByEmail(email);

		if (allievo == null) {
			model.addAttribute("notexists", "Allievo non esiste");
			return "findAllievo";
		} else {
			model.addAttribute("allievo", allievo);
			return "showAllievo";
		}
	}

	@RequestMapping(value = "/allievo", method = RequestMethod.POST)
	public String nuovoAllievo(@Valid @ModelAttribute("allievo") Allievo allievo, Model model,
			BindingResult bindingResult) {
		this.validator.validate(allievo, bindingResult);

		if (this.allievoService.alreadyExists(allievo)) {
			model.addAttribute("exists", "Allievo esiste gia'");
			return "allievoForm";
		} else {
			if (!bindingResult.hasErrors()) {
				this.allievoService.uppa(allievo);
				this.allievoService.save(allievo);
				model.addAttribute("allievi", this.allievoService.findAll());
				return "allievoList";
			}
		}
		return "allievoForm";
	}

}