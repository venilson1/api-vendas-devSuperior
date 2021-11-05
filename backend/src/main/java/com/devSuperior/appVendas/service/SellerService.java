package com.devSuperior.appVendas.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devSuperior.appVendas.dto.SellerDTO;
import com.devSuperior.appVendas.entities.Seller;
import com.devSuperior.appVendas.repositories.SellerRepository;

@Service
public class SellerService {
	@Autowired
	private SellerRepository repository;
	
	public List<SellerDTO> findAll(){
		List<Seller> result = repository.findAll();
		return result.stream().map(el -> new SellerDTO(el)).collect(Collectors.toList());
	}
	
	
	
}
