package com.platzi.market.persistence;


import com.platzi.market.persistence.crud.ProductoCrudRepositoty;
import com.platzi.market.persistence.entity.Producto;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Repository
public class ProductoRepository {
    private ProductoCrudRepositoty productoCrudRepositoty;

    public List<Producto> getAll() {
        return (List<Producto>) productoCrudRepositoty.findAll();
    }

    public List<Producto> getBycategoria(int idCategoria){
        return productoCrudRepositoty.findByIdCategoriaOrderByNombreAsc(idCategoria);
    }

    public Optional<List<Producto>> getEscasos(int cantidad) {
        return productoCrudRepositoty.findByCantidadStockLessThanAndEstado(cantidad, true);
    }

    public Optional<Producto> getProducto(int idProducto) {
        return productoCrudRepositoty.findById(idProducto);
    }

    public Producto save(Producto producto) {
        return productoCrudRepositoty.save(producto);
    }

     public void delete(int idProducto) {
        productoCrudRepositoty.deleteAllById(Collections.singleton(idProducto));
     }

}