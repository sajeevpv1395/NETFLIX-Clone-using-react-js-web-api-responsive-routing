import React, { useEffect, useState } from 'react'
import{API_KEY,imageUrl} from'../../constants/constants'
import axios from '../../constants/axios'
import"./Banner.css";


function Banner() {
  const [movie,setMovie] = useState()

  useEffect(() => {

    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[2])

    })

  },[])


  return (
    <div
     style={{backgroundImage:`url(${movie ? imageUrl+ movie.backdrop_path : ""})` }}
     className='Banner'>
       <div className='content'>
           <h1 className='tittle'>{movie ? movie.title: ""}</h1>
           <br></br>
           <div className='banner_buttons'>
               <button className='button'>play</button>
               <button className='button'>my list</button>
           </div>
           <h1 className='discription'>{movie? movie.overview:""}</h1>
       
         
</div>
       <div className="fade_top"></div>
     
    </div>
  )
}

export default Banner
