import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom';
import { DetailPost } from '../.././pages'
import 'react-router-modal/css/react-router-modal.css'
import { CardContainer,
        ImageContainer,
        PostWriter,
        LikesIcon,
        InfoContainer,
        EyeIcon,
        PostStatusContainer,
        CustomModal,
        FullImageContainer,
        Avatar,
        WriterContainer,
        CustomSpan
} from './style'
import { useHistory } from 'react-router-dom'
import { likeBtn } from '../../actions/likeBtn'

function Card({idx, title, image, liked, avatar, views, likes, writer}) {
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const onClickHistoryPushIdx = () => { 
        console.log(idx);
        history.push(`/display-details/${idx}`)
    }

    const onClickHistoryPushNickname = () => {
        console.log(writer);
        history.push(`/my-page/${writer}`)
    }
    
    return (
            <CardContainer>
                    <ImageContainer src={`${image}`} onClick = {onClickHistoryPushIdx}
                        whileHover = {{ scale: 1.05}}
                        whileTap = {{scale: 0.95}}
                    />
                <InfoContainer>
                    <WriterContainer onClick = {onClickHistoryPushNickname}>
                        <Avatar src={avatar} alt=""/>
                        <PostWriter>{writer}</PostWriter>
                    </WriterContainer>
                    <PostStatusContainer>
                        <LikesIcon />
                        <CustomSpan>{likes}</CustomSpan>
                        <EyeIcon/>
                        <CustomSpan>{views}</CustomSpan>
                    </PostStatusContainer>
                </InfoContainer>
            </CardContainer>
    )
}

export default Card
