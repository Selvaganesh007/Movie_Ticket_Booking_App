import './UserInfo.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Slices/userSlice';

function UserInfo() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.userInfo.user);
    const onClickLogout = () => {
        dispatch(logout());
    }
    return(
        <div className='icon-container'>
            User
            <div className='drop-down'>
                <div>Hi {user.name}</div>
                <div>Mobile: {user.mobile}</div>
                <div className='logout' onClick={onClickLogout}>Logout</div>
            </div>
        </div>
    )
}

export default UserInfo;