package it.uniroma3.controller.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import it.uniroma3.model.CentroFormazione;

@Component
public class CentroFormazioneValidator implements Validator {

	@Override
	public void validate(Object o, Errors errors) {
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "nome", "required");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "indirizzo", "required");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "email", "required");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "telefono", "required");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "capienzaMassima", "required");
	}

	@Override
	public boolean supports(Class<?> aClass) {
		return CentroFormazione.class.equals(aClass);
	}
}
