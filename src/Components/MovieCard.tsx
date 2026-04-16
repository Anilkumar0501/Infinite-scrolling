
const MovieCard = ({myData}:{myData:any}) => {
    const {title,body,id}=myData
  return (
    <div className="card">
      <div className="card-info" >
        <p className="bg-white w-[30px] h-[30px] rounded-full flex justify-center item-center sm: ">{id}</p>
        <p className=" text-sm sm:text-base lg:text-lg xl:text-xl">{body.substr(0,150)}</p>
        <h2>{title.substr(0,15)}</h2>
      </div>
    </div>
  )
}

export default MovieCard
