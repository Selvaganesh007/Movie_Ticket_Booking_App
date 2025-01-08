
import {Modal, Input,message, Button} from "antd";
import './Login.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { setUser } from "../../Slices/userSlice";

function Login({isModalOpen, handleCancel}) {
  const dispatch = useDispatch();

  const [userDetail, setUserDetail] = useState({name: '', password:'', mobile: ''});

  const [isRegister, setIsRegister] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    setIsRegister(false);
  }, [isModalOpen]);

  const setUserData = (e) => {
    const { name, value} = e.target;
    setUserDetail((currInput) => {
      return{
        ...currInput,
        [name]: name === "mobile" ? value.replace(/\D/g, '') : value
      }
    });
  }

  const onClickSignIn = () => {
    if(!userDetail.mobile.length || !userDetail.password.length ) {
      messageApi.open({
        type: 'error',
        content: 'All fields are mandatory',
        duration: 2,
      });
    } else{
      const userInfo = JSON.parse(localStorage.getItem(userDetail.mobile));
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

  const onClickSignUp = () => {
    if(!userDetail.mobile.length || !userDetail.name.length || !userDetail.password.length ) {
      messageApi.open({
        type: 'error',
        content: 'All fields are mandatory',
        duration: 2,
      });
      return;
    }
    localStorage.setItem(userDetail.mobile, JSON.stringify(userDetail));
    clearState();
    setIsRegister(false);
    messageApi.open({
      type: 'success',
      content: 'Registration successfull',
      duration: 2,
    });
  }

  const clearState = () => {
    setUserDetail({ name: '', password: '', mobile: '' });
  }

  return (
    <>
      {contextHolder}
      <div>
        <Modal title={!isRegister ? "Login" : "Signup"} open={isModalOpen} footer={null} onCancel={handleCancel}>
        <section className="modal-body" id="modalDescription">
        {isRegister && (
          <>
            <div>Name</div>
            <Input value={userDetail.name} name="name" onChange={setUserData}/>
          </>)}
            <div>Mobile No.</div>
            <Input value={userDetail.mobile} maxLength={10} name="mobile" onChange={setUserData}/>
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
                <div className="footer-text">Dont have an account? <span onClick={() => setIsRegister(true)}>Create new account</span>
                </div>
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
                <div className="footer-text">Having an account? <span onClick={() => setIsRegister(false)}>Back to login</span></div>
              </>
          )}
          </footer>
        </Modal>
      </div>
    </>
  )
}

export default Login;