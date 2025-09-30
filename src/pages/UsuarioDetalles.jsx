import React from 'react'
import { useParams } from 'react-router';

const UsuarioDetalles = () => {

  let { usuarioId } = useParams();
  return (
    <div>UsuarioDetalles: {usuarioId}</div>
  )
}

export default UsuarioDetalles