

export const Card = (props)=>{
  return(
    <div className="border border-[#EEEEFF] pb-1 rounded cursor-pointer">
      <img src={props.image} alt="" />
      <h2 className="text-md font-semibold p-2">{props.title}</h2>
      <p className="text-sm p-2">{props.description}</p>
    </div>
  )
}