
import {Modal, Input, Button} from "antd";
import './Login.scss'
import { useState } from "react";
function Login({isModalOpen, handleOk, handleCancel}) {
  const [userDetail, setUserDetail] = useState({name: '', password:'', mobile: ''});

  const [isRegister, setIsRegister] = useState(false);

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

  }

  const onClickSignUp = () => {
    localStorage.setItem(userDetail.mobile, JSON.stringify(userDetail));
    clearState();
    setIsRegister(false);
    console.log("registration successfull")
  }

  const clearState = () => {
    setUserDetail({ name: '', password: '', mobile: '' });
  }

  return (
    <div>
      <Modal title={!isRegister ? "Login" : "Signup"} open={isModalOpen} footer={null} onCancel={handleCancel}>
      <section class="modal-body" id="modalDescription">
      {isRegister && (
        <>
          <div>Name</div>
          <Input value={userDetail.name} name="name" onChange={setUserData}/>
        </>)}
          <div>Mobile No.</div>
          <Input value={userDetail.mobile} name="mobile" onChange={setUserData}/>
          <div>Password</div>
          <Input value={userDetail.password}  name="password" onChange={setUserData}/>
      </section>
      <footer class="modal-footer">
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
  )
}

export default Login;