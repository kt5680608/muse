import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { CardContainer,
        ImageContainer,
        PostTitle,
        LikesIcon,
        InfoContainer,
        EyeIcon,
        PostStatusContainer
} from './style'
import { likeBtn } from '../../actions/likeBtn'
function Card({idx, title, image, liked}) {
    const [isLiked, setIsLiked] = useState(false);
    const onClickPost = () => {
        console.log(idx)
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
                <ImageContainer src={`https://muse-bucket.s3.ap-northeast-2.amazonaws.com/media/public/${image}`} onClick = {onClickPost}/>
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
