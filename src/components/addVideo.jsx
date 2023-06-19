
import {useRef} from "react"
import '../styles/addVideo.css'
import { useNavigate } from "react-router-dom"

const AddVideo = () => {
    
    let navigate = useNavigate()

    let thumbnail = useRef(null)
    let title = useRef(null)
    let channel = useRef(null)
    let views = useRef(null)

    let upload = (e) =>{
        e.preventDefault() //prevents the page from reloading
        let data = {
            thumbnail:thumbnail.current.value,
            title : title.current.value,
            channel : channel.current.value,
            views : views.current.value 
        }
        fetch('http://localhost:4000/videos',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('video uploaded successfully')
        navigate('/') //navigating to different routes
    }

    return (
        <div className="addVideo">
            <div id="box1">
            <form action="" onSubmit={upload}>


                
                <input ref={thumbnail} class="textin" type="url" placeholder="enter thumbnail url"  required="true"/>
                <input ref={title} class="textin" type="text" placeholder="enter the title of the video" required="true" />
                <input ref={channel} class="textin" type="text" placeholder="enter channel name" required="true" />
                <input ref={views} class="textin" type="text" placeholder="enter views" required="true" />
                <button id="btn">Upload video</button>
            </form>
            </div>

            <div id="box2">
            <img id="img"src="https://img.freepik.com/premium-vector/flat-design-study-abroad-illustration_23-2150287937.jpg?w=740" alt=""/>
        </div>

        </div>
    );
}

export default AddVideo;