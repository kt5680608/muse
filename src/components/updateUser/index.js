import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../actions/updateUser'
function UpdateUser() {
    const dispatch = useDispatch();
    const [nickname, setNickname] = useState(null);
    const onChange = (e) => {
        setNickname(e.target.value);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('변경');
    }
    const onClick = () => {
        try{
            dispatch(updateUser(nickname));
        }
        catch(e){
            console.error(e);
            console.log('error in Auth component')
        }
    }
    return (
        <form onSubmit = { handleSubmit }>
            <input type="text" onChange = { onChange }/>
            <button type = "submit" onClick = { onClick }>변경</button>
        </form>
    )
}

export default UpdateUser

