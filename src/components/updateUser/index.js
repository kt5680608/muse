import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateUser, userInfo} from '../../actions/updateUser'
function UpdateUser() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [nickname, setNickname] = useState(null);
    const onChange = (e) => {
        setNickname(e.target.value);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('변경');
    }
    const getUserInfo = useSelector(state => state.userInfo.infoState);

    const onClick = async() => {
        try{
            dispatch(updateUser(nickname));
            
        }
        catch(e){
            console.error(e);
            console.log('error in Auth component')
        }
    }
    useEffect(() => {
        dispatch(userInfo());
        console.log('디스패치 실행')
    },[])
    return (
        <>
            <h1>안녕 {getUserInfo}</h1>
            <form onSubmit = { handleSubmit }>
                <input type="text" onChange = { onChange }/>
                <button type = "submit" onClick = { onClick }>변경</button>
            </form>
        </>
    )
}

export default UpdateUser

