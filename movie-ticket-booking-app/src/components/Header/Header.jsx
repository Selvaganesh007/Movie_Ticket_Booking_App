import './Header.scss';
import { useState } from 'react';
import { Input, Select, Button } from "antd";
import ticket from '../../assets/ticket3.svg';
import MenuIcon from  "../../assets/icons8-menu.svg";

function Header() {
    const [selectedOption, setSelectedOption] = useState('');
    const [searchInput, setSearchInput] = useState('');

    const handleCityChange = (value) => {
      setSelectedOption(value);
    }  

    const onChangeSearch = (e) => {
      setSearchInput(e.target.value.trim())
    }
    return (
      <>
      <div className="header-container">
        <div className="title">
          <img className="logo" src={ticket} alt="My Icon" />
          <h2>Book My Tickets</h2>
        </div>
        <Input className="search-input" value={searchInput} placeholder='Search' onChange={onChangeSearch}></Input>
        <Select
          defaultValue=""
          placeholder="Select a City"
          className="city"
          value={selectedOption}
          onChange={handleCityChange}
          options={[
            {
              value: 'Chennai',
              label: 'Chennai',
            },
            {
              value: 'Madurai',
              label: 'Madurai',
            },
            {
              value: 'Trichy',
              label: 'Trichy',
            },
            {
              value: '',
              label: 'Select a City',
              disabled: true,
            },
          ]}
        />
          <Button className="signin-btn">Signin</Button>
          <Button className="menu">
            <img src={MenuIcon} alt="Menu Icon"/>
          </Button>
      </div>
      </>
    )
  }
  
  export default Header;