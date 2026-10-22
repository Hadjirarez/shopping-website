import './Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok , FaFacebook , FaPinterest } from "react-icons/fa";
import logo from '../assets/logoH.jpg';
import Baridimob from '../assets/baridimob.png'
import mastercard from '../assets/Mastercard.png'
import visa from '../assets/visacard.png'
function Footer(){
return(
    <div className='footerContainer'>

        <div className='footerlogo-SM'>
            <div className='logo-name'>
            <img id='footerLogo' src={logo} alt="logo" />
            <p id='shopNameFooter'>Octavia</p>
            </div>
          
            <p id='footerDisc'>Timless style made for your <br /> everyday life 💕 </p>
            <div className='FooterSmLogos'>
    <a  href="/instagram"> <FaInstagram id='Sm' /></a>
            <a  href="/tiktok"> <FaTiktok id='Sm' /> </a>
            <a href="/pinterest"> <FaPinterest id='Sm'  /></a>
            <a  href="/facebook"><FaFacebook id='Sm' /></a>
            </div>
        
        </div>
        <div className='footerShop'>
            <p className='Tlt'>Shop</p>
            <a href="/shop">All Products</a>
            <a href="/bags">Bags</a>
            <a href="/keychains">Keychains</a>
            <a href="/dolls">Dolls</a>
            <a href="/accessories">Accessories</a>
            <a href="/clothes">Clothes</a>
        </div>
        <div className='footerCstmService'>
            <p className='Tlt'>Customer Service</p>
            <a href="/contact-us">Contact Us</a>
            <a href="/shipping">Shipping & Dilevry</a>
            <a href="/returns">Returns & refunds</a>
            <a href="/size-guide">Size Guide</a>
            <a href="/faqs">FAQs</a>
        </div>
        <div className='footerInfos'>
            <p className='Tlt'>Informations</p>
            <a href="/about">Abous Us</a>
            <a href="/our-story">Our Story</a>
            <a href="/sustainability">Sustainability</a>
            <a href="/privacyPolicy">Privacy Policy</a>
            <a href="/terms-conditions">Terms & Condictions</a>
        </div>
        <div className='footerPayment'>
            <p className='Tlt'>Payment Methodes</p>
            <div className='paymentLogos'>
                   <a href="baridimob"><img className='card' src={Baridimob} alt="Baridimob" /></a>
            <a href="/mastercard"> <img className='card' src={mastercard} alt="Mastercard"/></a>
            <a href="/visa"> <img className='card' src={visa} alt="visa"/></a>
            </div>
         
        </div>

    </div>
)
}
export default Footer

