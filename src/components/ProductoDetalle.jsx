import React, { useMemo } from "react";
import productos from "../productos";
import { useParams } from "react-router-dom";

function ProductoDetalle() {
  const {id} = useParams();

  const prod = useMemo(() => {
    return productos.find((p) => p.id == id);
  }, [id]);

  return (
    <div>
      <div className="card" style={{width: "18rem;"}}>
        <img src={'/images/' + prod.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <p>
            Nombre: {prod.name}
            </p>
            <p>Precio: ${prod.precio}</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
