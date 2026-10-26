import './NewArrivals.css'
import whiteBunny from '../assets/whiteBunny.jpg'
import smallDuck from '../assets/smallDuck.jpg'
import grayDoll from '../assets/grayDoll.jpg'
import brownDoll from '../assets/brownDoll.jpg'
import blueSmily from '../assets/blueSmily.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
function NewArrivals(){
    return(
        <div className='newArrivalsContainer'>
            <div className='newArrTlt'>
            <p id='nATXT'>New Arrivals</p>
            <div id='seeAllDiv'>
             <a href="/shop">See More </a>
            <IoIosArrowRoundForward id='newArrArrow'/>
            </div>
            
            </div>


            <div className='newArrDiv'>

                <div className='newArrItem'>
                <img className='newArrImg' src={smallDuck} alt="" />
                <CiHeart id='heartMe1'/>
                <div className='newArrTxt'>
                <p> Small Duck</p>
                <p className='newArrPrice'>700 DZD</p>
                </div>
             
            </div>

            <div className='newArrItem'>
                <img  className='newArrImg' src={whiteBunny} alt="" />
                  <CiHeart id='heartMe1'/>
                <div className='newArrTxt'>
             <p>White Bunny Doll</p>
                <p className='newArrPrice'>1500 DZD</p>
                </div>
              
            </div>
            <div className='newArrItem'>
                <img className='newArrImg' src={grayDoll} alt="" />
                  <CiHeart id='heartMe1'/>
                <div className='newArrTxt'>
                 <p>Gray bear Doll</p>
                <p className='newArrPrice'>1500 DZD</p>
                </div>
              
            </div>
            <div className='newArrItem'>
                <img className='newArrImg' src={brownDoll} alt="" />
                  <CiHeart id='heartMe1'/>
                <div className='newArrTxt'>
                 <p>Brown Bear Doll</p>
                <p className='newArrPrice'>1500 DZD</p>
                </div>
               
            </div>
            <div className='newArrItem'>
                <img className='newArrImg' src={blueSmily} alt="" />
                  <CiHeart id='heartMe1'/>
                <div className='newArrTxt'>
           <p>Smiley</p>
                <p className='newArrPrice'>500 DZD</p>
                </div>
               
            </div>
            </div>
           
 
        </div>
    )
}
export default NewArrivals