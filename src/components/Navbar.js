import { Link } from "react-router-dom";
import  './Navbar.css';
import logo from "../assets/logo_image1.PNG";
import ExpandableSearch from "./ExpandableSearch";
import SearchIcon from "@mui/icons-material/Search";
function Navbar({onSearch}){
    return(
        <nav className='navbar'>
            <div className='navbar_left'>
                <h2 className='logo'>
                    <img src={logo} className="logo_img" alt="logo"/>
                    PickBazar</h2>
                <div className="select-wrapper">
                <select className='category'>
                    <option>Fruits</option>
                    <option>Vegetables</option>
                    <option>Grocery</option>
                </select>
                </div>
            </div>

            <div className="navbar_center">
                <Link to='/'>Shops</Link>
                <Link to='/offers'>Offers</Link>
                <Link to='/contacts'>Contact</Link>

                <select className="pages">
                    <option>Pages</option>
                    <option>About</option>
                    <option>FAQ</option>
                </select>
            </div>
            <ExpandableSearch onSearch={onSearch}/>

            

            <div className='navbar_right'>
                <button className="join_button">Join</button>
                <button className="seller_button">Become a seller</button>
            </div>
            

        </nav>
    );

}
export default Navbar;