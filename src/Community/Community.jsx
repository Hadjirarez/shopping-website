import './Community.css'
import { SlEnvolopeLetter } from "react-icons/sl";
function Community (){
    return(
        <div className='CummunityDiv'>
              <div className='CommunityIcon-text'>
                <SlEnvolopeLetter id='letterIcon' />
                <div className='Communitytexts'>
                    <p id='bigCommTxt'>Join the Octavia Community !</p>
                    <p id='smallCommTxt'>Be the first to know about our new arrivals, <br />  
                    collections , offers and More ! </p>
                </div>
                   
                </div>
             
            <div className='CommunityForm'>
                <form >
                 
                <input id='emailInput' type="email" placeholder='Enter your Email' />
                <button id='emailBtn' type='submit'> Submit </button>
                </form>

            </div>
        </div>
    )
}
export default Community