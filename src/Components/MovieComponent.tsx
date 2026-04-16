import MovieCard from "./MovieCard"
import '../Components/Style/Style.css'
 function  MovieComponent ({movieInfo}:{movieInfo:any})  {
  return (
    <div className="wrapper">
      <div className="cointainer">
        <h1>Infinite Scrolling</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" style={{}}>
            {movieInfo.map((curVal:any,id:any)=>{
                return <MovieCard key={id} myData={curVal}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default MovieComponent
