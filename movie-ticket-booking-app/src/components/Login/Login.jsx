
import {Modal, Input, Button} from "antd";
import './Login.scss'
import { useState } from "react";
function Login({isModalOpen, handleOk, handleCancel}) {
  const [Password, setPassword] = useState('');
  const [id, setId] = useState('');

  const [isRegister, setIsRegister] = useState(false);

  const onChangePassword = (e) => {
    setPassword(e.target.value.trim());
  }

  const onChangeId = (e) => {
    setId(e.target.value.trim())
  }

  const onClickSignIn = () => {

  }

  const onClickSignUp = () => {

  }

  return (
    <div>
      <Modal title={!isRegister ? "Login" : "Signup"} open={isModalOpen} footer={null} onCancel={handleCancel}>
      <section class="modal-body" id="modalDescription">
          <div>Login Id</div>
          <Input value={id} onChange={onChangeId}/>
          <div>Password</div>
          <Input value={Password} onChange={onChangePassword}/>
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