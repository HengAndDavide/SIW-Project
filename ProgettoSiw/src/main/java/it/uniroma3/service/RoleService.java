package it.uniroma3.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.uniroma3.model.Role;
import it.uniroma3.repository.RoleRepository;

@Transactional
@Service
public class RoleService {

	@Autowired
	private RoleRepository roleRepository;

	public Role save(Role role) {
		return this.roleRepository.save(role);
	}

}
