import { useState,useEffect } from "react";
import "../styles/videos.css";

const Videos = () => {

  let [video, setVideo] = useState([]);
  let [shorts, setShorts] = useState([]);
  
  useEffect(()=>{
    let fetchData=async()=>{
      let response=await fetch('http://localhost:4000/videos')
      let data=await response.json()
      setVideo((data))

      let response1=await fetch('http://localhost:4000/shorts')
      let data1=await response1.json()
      setShorts((data1))

    }
    fetchData()
  })
  


  // let removeVideo=(id,name)=>{
  //   let result=video.filter( (x)=>x.id!==id)
  //   setVideo(result)
  //   alert(`${name} video got removed`)
  // }

  let removeVideo=(id,name)=>{
    fetch(`http://localhost:4000/videos/${id}`,{
      method:'DELETE'
    })
    alert(`${name} video got removed`)
  }

  // let [shorts, setShorts] = useState([]);

  // useEffect(()=>{
  //   let fetchData=async()=>{
  //     let response=await fetch('http://localhost:4000/shorts')
  //     let data=await response.json()
  //     setShorts((data))
  //   }
  //   fetchData()
  // })

  
  return (
    <div className="videos">

      <div className="title">
      <h1>Featured Videos</h1>
      </div>
      <div className="videoData">
      
          {video.map((data) => {
          return (
            <div className="video">
              <img src={data.thumbnail} alt="" />
              <div className="videoDetails">
                <h3>{data.title}</h3>
                <p>{data.channel}</p>
                <p>{data.views}</p>
                <a onClick={()=>removeVideo(data.id,data.channel)}>Remove</a>

              </div>
            </div>
          );
        })}
      </div>

      <h1>Featured Shorts</h1>

      <div className="shortData">
        {shorts.map((data) => {
          return (
            <div className="short">
              <img src={data.thumbnail} alt="" />
              <div className="shortDetails">
                <h3>{data.title}</h3>
                <p>{data.channel}</p>
                <p>{data.views}</p>  
              </div>
            </div>
          );
        })}
      </div>
    </div>  
  );
};

export default Videos;
