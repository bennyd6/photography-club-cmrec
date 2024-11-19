import './footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter,FaLinkedinIn } from "react-icons/fa6";

export default function Footer(){
    return(
        <>
        <div className="footer">
            <div className="footer-one">
                <h2>Follow us on</h2>
                <FaInstagram></FaInstagram>
                <FaXTwitter></FaXTwitter>
                <FaLinkedinIn></FaLinkedinIn>
            </div>
            <div className="footer-two">
                
            </div>
        </div>
        </>
    )
}