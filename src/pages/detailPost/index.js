import React, {useState, useEffect} from 'react'
import { Navbar } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailPost, getCommentPost, updatePost, deletePost } from '../../actions/post'
import { sendIsLiked } from '../../actions/likeBtn'
import { useHistory, Link } from 'react-router-dom'
import { userInfo } from '../../actions/userInfo'
import * as style from './style'
import * as home from '../home/style'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import motion from 'framer'
function DetailPost() {
    const token = JSON.parse(localStorage.getItem('token'));
    const dispatch = useDispatch();
    const postIdxUrl = window.location.pathname.split('/')[2];
    const getUserInfo = useSelector( state => state.userInfo);
    const [comments, setComments] = useState('');
    const [currentComments, setCurrentComments] = useState('');
    const [showComment, setShowComment] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLiked, setIsLiked] = useState();
    const [post, setPost] = useState();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [writer, setWriter] = useState('');
    const[isWriter, setIsWriter] = useState();
    const [content, setContent] = useState('');
    const [hashtags, setHashtags] = useState();
    const [likesCount, setLikesCount] = useState();
    const [idx, setIdx] = useState();
    const [show, setShow] = useState(false);
    const [updateContent, setUpdateContent] = useState('');
    const [updateTitle, setUpdateTitle] = useState('');
    const [updateHashtag, setUpdateHashtag] = useState('');
    const [imagePreview, setImagePreview] = useState();
    const [writerAvatar, setWriterAvatar] = useState();

    
    const [showModal, setShowModal] = useState(true);
    useEffect (() => {
        setLoading(true);
        if (localStorage.getItem('token') == undefined) {
            return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/display/detail/${postIdxUrl}/`,{
            method: 'GET',
            })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setIsLiked(data.is_login_user_liked);
                setTitle(data.title);
                setImage(data.image);
                setImagePreview(data.image);
                setHashtags(data.hashtag);
                setIdx(data.idx);
                setWriter(data.writer);
                setContent(data.content);
                setIsWriter(data.is_writer);
                setLikesCount(data.likes);
                setWriterAvatar(data.writer_avatar);
                setComments(data.comment);
            })
            .finally(() => {
                setLoading(false);
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
                setImagePreview(data.image);
                setHashtags(data.hashtag);
                setIdx(data.idx);
                setWriter(data.writer);
                setContent(data.content);
                setIsWriter(data.is_writer);
                setLikesCount(data.likes);
                setWriterAvatar(data.writer_avatar);
                setComments(data.comment);
                console.log(hashtags)
                console.log(data)
            })
            .finally(() => {
                setTimeout(() => {setLoading(false);} , 1500)
            })
        }
    },[])
    const onChangeComment = (e) => {
        e.preventDefault();
        setCurrentComments(e.target.value);
    }

    const [modalSize, setModalSize] = useState('lg');

    
    const handleClose = () => {
        setShow(false);
        setUpdateContent('');
        setUpdateTitle(null);
        setImagePreview(null);
        setModalSize('lg')
    };
    const handleShow = () => setShow(true);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const onChangeTitle = (e) => {
        setUpdateTitle(e.target.value);
    }
    const onChangeContent = (e) => {
        setUpdateContent(e.target.value);
    }
    
    const onChangeHashtag = (e) => {
        setUpdateHashtag(e.target.value);
    }

    const onClickToUpdate = async() => {
        const postIdx = idx;
        const formData = new FormData();
        if(updateContent == ''){
            formData.append('content', content)
        }
        else{
            formData.append('content', updateContent);
        }
        if(updateTitle == ''){
            formData.append('title', title);
        }
        else{
            formData.append('title', updateTitle);
        }
        if(updateHashtag == '') {
            formData.append('hashtag', hashtags);
        }
        else{
            formData.append('hashtag', updateHashtag);
        }

        try{
            await dispatch(updatePost(formData, postIdx));
            handleClose();
            history.push('/replace');
        }
        catch(e){
            console.error(e);
        }
    }

    const onClickToSubmit = async() => {
        try{
            const postIdx = idx;
            const data = currentComments;
            dispatch(getCommentPost(postIdx, data));
            
        }
        catch(e){
            console.error(e);
        }
    }

    const onClickToLike = () => {
        try{
            const postIdx = idx;
            dispatch(sendIsLiked(postIdx));
            setIsLiked(!isLiked);
            getLikesCount();
            
            console.log(isLiked)
        }
        catch(e){
            console.error(e);
        }
    }

    const onClickShowComment = () => {
        setShowComment(!showComment);
    }

    const onKeyPressEnter = (e) => {
        if(e.key == 'Enter'){
            onClickToSubmit();
        }
    }

    const onClickToDeletePost = () => {
        const postIdx = idx;
        dispatch(deletePost(postIdx))
        console.log('삭제')
        history.push('/')
    }

    const getLikesCount = () => {
        if(isLiked == true){
            setLikesCount(likesCount-1)
        }
        else{
            setLikesCount(likesCount+1)
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }

    if(loading == true){
        return(
            <style.LoadingContainer>
                <style.LoadingH1
                    animate = {{
                        x: [1000 , -80, 20, 0, -1000]
                    }}
                    transition = {{
                        ease: "easeInOut",
                        times: [0, .75, 1.2]
                    }}
                >
                    MUSE coming on...
                </style.LoadingH1>
                <Loader
        type="TailSpin"
        color="var(--g-color-blue)"
        height={70}
        width={70}
        timeout={1500} //2 secs
      />
            </style.LoadingContainer>
        )
    }

    return (
        <style.Viewport>
            <Navbar/>
            <style.MainContainer>
                <style.DetailContainer>
                    { loading == false ? <style.DetailImage id="imgID" src={`${image}`}/> : <></> }
                    <style.InfoContainer>
                        <style.WriterContainer>
                        { isWriter == true ?
                                <style.CustomDropdown className = "shadow-none">
                                <style.CustomDropdown.Toggle  id="dropdown-menu-align-end">
                                    <style.isWriterButton />
                                </style.CustomDropdown.Toggle>

                                <style.CustomDropdown.Menu align={{sm: 'end'}}>
                                    <style.CustomDropdown.Item onClick = {handleShow}>
                                        수정
                                    </style.CustomDropdown.Item>
                                    <home.CustomModal show={show} onHide={handleClose} size = {modalSize} aria-labelledby="contained-modal-title-vcenter" centered>
                                        <home.CustomModal.Header closeButton>
                                        </home.CustomModal.Header>
                                        <home.CustomModal.Body>
                                        <home.CustomForm onSubmit = { handleSubmit } encType="multipart/form-data">
                                            <home.ImgPreview src={imagePreview} alt=""/>                                                
                                            <home.InfoContainer>
                                                <home.CustomInput type="text" name = "title" onChange = {onChangeTitle} placeholder = {`제목: ${title}`} autocomplete = 'off'></home.CustomInput>
                                                <home.CustomInput type="text" name = "hasgtag" onChange = { onChangeHashtag } placeholder = {`해시태그: ${hashtags}`}  min="0" step="1" autocomplete = 'off'/>
                                                <home.Pre><home.CustomTextarea name="Text1" cols="90" rows="12" onChange = {onChangeContent} placeholder = {`내용: ${content}`} autocomplete = 'off'/></home.Pre>
                                                <home.CustomButton type = "submit" onClick = { onClickToUpdate }> 제출</home.CustomButton>
                                            </home.InfoContainer>   
                                        </home.CustomForm>
                                        </home.CustomModal.Body>
                                    </home.CustomModal>
                                    <style.CustomDropdown.Item onClick = {onClickToDeletePost}>
                                        삭제
                                    </style.CustomDropdown.Item>
                                </style.CustomDropdown.Menu>
                            </style.CustomDropdown>
                                :
                                <></>
                            }
                            <style.DetailTitle>{title}</style.DetailTitle>
                            <style.UserInfoContainer>
                                <style.WriterInfoContainer>
                                    { writerAvatar != 'https://muse-bucket.s3.ap-northeast-2.amazonaws.com/media/public/' ?
                                        <style.DetailUserAvatar src={`${writerAvatar}`}/>    
                                        :
                                        <></>
                                    }
                                    <style.DetailWriter>{writer}</style.DetailWriter>
                                </style.WriterInfoContainer>
                                <style.FollowButton>팔로우</style.FollowButton>
                            </style.UserInfoContainer>
                            <style.Pre><style.DetailText>{content}</style.DetailText></style.Pre>
                            {hashtags !=null && hashtags.map((hashTag, index) => {
                                    return <style.HashtagUl key = {index}>
                                        { hashTag != null ?
                                        <>                                        
                                                <style.HashtagLi>
                                                    <style.HashTag>#{hashTag}</style.HashTag>
                                                </style.HashtagLi>  
                                        </>
                                        :
                                        <></>}
                                    </style.HashtagUl>
                                })}
                            <style.IconContainer>
                                { 
                                    isLiked == true ?
                                    <>
                                        <style.HeartIconOn onClick = {onClickToLike}/>
                                        <p>{likesCount}</p>
                                    </>
                                    :
                                    <>
                                        <style.HeartIconOff onClick = {onClickToLike}/>
                                        <p>{likesCount}</p>
                                    </>
                                }

                                
                            
                                { !showComment ? 
                                    <>
                                        <style.BubbleIcon onClick = {onClickShowComment}/>
                                        <p>{comments.length}</p>
                                    </>
                                    :
                                    <style.CloseIcon onClick = {onClickShowComment}/>
                                }                            
                            </style.IconContainer>
                        </style.WriterContainer>
                    <style.CommentAllContainer>
                        <style.CommentContainer>
                        <div>
                            {showComment ? 
                                            comments !=null && comments.map((comment, idx) => {
                                                
                                                return <style.CustomUl key = {idx}>
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
