import './Header.scss';
import { useState } from 'react';
import { Input, Select, Button } from "antd";
import ticket from '../../assets/ticket3.svg';
import MenuIcon from  "../../assets/icons8-menu.svg";
import Login from '../Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { setCity } from '../../Slices/userSlice';

function Header() {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');
    const [isModalOpen, ModalToggle] = useState(false);

    const user = useSelector((state) => state.userInfo.user);
    const city = useSelector((state) => state.userInfo.city)

    const handleCityChange = (value) => {
      dispatch(setCity(value))
    }  

    const onChangeSearch = (e) => {
      setSearchInput(e.target.value.trim())
    }

    const onSubmitModel = () => {
      console.log('asds')
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
          value={city}
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
          <Button className="signin-btn" onClick={() => ModalToggle(true)}>Signin</Button>
          <Button className="menu">
            <img src={MenuIcon} alt="Menu Icon"/>
          </Button>
          <Login isModalOpen={isModalOpen} handleOk={onSubmitModel} handleCancel={() => ModalToggle(false)} />
      </div>
      </>
    )
  }
  
  export default Header;