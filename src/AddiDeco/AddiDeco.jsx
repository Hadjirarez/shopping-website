import './AddiDeco.css'
import { FaMedal , FaRegHeart  } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LuTrees } from "react-icons/lu";
function AddiDeco(){
    return(
        <div className='AddiContainer'>
            <div className='addDiv'>
                <FaMedal className='addIcons' />
                <div className='addTexts'>
                    <p className='addTlt'>Quality you can trust</p>
                <p className='addSubTxt'>Premium products <br /> crafted with care</p>
                </div>
                
            </div>
    

            <div className='addDiv'>
                <RiCustomerService2Fill className='addIcons' />
                <div className='addTexts'>
                      <p className='addTlt'>Customer Support</p>
                <p className='addSubTxt'>We're here to help,<br /> whenever you need</p>
                </div>
              
            </div>




            <div className='addDiv'> 
                <FaRegHeart className='addIcons' />
                <div className='addTexts'>
                <p className='addTlt' >Loved by Thousands</p>
                <p className='addSubTxt'>Join our happy <br /> customer community</p>
            </div>
                
            </div>



            <div className='addDiv1'>
                <LuTrees className='addIcons' />
                <div className='addTexts'>
                     <p className='addTlt' >Sustainable Choise</p>
                <p className='addSubTxt'>Thoughtful shopping <br /> for a better planet</p>
                </div>
               
            </div>
        </div>
    )
}
export default AddiDeco