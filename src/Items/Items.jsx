import './Items.css'
import bagImage from '../assets/bag.jpg'
import keychainsImage from '../assets/keychain.jpg'
import dollImage from '../assets/doll.jpg'
import accessoriesImage from '../assets/accessories.jpg'
import clothingImage from '../assets/clothing.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
function Items(){
    return(
        <div className='itemsParentContainer'>
            <div className='itemsTitles'>
              <h2 id='categoriesShop'>Shop by Category</h2>
              <div id='browseMoreDiv'>
                    <button id='browseCall'>Browse all </button>
                     <IoIosArrowRoundForward id='itemsbrowsingArrow'/>
                    
              </div>
          
            </div>
          
     <div className='itemsContainer'>
        <div className='item-text'>
         <a href=""> <img className = 'itemsImg' src={bagImage} alt="Bags" /></a>
         <p className='itemName'>Bags</p>
         <p className='itemsNbr'>+50 items</p>
        </div>
      
      <div className='item-text'>
           <a href=""> <img className = 'itemsImg' src={keychainsImage} alt="Keychains" /></a>
         <p className='itemName'>Keychains</p>
         <p className='itemsNbr'>+120 items</p>
      </div>
        

        <div className='item-text'>
         <a href=""> <img className = 'itemsImg' src={dollImage} alt="Dolls" /></a>
          <p className='itemName'>Dolls</p>
          <p className='itemsNbr'>+60 items</p>
        </div>
          
          <div className='item-text'>
            <a href=""> <img  className = 'itemsImg' src={accessoriesImage} alt="Clothing" /></a>
           <p className='itemName'>Accessories</p>
           <p className='itemsNbr'>+150 items</p>
          </div>
           
           <div className='item-text'>
            <a href=""> <img className = 'itemsImg' src={clothingImage} alt="Accessories" /></a>
            <p className='itemName'>Clothes</p>
            <p className='itemsNbr'>+75 items</p>
           </div>
          
     </div>
 

        </div>
    )
}

export default Items