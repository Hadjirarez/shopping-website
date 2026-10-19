 import HeroSection from './HeroSection/HeroSection.jsx';
import NavBar from './NavBar/NavBar.jsx';
import Items from './Items/Items.jsx';
import NewArrivals from './NewArrivals/NewArrivals.jsx';
import Community from './Community/Community.jsx'

function app (){
  return(
    <div>
<NavBar/>
<HeroSection/>
<Items/>
<NewArrivals/>
<Community/>
    </div>
  
  
  )
}
export default app