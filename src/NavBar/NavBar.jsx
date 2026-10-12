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
  <a href="/">Home</a>
  <a href="/shop">Shop</a>
  <a href="/collections">Collections</a>
  <a href="/about">About Us</a>
  <a href="/contact">Contact</a>
</nav>


            <div className="UserNeedsContainer">
                <button><CiSearch size={25}/></button>
                 <button><CiUser size={25} /></button>
                  <button><HiOutlineShoppingBag size={25}/></button>
            </div>
            </div>
       
     
        </div>
    )
}
export default NavBar