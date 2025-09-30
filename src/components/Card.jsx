const Card = ({user, onAction}) => {
  return (
    <div key={user.id} className="card bg-base-300 shadow-md hover:shadow-xl transition-shadow duration-300 w-70">
      <div className="card-body">
        <h2 className="card-title">{user.name}</h2>
         <p className="text-sm text-gray-500">{user.email}</p>
        <div className="card-actions justify-end mt-2">
          <button onClick={()=> onAction(user.id)} className="btn btn-primary  btn-sm">Detalles</button>
        </div>
      </div>
    </div>
  )
}

export default Card