const AlertSection = ({ body }) => {
  return (
    <div className="p-4 bg-primary text-white text-center">
      <div className="max-w-lg mx-auto">
        <p>{body}</p>
      </div>
    </div>
  )
}

export default AlertSection
