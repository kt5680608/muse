import React, {useState, useEffect} from 'react'
import { Navbar, hashTagComponent } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailPost } from '../../actions/post'
import { userInfo } from '../../actions/userInfo'
import { DetailContainer,
        Viewport,
        DetailImage,
        DetailTitle,
        MainContainer,
        DetailInfoContainer,
        CustomUl,
        CustomLi,
        DetailText,
        DetailUserAvatar
} from './style'
function DetailPost() {
    const dispatch = useDispatch();
    const postIdxUrl = window.location.pathname.split('/')[2];
    const getPost= useSelector(state => state.detailPost);
    const getUserInfo = useSelector( state => state.userInfo);
    const [hashTags, setHashTags] = useState(null);

    useEffect (() => {
        dispatch(getDetailPost(postIdxUrl));
        dispatch(userInfo());
        console.log(getPost)
    },[])

    const onClicktoAPI = () => {
        dispatch(getDetailPost(postIdxUrl));
        console.log(getPost)   
    }

    return (
        <Viewport>
            <Navbar/>
            <MainContainer onClick = {onClicktoAPI}>
                <DetailContainer>
                    <DetailImage id="imgID" src={`${getPost.image}`} alt="" />
                    <DetailInfoContainer>
                        <DetailTitle>{getPost.title}</DetailTitle>
                        <img src={`${getUserInfo.avatar}`} alt=""/>
                        {getPost.writer}
                        <DetailText>{getPost.content}</DetailText>
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
                                    <></>}
                                </CustomUl>
                            })}
                    </DetailInfoContainer>
                </DetailContainer>
            </MainContainer>
        </Viewport>
    )
}

export default DetailPost
