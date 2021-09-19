import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateUser, userInfo} from '../../actions/updateUser'
import { Navbar } from '../../components'

function MyPage() {
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
            await history.push('/userUpdate')
            await dispatch(userInfo());
            
        }
        catch(e){
            console.error(e);
            console.log('error in Auth component')
        }
    }
    const onPressEnter = (e) => {
        if(e.key == 'Enter'){
            onClick();
        }
    }
    useEffect(() => {
        dispatch(userInfo());
        console.log('페이지 렌더가 될 때마다 userInfo를 가져옵니다')
        console.log('getUserInfo:', getUserInfo)
    },[])
    return (
        <div>
            <Navbar/>
             { getUserInfo == null ? <h1>{nickname}</h1> : <h1>{getUserInfo}</h1>}
            <form onSubmit = { handleSubmit }>
                <input type="text" onChange = { onChange } onKeyPress = {onPressEnter}/>
                <button type = "button" onClick = { onClick }>변경</button>
            </form>
        </div>
    )
}

export default MyPage
