import React, {useState, useEffect} from 'react'
import 'gestalt/dist/gestalt.css'
import { Box, Button, Checkbox, CompositeZIndex, FixedZIndex, Flex, Text, Layer, Modal } from "gestalt";
import { Avatar,
    NicknameInput,
    NicknameLabel
} from './style'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Input(nickname){
    const [originalNickname, setOriginalNickname] = useState(nickname.nickname);
    const [originalAvatar, setOriginalAvatar] = useState(nickname.avatar);
    const [changedNickname, setChangedNickname] = useState('');
    const [changedAvatar, setChangedAvatar] = useState('');
    const onChangeNickname = (e) => {
        e.preventDefault();
        setChangedNickname(e.target.value);
        console.log(changedNickname);   
    }
    return(
        <NicknameInput type = "text" placeholder = {nickname.nickname} onChange = {onChangeNickname}/>
    )
}
function NicknameUpdateButton(nickname) {
    const [agree, setAgree] = useState(false);
    const isLogged = useSelector(state => state.authReducer.authData);
    useEffect (() => {
        console.log(nickname.nickname);
        console.log(nickname.avatar)
    },[])
    const ModalWithHeading = ({
      onDismiss,
    }) => {
  
      return (
        <Modal
          accessibilityModalLabel="MUSE 이용약관"
          heading="프로필 수정"
          onDismiss={onDismiss}
          footer={
            <Flex alignItems="center" justifyContent="end">
                        <Button color="blue" text="제출"/>
            </Flex>
          }
          size="sm"
        >
          <Box paddingX={8}>
            <Box marginBottom={8}>
                
            </Box>
            <h1>{nickname.nickname}</h1>
            <Avatar src ={nickname.avatar}/>
            <form>
            <NicknameLabel>닉네임</NicknameLabel>
            <Input/>
            <button type = "submit">daf</button>
            </form>
          </Box>
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