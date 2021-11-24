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

function FollowListModal(props) {
    useEffect (() => {
    },[])
    const ModalWithHeading = ({
      onDismiss,
    }) => {
  
      return (
        <Modal
          accessibilityModalLabel="MUSE 이용약관"
          onDismiss={onDismiss}
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
            onClick={() => setShouldShow(true)}
        >
        </Button>
        {shouldShow && (
          <Layer zIndex={modalZIndex}>
            <ModalWithHeading onDismiss={() => setShouldShow(false)} />
          </Layer>
        )}
      </React.Fragment>
    );
  }

export default FollowListModal