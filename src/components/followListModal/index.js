import React, {useState, useEffect} from 'react'
import 'gestalt/dist/gestalt.css'
import { Box, Button, Checkbox, CompositeZIndex, FixedZIndex, Flex, Text, Layer, Modal } from "gestalt";
import { Avatar,
  FollowerListUl,
  FollowButton
} from './style'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FollowerListLi } from '../../components'

function FollowListModal(props) {
  const anchorRef = React.useRef(null);
  const [followerCount, setFollowerCount] = useState();
  useEffect (() => {
  },[])
  const ModalWithHeading = ({
    onDismiss,
  }) => {
    return (
      <Modal
        accessibilityModalLabel="follwerList"
        onDismiss={onDismiss}
        size="sm"
        heading = "팔로워" 
      >
        <Box
          paddingX = {8}
          paddingY = {4}
        >
          <FollowingList
            followerLists = {props.followerLists}
          />
        </Box>
      </Modal>
    );
  };

  const [shouldShow, setShouldShow] = React.useState(false);
  const HEADER_ZINDEX = new FixedZIndex(10);
  const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);

  return (
    <React.Fragment>
      <Box>
        <Button size= "sm"
            onClick={() => setShouldShow(true)}
            text = {"팔로워" + "\xa0" + props.followerCount + "명"}
            shouldFocus = {false}
            size = "md"
            margin = {100}
            ref = {anchorRef}
        >
        </Button>
      </Box>
      {shouldShow && (
        <Layer zIndex={modalZIndex}>
          <ModalWithHeading onDismiss={() => setShouldShow(false)} />
        </Layer>
      )}
    </React.Fragment>
  );
}

export default FollowListModal

function FollowingList(props){
  useEffect(() => {
    setFollowers(props.followerLists)
  },[])
  const [followers, setFollowers] = useState([]);
  
  return(
    <FollowerListUl>
      {followers.map((follower) => (
        <>
          <FollowerListLi
            nickname = {follower.following}
          />
        </>
      ))}
    </FollowerListUl>
  )
}