import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom';
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
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const history = useHistory();
    const handleShow = () => { 
        setShow(true);
        const getCurrentIdx = idx;
        dispatch(currentIdx(getCurrentIdx));
        history.push(`${idx}`)
        console.log(idx);
    }
    
    const onClickToLike = async() => {
        const post_idx = idx
        const token = JSON.parse(localStorage.getItem('token'));
        await axios.post("http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/like/",{
            "user_id": token.user.user_id,
            "post_idx": post_idx
        })
        .then(res => {
            try{
                console.log(res.data);
                setIsLiked(!isLiked);
            }
            catch(e){
                console.log(e)
            }
        })
    }

    return (
            <CardContainer>
                <ImageContainer src={`https://muse-bucket.s3.ap-northeast-2.amazonaws.com/media/public/${image}`} onClick={handleShow}/>
                <InfoContainer>
                    <PostTitle>{title}</PostTitle>
                    <PostStatusContainer>
                        { isLiked == true ? 
                            <h1>on</h1>
                        :
                            <h1>off</h1>
                        }
                        <LikesIcon onClick = {onClickToLike}/>
                        <span>{liked}</span>
                        <EyeIcon/>
                    </PostStatusContainer>
                </InfoContainer>
            </CardContainer>
    )
}

export default Card
