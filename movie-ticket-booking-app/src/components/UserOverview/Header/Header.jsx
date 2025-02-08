import "./Header.scss";
import { useState } from "react";
import { Input, Select, Button } from "antd";
import Login from "../../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../../../Slices/userSlice";
import UserInfo from "../../UserInfo/UserInfo";

const locations = [
  {
    value: "Chennai",
    label: "Chennai",
  },
  {
    value: "Madurai",
    label: "Madurai",
  },
  {
    value: "Trichy",
    label: "Trichy",
  },
  {
    value: "",
    label: "Select a City",
    disabled: true,
  },
];

function Header({ handleSearch, searchInput }) {
  const dispatch = useDispatch();
  // const [searchInput, setSearchInput] = useState('');
  const [isModalOpen, ModalToggle] = useState(false);

  const user = useSelector((state) => state.userInfo.user);
  const city = useSelector((state) => state.userInfo.city);

  const handleCityChange = (value) => {
    dispatch(setCity(value));
  };

  const onChangeSearch = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="header_container">
      <div className="title">
        <h2 className="app_name">Book My Tickets</h2>
      </div>
      <Input
        className="movie_search"
        value={searchInput}
        placeholder="Search"
        onChange={onChangeSearch}
      ></Input>
      <Select
        defaultValue=""
        placeholder="City"
        className="location_Selector"
        value={city}
        onChange={handleCityChange}
        options={locations || []}
      />
      {!user.name ? (
        <Button className="signin-btn" onClick={() => ModalToggle(true)}>
          Signin
        </Button>
      ) : (
        <UserInfo></UserInfo>
      )}
      <Login
        isModalOpen={isModalOpen}
        handleCancel={() => ModalToggle(false)}
      />
    </div>
  );
}

export default Header;
