const ErrorMessage = ({message}) => {

if (!message) return null

return (
    <div className="flex justify-center mt-4">
    <div role="alert" className="alert alert-error shadow-lg w-fit max-w-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>  
        <div>
        <h3 className="font-bold">¡Error!</h3>
        <div className="text-sm">{`${message}`}</div>
      </div>
    </div>
    </div>
  )
}

export default ErrorMessage