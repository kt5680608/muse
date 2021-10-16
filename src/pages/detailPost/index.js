import React, {useState, useEffect} from 'react'
import { Navbar } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailPost, getCommentPost } from '../../actions/post'
import { sendIsLiked } from '../../actions/likeBtn'
import { userInfo } from '../../actions/userInfo'
import * as style from './style'
import * as api from '../../api'
function DetailPost() {
    const token = JSON.parse(localStorage.getItem('token'));
    const dispatch = useDispatch();
    const postIdxUrl = window.location.pathname.split('/')[2];
    const getPost= useSelector(state => state.detailPost);
    const getUserInfo = useSelector( state => state.userInfo);
    const [idx, setIdx] = useState(null);
    const [comment, setComment] = useState('');
    const [showComment, setShowComment] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLiked, setIsLiked] = useState();
    const [post, setPost] = useState();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [writer, setWriter] = useState('');

    
    useEffect (() => {
        dispatch(getDetailPost(postIdxUrl));
        dispatch(userInfo());
        if (localStorage.getItem('token') == undefined) {
            return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/display/detail/${postIdxUrl}/`,{
            method: 'GET',
            })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                console.log(data.is_login_user_liked);
                setIsLiked(data.is_login_user_liked);
                setTitle(data.title);
                setImage(data.image);
                setWriter(data.writer);
                return data;
            })
        }
        else{
            return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/display/detail/${postIdxUrl}/`,{
                method: 'GET',
                headers: {
                'Authorization' : `${token.token}`,
                }
            })
            .then(res => res.json())
            .then((data) => {
                setIsLiked(data.is_login_user_liked);
                setTitle(data.title);
                setImage(data.image);
                setWriter(data.writer);
                return data;
            })
        }
    },[])
    const onChangeComment = (e) => {
        e.preventDefault();
        setComment(e.target.value);
    }

    const onClickToSubmit = async() => {
        try{
            const postIdx = getPost.idx;
            const data = comment;
            dispatch(getCommentPost(postIdx, data));
            window.location.reload(true);
        }
        catch(e){
            console.error(e);
        }
    }

    const onClickToLike = () => {
        try{
            const postIdx = getPost.idx;
            dispatch(sendIsLiked(postIdx));
            setIsLiked(!isLiked);
            
            console.log(isLiked)
        }
        catch(e){
            console.error(e);
        }
    }

    const onClickShowComment = () => {
        setShowComment(!showComment);
        console.log(post);
    }

    const onKeyPressEnter = (e) => {
        if(e.key == 'Enter'){
            onClickToSubmit();
        }
    }

    return (
        <style.Viewport>
            <Navbar/>
            <style.MainContainer>
                <style.DetailContainer>
                    { loading == false ? <style.DetailImage id="imgID" src={`${image}`} alt=""/> : <></> }
                    <style.InfoContainer>
                        <style.WriterContainer>
                            <style.DetailTitle>{title}</style.DetailTitle>
                            <style.UserInfoContainer>
                                <style.DetailUserAvatar src={`${getPost.writerAvatar}`} alt=""/>
                                <style.DetailWriter>{writer}</style.DetailWriter>
                            </style.UserInfoContainer>
                            <style.Pre><style.DetailText>{getPost.content}</style.DetailText></style.Pre>
                            {getPost.hashTag !=null && getPost.hashTag.map((hashTag, index) => {
                                    return <style.HashtagUl key = {index}>
                                        { hashTag != null ?
                                        <>                                        
                                                <style.HashtagLi>#{hashTag}</style.HashtagLi>  
                                        </>
                                        :
                                        <></>}
                                    </style.HashtagUl>
                                })}
                            <style.IconContainer>
                                { 
                                    isLiked == true ?
                                    <style.HeartIconOn onClick = {onClickToLike}/>
                                    :
                                    <style.HeartIconOff onClick = {onClickToLike}/>
                                }

                                
                            
                                { !showComment ? 
                                    <style.BubbleIcon onClick = {onClickShowComment}/>
                                    :
                                    <style.CloseIcon onClick = {onClickShowComment}/>
                                }                            
                            </style.IconContainer>
                        </style.WriterContainer>
                    <style.CommentAllContainer>
                        <style.CommentContainer>
                        <div>
                            {showComment ? 
                                            getPost.comments !=null && getPost.comments.map((comment, index) => {
                                                
                                                return <style.CustomUl key = {index}>
                                                    <>
                                                        <style.DetailUserAvatar src ={`${comment.writer_avatar}`}/>
                                                        <style.CommentWriterLi>{comment.writer}</style.CommentWriterLi>
                                                        <style.CommentLi>{comment.comment}</style.CommentLi>
                                                    </>
                                                </style.CustomUl>
                                                
                                            }) :
                                            <></>
                                        }                                   
                        </div>
                        </style.CommentContainer>
                        <style.CommentPostContainer>
                            <style.CommentInput onChange = {onChangeComment}/>
                            <style.CommentSubmitButton onClick = {onClickToSubmit} onKeyPress = {onKeyPressEnter}>게시</style.CommentSubmitButton>
                        </style.CommentPostContainer>
                    </style.CommentAllContainer>
                    </style.InfoContainer>
                </style.DetailContainer>
            </style.MainContainer>
        </style.Viewport>
    )
}

export default DetailPost
