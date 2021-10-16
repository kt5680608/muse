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
        FullImageContainer
} from './style'
import { useHistory } from 'react-router-dom'
import { likeBtn } from '../../actions/likeBtn'
import { currentIdx } from '../../actions/currentIdx'

function Card({idx, title, image, liked}) {
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const onClickHistoryPush = () => { 
        console.log(idx);
        history.push(`/display-details/${idx}`)
    }
    
    // const onClickToLike = async() => {
    //     const post_idx = idx
    //     const token = JSON.parse(localStorage.getItem('token'));
    //     await axios.post("http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/like/",{
    //         "user_id": token.user.user_id,
    //         "post_idx": post_idx
    //     })
    //     .then(res => {
    //         try{
    //             console.log(res.data);
    //             setIsLiked(!isLiked);
    //         }
    //         catch(e){
    //             console.log(e)
    //         }
    //     })
    // }

    return (
            <CardContainer>
                    <ImageContainer src={`${image}`} onClick = {onClickHistoryPush}/>
                <InfoContainer>
                    <PostTitle>{title}</PostTitle>
                    <PostStatusContainer>
                        <LikesIcon />
                        <span>{liked}</span>
                        <EyeIcon/>
                    </PostStatusContainer>
                </InfoContainer>
            </CardContainer>
    )
}

export default Card
