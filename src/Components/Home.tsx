import { useEffect, useState } from "react";
import MovieComponent from "./MovieComponent";
import Loading from "./Loading";
const Home = () => {
    const [card, setcard] = useState([] as any[])
    const [page, setpage] = useState(1);
    const [loading,setloading]=useState(true)


    const getCardData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
        const data = await res.json();
        // console.log(data)
        setcard((prev) => [...prev,...data])
        setloading(false)
    };
  
    const handelinfinitescroll = () => { 

        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                
               
                    setloading(true);
                setpage((prev) => prev + 1)
                console.log(page)
            }

        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getCardData()
    }, [page])

    useEffect(() => {
        window.addEventListener("scroll", handelinfinitescroll);
        return () => window.removeEventListener("scroll", handelinfinitescroll)
    }, [])
    return (
        <div>
            
            <MovieComponent movieInfo={card} />
           {loading && <Loading/>} 
        </div>
    )
}

export default Home
