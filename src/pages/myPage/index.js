import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateUser, userInfo, profileImageUpload} from '../../actions/updateUser'
import { Navbar } from '../../components'

function MyPage() {
    const getUserInfo = useSelector(state => state.userInfo.infoState);
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
            const token = JSON.parse(localStorage.getItem('token'));
            const data = new FormData();
            data.append('avatar', cover);
            data.append('user_id', token.user.user_id);
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
                console.log('error in Auth component')
            }
        }
            await history.push('/userUpdate')
    }

    // const onClick = async() => {
    //     if (nickname == '') {
    //         console.log('빈칸이라 그대로 처리해슴')
    //     }
    //     else{
    //         try{
    //             await dispatch(updateUser(nickname));
    //             await dispatch(userInfo());
    //             await history.push('/userUpdate')
                
    //         }
    //         catch(e){
    //             console.error(e);
    //             console.log('error in Auth component')
    //         }
    //     }
    // }
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
             <h1>{getUserInfo}</h1>
            <form onSubmit = { handleSubmit } encType="multipart/form-data">
                <input type="text" onChange = { onChangeNickname } />
                <input type="file" name = 'images' onChange = {onChangeProfileImage}/>
                <button type = "submit" onClick = { onClickToSubmit} onKeyPress = {onPressEnter}> 제출</button>
            </form>
        </div>
    )
}

export default MyPage
