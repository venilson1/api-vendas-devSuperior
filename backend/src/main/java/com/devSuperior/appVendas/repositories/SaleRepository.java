package com.devSuperior.appVendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devSuperior.appVendas.dto.SaleSuccessDTO;
import com.devSuperior.appVendas.dto.SaleSumDTO;
import com.devSuperior.appVendas.entities.Sale;


public interface SaleRepository extends JpaRepository<Sale, Long> {

	@Query("SELECT new com.devSuperior.appVendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amoutGroupedBySeller();
	
	@Query("SELECT new com.devSuperior.appVendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSuccessDTO> successGroupedBySeller();
}
