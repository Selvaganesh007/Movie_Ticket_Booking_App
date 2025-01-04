import './Header.scss';
import { useState } from 'react';
import ticket from '../../assets/ticket3.svg';
import MenuIcon from  "../../assets/icons8-menu.svg";

function Header() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleCityChange = (event) => {
      setSelectedOption(event.target.value);
;    }  
    return (
      <>
      <div class="header-container">
        <div class="title">
          <img class="logo" src={ticket} alt="My Icon" />
          <h2>Book My Tickets</h2>
        </div>
        <input class="search-input" placeholder='Search'></input>
        <select class="city" value={selectedOption} onChange={handleCityChange}>
          <option value="" disabled>
            Select a City
          </option>
          <option value="Chennai">Chennai</option>
          <option value="Madurai">Madurai</option>
          <option value="Trichy">Trichy</option>
        </select>
          <button class="signin-btn">Signin</button>
          <button class="menu">
            <img src={MenuIcon} alt="Menu Icon"/>
          </button>
      </div>
      </>
    )
  }
  
  export default Header;