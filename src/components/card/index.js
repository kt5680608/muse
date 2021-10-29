import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom';
import { DetailPost } from '../.././pages'
import { Modal, ModalLink } from 'react-router-modal';
import 'react-router-modal/css/react-router-modal.css'
import { CardContainer,
        ImageContainer,
        PostTitle,
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
import { currentIdx } from '../../actions/currentIdx'

function Card({idx, title, image, liked, avatar, views, likes}) {
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const onClickHistoryPush = () => { 
        console.log(idx);
        history.push(`/display-details/${idx}`)
    }
    
    return (
            <CardContainer
                whileHover = {{ scale: 1.05}}
            >
                    <ImageContainer src={`${image}`} onClick = {onClickHistoryPush}/>
                <InfoContainer>
                    <WriterContainer>
                        <Avatar src={avatar} alt=""/>
                        <PostTitle>{title}</PostTitle>
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
