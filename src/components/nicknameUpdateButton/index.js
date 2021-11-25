import React, {useState, useEffect} from 'react'
import 'gestalt/dist/gestalt.css'
import { Box, Button, Checkbox, CompositeZIndex, FixedZIndex, Flex, Text, Layer, Modal } from "gestalt";
import { Avatar,
    NicknameInput,
    NicknameLabel,
    SubmitButton,
    SubmitButtonContainer,
    InputContainer,
    ModalName,
    Form,
    Pre,
    Textarea,
    DeleteButton,
    AvatarContainer
} from './style'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Input(ownerInfo){
    const [originalNickname, setOriginalNickname] = useState(ownerInfo.nickname);
    const [originalAvatar, setOriginalAvatar] = useState(ownerInfo.avatar);
    const [changedNickname, setChangedNickname] = useState('');
    const [changedAvatar, setChangedAvatar] = useState(null);
    const [avatarPreview, setAvatarPreview ] = useState(null);
    const [originalIntroduce, setOriginalIntroduce] = useState(ownerInfo.selfIntroduce);
    const [changedIntroduce, setChangedIntroduce] = useState('');
    const [deleteAvatarButton, setDeleteAvatarButton] = useState(false); 

    const MUSE_DOMAIN = process.env.REACT_APP_MUSE_DOMAIN

    const onChangeNickname = (e) => {
        e.preventDefault();
        setChangedNickname(e.target.value);
    }

    const onChangeAvatar = (e) => {
        e.preventDefault();
        setChangedAvatar(e.target.files[0]);
        const imgTarget = (e.target.files)[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL (imgTarget);
        fileReader.onload = function(e){
            setAvatarPreview(e.target.result);
        }
    }

    const onChangeIntroduce = (e) => {
        e.preventDefault();
        setChangedIntroduce(e.target.value);
        console.log(changedIntroduce);
    }

    const onPressEnter = (e) => {
        if(e.key == 'Enter'){
            handleSubmit();
        }
    }

    const updateUser = (formData) => {
        const token = JSON.parse(localStorage.getItem('token'));
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN
        return fetch(`${API_DOMAIN}/accounts/update/`,{
            method: 'POST',
            headers:{
            Authorization: `${token.token}`
            },
            body: formData
        })
        .then(res => res.json())
        .then((data) =>{
            console.log(data);
            return data
        }
        )
    }

    const deleteAvatar = (e) => {
        e.preventDefault();
        setDeleteAvatarButton(true);
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nickname',changedNickname);
        formData.append('avatar', changedAvatar);
        formData.append('self_introduce', changedIntroduce);

        if(changedNickname == ''){
            formData.append('nickname', originalNickname);
        }

        if(changedAvatar == null){
            //프로필 사진 안바뀌면 'original'
            formData.append('avatar_state', 'original');
        }
        // 프로필 사진 제거하면 avatar_state = delete
        if(deleteAvatarButton == true && changedAvatar == null){
            formData.append('avatar_state', 'delete');
        }
        
        if(changedIntroduce == ''){
            formData.append('self_introduce', originalIntroduce);
        }

        try{
            await updateUser(formData);
            if(changedNickname ==''){
                console.log(originalNickname)
                window.location.href = `${MUSE_DOMAIN}/my-page/${originalNickname}`;
            }
            else if(changedNickname != '' || changedNickname != undefined){
                window.location.href = `${MUSE_DOMAIN}/my-page/${changedNickname}`;
            }
        }
        catch(e){
            console.error(e);
        }
    }
    return(
        <>
            <form>
                <InputContainer>
                    <ModalName>프로필 수정</ModalName>
                    <Form>
                        <label htmlFor="input-file">
                            { avatarPreview == null ?
                                <AvatarContainer>
                                    { deleteAvatarButton == false ?
                                        <Avatar src ={ownerInfo.avatar}/> 
                                    :
                                        <Avatar src ="https://muse-bucket.s3.ap-northeast-2.amazonaws.com/media/public/default_avatar.png"/> 
                                    }
                                    <DeleteButton onClick = {deleteAvatar}>삭제</DeleteButton>
                                </AvatarContainer>
                                :
                                <AvatarContainer>
                                    <Avatar src = {avatarPreview} />
                                    <DeleteButton onClick = {deleteAvatar}>삭제</DeleteButton>
                                </AvatarContainer>
                            }
                        </label>
                        <input type="file" id = "input-file" style ={{ display: "none" }} onChange = {onChangeAvatar}/>
                        <div>
                            <NicknameLabel>닉네임</NicknameLabel>
                            <NicknameInput type = "text" placeholder = {ownerInfo.nickname} onChange = {onChangeNickname} onKeyPress = {onPressEnter}/>
                        </div>
                        <div>
                            <NicknameLabel>자기소개</NicknameLabel>
                            <Pre>
                                <Textarea placeholder = {originalIntroduce} onChange = {onChangeIntroduce}></Textarea>
                            </Pre>
                        </div>
                    </Form>
                    <SubmitButtonContainer>
                        <SubmitButton type = "submit" onClick = {handleSubmit}>제출</SubmitButton>
                    </SubmitButtonContainer>
                </InputContainer>
            </form>
        </>
    )
}
function NicknameUpdateButton(nickname) {
    useEffect (() => {
        console.log(nickname.nickname);
        console.log(nickname.avatar)
        console.log(nickname.selfIntroduce)
    },[])
    const ModalWithHeading = ({
      onDismiss,
    }) => {
  
      return (
        <Modal
          accessibilityModalLabel="MUSE 이용약관"
          onDismiss={onDismiss}
          footer={
            <Input
                nickname = {nickname.nickname}
                avatar = {nickname.avatar}
                selfIntroduce = {nickname.selfIntroduce}
            />
          }
          size="sm"
        >
        </Modal>
      );
    };
  
    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(10);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  
    return (
      <React.Fragment>
        <Button size= "sm"
            text = "프로필 수정"
            onClick={() => setShouldShow(true)}
        />
        {shouldShow && (
          <Layer zIndex={modalZIndex}>
            <ModalWithHeading onDismiss={() => setShouldShow(false)} />
          </Layer>
        )}
      </React.Fragment>
    );
  }

export default NicknameUpdateButton