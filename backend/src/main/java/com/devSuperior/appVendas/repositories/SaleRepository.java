package com.devSuperior.appVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devSuperior.appVendas.entities.Sale;


public interface SaleRepository extends JpaRepository<Sale, Long> {
	
}
