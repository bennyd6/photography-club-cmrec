import './header.css'
import logo from '../assets/CMR-Main-Logo-Final.png'
import logo_2 from '../assets/p-logo.png'

export default function Header(){
    return(
        <>
        <div className="logo-main">
            <img src={logo} className='logo' alt="" />
            <a href="#achievements">Home</a>
            <a href="#achievements">Achievements</a>
            <a href="#achievements">About Team</a>
            <a href="#achievements">Contact us</a>
        </div>
        </>
    )
}