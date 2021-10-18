import React, {useState, useEffect} from 'react'
import { Navbar } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailPost, getCommentPost, updatePost, deletePost } from '../../actions/post'
import { sendIsLiked } from '../../actions/likeBtn'
import { useHistory, Link } from 'react-router-dom'
import { userInfo } from '../../actions/userInfo'
import * as style from './style'
import * as home from '../home/style'
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
    const[isWriter, setIsWriter] = useState();
    const [content, setContent] = useState('');
    const [hashtag, setHashtag] = useState();

    const [show, setShow] = useState(false);
    const [updateImage, setUpdateImage] = useState(null);
    const [updateContent, setUpdateContent] = useState('');
    const [updateTitle, setUpdateTitle] = useState('');
    const [updateHashtag, setUpdateHashtag] = useState('');
    const [imagePreview, setImagePreview] = useState();
    
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
                setIsLiked(data.is_login_user_liked);
                setTitle(data.title);
                setImage(data.image);
                setImagePreview(data.image);
                setWriter(data.writer);
                setContent(data.content);
                setIsWriter(data.is_writer);
                console.log(data.is_writer);
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
                console.log(data);
                setIsLiked(data.is_login_user_liked);
                setTitle(data.title);
                setImage(data.image);
                setWriter(data.writer);
                setContent(data.content);
                setIsWriter(data.is_writer);
                setHashtag(data.hashtag)
                setImagePreview(data.image);
                console.log(data.image);
            })
        }
    },[])
    const onChangeComment = (e) => {
        e.preventDefault();
        setComment(e.target.value);
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
        const postIdx = getPost.idx;
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
            formData.append('hashtag', hashtag);
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
    }

    const onKeyPressEnter = (e) => {
        if(e.key == 'Enter'){
            onClickToSubmit();
        }
    }

    const onClickToDeletePost = () => {
        const postIdx = getPost.idx;
        dispatch(deletePost(postIdx))
        console.log('삭제')
        history.push('/');
    }

    return (
        <style.Viewport>
            <Navbar/>
            <style.MainContainer>
                <style.DetailContainer>
                    { loading == false ? <style.DetailImage id="imgID" src={`${image}`} alt=""/> : <></> }
                    <style.InfoContainer>
                        <style.WriterContainer>
                        { isWriter == true ?
                                <style.CustomDropdown className = "shadow-none">
                                <style.CustomDropdown.Toggle  id="dropdown-menu-align-end">
                                    <style.isWriterButton />
                                </style.CustomDropdown.Toggle>

                                <style.CustomDropdown.Menu >
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
                                                <home.CustomInput type="text" name = "hasgtag" onChange = { onChangeHashtag } placeholder = {`해시태그: ${hashtag}`}  min="0" step="1" autocomplete = 'off'/>
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
