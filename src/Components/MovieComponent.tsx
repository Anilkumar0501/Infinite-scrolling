import MovieCard from "./MovieCard"
import '../Components/Style/Style.css'
 function  MovieComponent ({movieInfo}:{movieInfo:any})  {
  return (
    <div className="wrapper">
      <div className="cointainer">
        <h1>Infinite Scrolling</h1>
        <div className="grid grid-three-column">
            {movieInfo.map((curVal:any,id:any)=>{
                return <MovieCard key={id} myData={curVal}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default MovieComponent
