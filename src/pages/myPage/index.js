import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateUser, profileImageUpload} from '../../actions/updateUser'
import { userInfo} from '../../actions/userInfo'
import { Navbar } from '../../components'
import Image from "react-bootstrap/Image";
import{ Avatar, MyPageContainer } from './style'

function MyPage() {
    const getUserInfo = useSelector(state => state.userInfo.nickname);
    const getUserAvatar = useSelector(state => state.userInfo.avatar);
    const history = useHistory();
    const dispatch = useDispatch();
    const [nickname, setNickname] = useState('');
    const [cover, setCover] = useState(); 
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('변경');
    }
    const onChangeProfileImage = (e) => {
        e.preventDefault();
        setCover(e.target.files[0]);
    }
    const onClickToSubmit = async(e) => {
        if (cover == null){
            console.log('프로필 사진 안바낌')
        }
        else{
            const data = new FormData();
            data.append('avatar', cover);
            
            try{
                await dispatch(profileImageUpload(data));
            }
            catch{
                console.log(e);
            }
        }
        if (nickname == '') {
            console.log('빈칸이라 그대로 처리해슴')
        }
        else{
            try{
                await dispatch(updateUser(nickname));
                
            }
            catch(e){
                console.error(e);
            }
        }
            await history.push('/userUpdate')
    }
    const onPressEnter = (e) => {
        if(e.key == 'Enter'){
            onClickToSubmit();
        }
    }
    useEffect(() => {
        dispatch(userInfo());
        
        //console.log('페이지 렌더가 될 때마다 userInfo를 가져옵니다')
        //console.log('getUserInfo:', getUserInfo)
    },[])

    return (
        <div>
            <Navbar/>
            <MyPageContainer>
                <h1>{getUserInfo}</h1>
                <Avatar src={getUserAvatar}></Avatar>
                <form onSubmit = { handleSubmit } encType="multipart/form-data">
                    <input type="text" onChange = { onChangeNickname } pattern="[A-Za-z]+"/>
                    <input type="file" name = 'images' onChange = {onChangeProfileImage}/>
                    <button type = "submit" onClick = { onClickToSubmit} onKeyPress = {onPressEnter}> 제출</button>
                </form>
            </MyPageContainer>
        </div>
    )
}

export default MyPage
