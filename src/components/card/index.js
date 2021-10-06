import React from 'react'
import { CardContainer,
        ImageContainer,
        PostTitle,
        LikesIcon,
        InfoContainer,
        EyeIcon
} from './style'
function Card({idx, title, image}) {
    const onClickPost = () => {
        console.log(idx)
    }
    return (
            <CardContainer onClick = {onClickPost}>
                <ImageContainer src={`https://muse-bucket.s3.ap-northeast-2.amazonaws.com/media/public/${image}`}/>
                <InfoContainer>
                    <PostTitle>{title}</PostTitle>
                    <div>
                        <LikesIcon/>
                        <EyeIcon/>
                    </div>
                </InfoContainer>
            </CardContainer>
    )
}

export default Card
