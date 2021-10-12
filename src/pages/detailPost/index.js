import React, {useState, useEffect} from 'react'
import { Navbar, hashTagComponent } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailPost } from '../../actions/post'
import { DetailContainer,
        Viewport,
        DetailImage,
        DetailTitle,
        MainContainer,
        DetailInfoContainer,
        CustomUl,
        CustomLi,
        DetailText
} from './style'
function DetailPost() {
    const dispatch = useDispatch();
    const postIdxUrl = window.location.pathname.split('/')[2];
    const getPost= useSelector(state => state.detailPost);
    const [hashTags, setHashTags] = useState(null);
    const getImageSize = () => {
        const getImage = document.getElementById('imgID')
        const imgWidth = getImage.width;
    }

    useEffect (() => {
        dispatch(getDetailPost(postIdxUrl));
        getImageSize();
        console.log(getPost)
    },[])

    return (
        <Viewport>
            <Navbar/>
            <MainContainer>
                <DetailContainer>
                    <DetailImage id="imgID" src={`https://muse-bucket.s3.ap-northeast-2.amazonaws.com/media/public/${getPost.image}`} alt="" />
                    <DetailInfoContainer>
                        <DetailTitle>{getPost.title}</DetailTitle>
                        <DetailText>{getPost.bodyText}</DetailText>
                            {getPost.hashTag !=null && getPost.hashTag.map((hashTag, index) => {
                                return <CustomUl key = {index}>
                                    { hashTag[0] && hashTag[1] != null ?
                                    <>
                                        {hashTag[0].split(",").map((hashtag) => (
                                            <CustomLi>#{hashtag}</CustomLi>
                                    ))}  
                                    {hashTag[1].split(",").map((hashtag) => (
                                        <CustomLi>#{hashtag}</CustomLi>
                                    ))}    
                                    </>
                                    :
                                    <>hi</>}
                                </CustomUl>
                            })}
                    </DetailInfoContainer>
                </DetailContainer>
            </MainContainer>
        </Viewport>
    )
}

export default DetailPost
