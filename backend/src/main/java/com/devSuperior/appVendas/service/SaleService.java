package com.devSuperior.appVendas.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devSuperior.appVendas.dto.SaleDTO;
import com.devSuperior.appVendas.entities.Sale;
import com.devSuperior.appVendas.repositories.SaleRepository;
import com.devSuperior.appVendas.repositories.SellerRepository;

@Service
public class SaleService {
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository SellerRepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable page){
		SellerRepository.findAll();
		Page<Sale> result = repository.findAll(page);
		return result.map(el -> new SaleDTO(el));
	}
}
