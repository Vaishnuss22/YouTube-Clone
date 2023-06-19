import YTLogo from '../images/youtubeicon.png'
import searchIcon from '../images/search.png'
import bellIcon from '../images/alarmbell.png'
import camIcon from '../images/CamCorder.png'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

function Navbar(){
    return (
        <div className="navbar">
            <div className="logo">
                <img width={100} src={YTLogo} alt="" />
                
            </div>
            <div className="searchBar">
                <input type="text" name="" id="" placeholder=" Search" />
                <img width={35} src={searchIcon} alt="" />
               
             </div>

            <div className="userOptions">
                <div className="navLinks">
                <Link to="/">Home</Link>
                <Link to="/add-video">AddVideo</Link>
                </div>
            <img width={35} src={bellIcon} alt="" />
             <img width={35} src={camIcon} alt="" />

             <div className="profile">
               <h4>V</h4>
             </div>
            </div>
        </div>
    )
}
export default Navbar;