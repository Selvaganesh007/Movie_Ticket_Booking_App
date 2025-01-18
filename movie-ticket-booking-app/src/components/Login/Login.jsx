
import {Modal, Input,message, Button} from "antd";
import './Login.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { setUser } from "../../Slices/userSlice";
import { useNavigate } from 'react-router-dom';


function Login({isModalOpen, handleCancel}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userDetail, setUserDetail] = useState({name: '', password:'', id: ''});

  const [isRegister, setIsRegister] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [activeTab, setTab] = useState("user");

  useEffect(() => {
    setIsRegister(false);
  }, [isModalOpen]);

  const setUserData = (e) => {
    const { name, value} = e.target;
    setUserDetail((currInput) => {
      return{
        ...currInput,
        [name]: value
      }
    });
  }

  const onClickSignIn = () => {
    if(!userDetail.id.length || !userDetail.password.length ) {
      messageApi.open({
        type: 'error',
        content: 'All fields are mandatory',
        duration: 2,
      });
    } else{
      if(activeTab === "admin") {
        if(userDetail.password === "admin" && userDetail.id === "admin") {
          navigate('/admin');
        } else {
          messageApi.open({
            type: 'error',
            content: 'Id or Password is wrong',
            duration: 2,
          });
        }
      } else {
        const userInfo = JSON.parse(localStorage.getItem(userDetail.id));
        if(!userInfo) {
          messageApi.open({
            type: 'error',
            content: 'No such user',
            duration: 2,
          });
        } else if(userInfo.password !== userDetail.password) {
          messageApi.open({
            type: 'error',
            content: 'Password is wrong',
            duration: 2,
          });
        } else {
          messageApi.open({
            type: 'success',
            content: 'Login successfull',
            duration: 2,
          });
          dispatch(setUser(userInfo))
          handleCancel();
        }
      }
    }
  }

  const onClickSignUp = () => {
    if(!userDetail.id.length || !userDetail.name.length || !userDetail.password.length ) {
      messageApi.open({
        type: 'error',
        content: 'All fields are mandatory',
        duration: 2,
      });
      return;
    }
    localStorage.setItem(userDetail.id, JSON.stringify(userDetail));
    clearState();
    setIsRegister(false);
    messageApi.open({
      type: 'success',
      content: 'Registration successfull',
      duration: 2,
    });
  }

  const clearState = () => {
    setUserDetail({ name: '', password: '', id: '' });
  }

  const onclickTab = (val) => {
    setTab(val);
  }

  return (
    <>
      {contextHolder}
      <div>
        <Modal title={<div className="header-title-container"><div className={activeTab === "user" ? "active-tab" : ""}  onClick={() => setTab("user")}>User</div><div className={activeTab === "admin" ? "active-tab" : ""} onClick={() => setTab("admin")}>Admin</div></div>} open={isModalOpen} footer={null} onCancel={handleCancel}>
        <section className="modal-body" id="modalDescription">
        {activeTab === 'user' && (<div className="heading-text">{!isRegister ? "Login" : "Signup"}</div>)}
        {isRegister && (
          <>
            <div>Name</div>
            <Input value={userDetail.name} name="name" onChange={setUserData}/>
          </>)}
            <div>User Id</div>
            <Input value={userDetail.id} name="id" onChange={setUserData}/>
            <div>Password</div>
            <Input value={userDetail.password}  name="password" onChange={setUserData}/>
        </section>
        <footer className="modal-footer">
          {!isRegister && (
              <>
                <div className="btn-container">
                  <Button  className="btn-class" onClick={onClickSignIn}>
                    Sign In
                  </Button>
                  <Button className="btn-class" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
                {activeTab === 'user' && (<div className="footer-text">Dont have an account? <span onClick={() => setIsRegister(true)}>Create new account</span></div>)}
            </>
          )}
            {isRegister && (
              <>
              <div className="btn-container">
                  <Button className="btn-class" onClick={onClickSignUp}>
                    Sign Up
                  </Button>
                  <Button className="btn-class" onClick={handleCancel}>
                    Cancel
                  </Button>
              </div>
              {activeTab === 'user' && (<div className="footer-text">Having an account? <span onClick={() => setIsRegister(false)}>Back to login</span></div>)}
              </>
          )}
          </footer>
        </Modal>
      </div>
    </>
  )
}

export default Login;