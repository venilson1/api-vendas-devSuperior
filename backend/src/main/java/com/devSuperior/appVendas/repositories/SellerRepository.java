package com.devSuperior.appVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devSuperior.appVendas.entities.Seller;


public interface SellerRepository extends JpaRepository<Seller, Long> {
	
}
