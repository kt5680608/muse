import React, {useState, useEffect} from 'react'
import { Navbar } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailPost, getCommentPost } from '../../actions/post'
import { sendIsLiked } from '../../actions/likeBtn'
import { userInfo } from '../../actions/userInfo'
import * as style from './style'
function DetailPost() {
    const dispatch = useDispatch();
    const postIdxUrl = window.location.pathname.split('/')[2];
    const getPost= useSelector(state => state.detailPost);
    const getUserInfo = useSelector( state => state.userInfo);
    const [idx, setIdx] = useState(null);
    const [comment, setComment] = useState('');
    const [showComment, setShowComment] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isLiked, setIsLiked] = useState(getPost.isLiked);

    useEffect (() => {
        setLoading(true);
        dispatch(getDetailPost(postIdxUrl)).then(() => {
            console.log(getPost);
        });
        dispatch(userInfo()).then(() => {
            setLoading(false)
        });
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
            console.log('좋아요 바꿔주세요')
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

    return (
        // <style.Viewport>
        //     <Navbar/>
        //     <style.MainContainer >
        //         <style.DetailContainer>
        //             <style.DetailImage id="imgID" src={`${getPost.image}`} alt="" />
        //             <style.DetailInfoContainer>
        //                 <style.Height40Container>
        //                     <style.DetailTitle>{getPost.title}</style.DetailTitle>
        //                     <style.DetailText>{getPost.content}</style.DetailText>
        //                     <div>
        //                         <style.HeartIcon/>
        //                         <style.BubbleIcon/>
        //                     </div>
        //                     <style.UserInfoContainer>
        //                         <style.DetailUserAvatar src={`${getUserInfo.avatar}`} alt=""/>
        //                         <style.DetailWriter>{getPost.writer}</style.DetailWriter>
        //                     </style.UserInfoContainer>
        //                         {getPost.hashTag !=null && getPost.hashTag.map((hashTag, index) => {
        //                             return <style.CustomUl key = {index}>
        //                                 { hashTag != null ?
        //                                 <>                                        
        //                                         <style.CustomLi>#{hashTag}</style.CustomLi>  
        //                                 </>
        //                                 :
        //                                 <></>}
        //                             </style.CustomUl>
        //                         })}
        //                 </style.Height40Container>
        //                     <style.CommentDisplayContainer>
        //                         <div>   
        //                         {showComment ? 
        //                             getPost.comments !=null && getPost.comments.map((comment, index) => {
                                        
        //                                 return <ul key = {index}>
        //                                     <>
        //                                         <style.CommentLi>{comment.comment}</style.CommentLi>
        //                                     </>
        //                                 </ul>
                                        
        //                             }) :
        //                             <></>
        //                         }
        //                         { !showComment ? 
        //                             <style.ShowCommentButton onClick = {onClickShowComment}>댓글보기</style.ShowCommentButton>
        //                             :
        //                             <style.ShowCommentButton onClick = {onClickShowComment}>닫기</style.ShowCommentButton>
        //                         }
        //                         </div>
                                    
        //                         </style.CommentDisplayContainer>
        //                     <style.CommentContainer>
        //                         <style.CommentInput onChange = {onChangeComment}/>
        //                         <style.CommentSubmitButton onClick = {onClickToSubmit}>게시</style.CommentSubmitButton>
        //                     </style.CommentContainer>
        //             </style.DetailInfoContainer>
        //         </style.DetailContainer>
        //     </style.MainContainer>
        // </style.Viewport>
        <style.Viewport>
            <Navbar/>
            <style.MainContainer>
                <style.DetailContainer>
                    { loading == false ? <style.DetailImage id="imgID" src={`${getPost.image}`} alt="" /> : <></> }
                    <style.InfoContainer>
                        <style.WriterContainer>
                            <style.DetailTitle>{getPost.title}</style.DetailTitle>
                            <style.UserInfoContainer>
                                <style.DetailUserAvatar src={`${getUserInfo.avatar}`} alt=""/>
                                <style.DetailWriter>{getPost.writer}</style.DetailWriter>
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
                                { isLiked == false ? 
                                    <style.HeartIconOff onClick = {onClickToLike}/>
                                    :
                                    <style.HeartIconOn onClick = {onClickToLike}/>
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
