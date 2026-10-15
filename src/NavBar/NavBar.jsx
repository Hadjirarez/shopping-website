import logo from '../assets/logoH.jpg';
import './NavBar.css'
import { CiSearch , CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
function NavBar(){
    return(
        <div>

            <div className="NavBigContainer">

     <div className="logoDiv">
                <img src={logo} alt="logo" />
                <p>My Shop</p>
            </div>


      <nav className="NavContainer">
  <a className='navTitles' href="/">Home</a>
  <a className='navTitles' href="/shop">Shop</a>
  <a className='navTitles' href="/collections">Collections</a>
  <a className='navTitles' href="/about">About Us</a>
  <a className='navTitles' href="/contact">Contact</a>
</nav>


            <div className="UserNeedsContainer">
                <button className='navUserBtns'><CiSearch size={25}/></button>
                 <button  className='navUserBtns'><CiUser size={25} /></button>
                  <button  className='navUserBtns'><HiOutlineShoppingBag size={25}/></button>
            </div>
            </div>
       
     
        </div>
    )
}
export default NavBar