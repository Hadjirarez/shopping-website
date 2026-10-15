import keychainsHero from '../assets/keychainsHero.jpg';
import './HeroSection.css'
import { RiCustomerService2Line } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GrSecure } from "react-icons/gr";
import { GiReturnArrow } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
function HeroSection(){
    return( 
        <div className='HeroContainer'>
            <div className='heroElements'>
  <h1 id='heroTitle'>Little Things, <br/>Made With Love.</h1>
            <p id='heroText'>Discover handmade crochet pieces that bring <br/>
             a little warmth to your everyday life.</p>
<            button  id='mainBtn'>Shop Now <IoIosArrowRoundForward id='arrowIcon' /></button>
<div className='heroIcons'>
    <div  className='icon1Div'>
        <p className='heroicon'><LiaShippingFastSolid /></p>
        <p id='icon1P1'>Free Shipping</p>
        <p id='icon1P2'>On orders over <br/> 4000 DZD</p>
    </div>
<div className='icon2Div'>
<p className='heroicon'><GrSecure /></p>
 <p id='icon2P1'>Secure Payment</p>
 <p id='icon2P2'>100% Protected</p>
</div>


<div className='icon3Div'>
<p className='heroicon'><GiReturnArrow /></p>
<p id='icon3P1'>Easy Returns</p>
 <p id='icon3P2'>30-day return</p>
</div>


<div  className='icon4Div'>
 <p className='heroicon'><RiCustomerService2Line /></p>
 <p id='icon4P1'>24/7 Support</p>
 <p id='icon4P2'>We're here <br /> to help</p>
</div>
   
</div>

            </div>
          
          <div className='heroPiecesDisplay'>
            <button id='heartmeIcon'><CiHeart /></button>
            <img id='heroKeychains' src={keychainsHero} alt="keychains" />
            <p id='heroPieceName'>Sunflower Keychains</p>
            <p id='heroPriceTxt'>700 DZD</p>
            <div className='piecesDisplayBtn'> 
                <button  className='heroBtn' id='shopBtn1'>Add to Cart</button>
            <button className='heroBtn' id='shopBtn2'>+</button>
            </div>
           
          </div>
            </div>
  
    )
}
export default HeroSection