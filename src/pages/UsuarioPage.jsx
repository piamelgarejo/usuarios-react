import { useEffect, useState } from 'react'
import Cargando from '../components/Cargando'
import { useNavigate } from "react-router";
import ErrorMessage from '../components/ErrorMessage';
import Card from '../components/Card';

const API_URL = 'https://jsonplaceholder.typicode.com'
const UsuarioPage = () => {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/detalles/${id}`)
  }

    useEffect(() => {
      setIsLoading(true)

      fetch(`${API_URL}/users`)
    
      .then((response) => {
      if (!response.ok){
        throw new Error("respuesta no ok")
      }
      
      return response.json()
    })
    
    .then((json) =>
        setUsers(json)
    )
    .catch((error)=>{
      setError(error)
    })
    .finally(() => {
      setIsLoading(false)
    });
    }, [])

    if (isLoading) {
      return <Cargando/>
    }

    if (error) {
      return <ErrorMessage message={error}/>
    }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {users.map((user)=>(
      <Card onAction={handleClick} user={user}/>
      ))}
    </div>
      
  )
}

export default UsuarioPage 