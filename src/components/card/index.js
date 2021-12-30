import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";
import "react-router-modal/css/react-router-modal.css";
import Swal from "sweetalert2";
import { sendIsLiked } from "../../actions/likeBtn";
import {
    getDetailPost,
    uploadCommentPost,
    updatePost,
    deletePost,
} from "../../actions/post";
import moment from "moment";
import {
    CardContainer,
    Image,
    PostWriter,
    LikesIcon,
    InfoContainer,
    EyeIcon,
    PostStatusContainer,
    Avatar,
    WriterContainer,
    CustomSpan,
    ImageContainer,
    ModalImage,
    ModalImageContainer,
    ModalContainer,
    ModalInfoContainer,
    Writer,
    Date,
    ModalAvatar,
    ReactModal,
    ModalHeading,
    ModalWriterInfoContainer,
    Title,
} from "./style";
import { useHistory } from "react-router-dom";
import { likeBtn } from "../../actions/likeBtn";
import {
    Box,
    Button,
    Checkbox,
    CompositeZIndex,
    FixedZIndex,
    Flex,
    Text,
    Layer,
    Modal,
    IconButton,
} from "gestalt";

function DetailPost(props) {
    const token = JSON.parse(localStorage.getItem("token"));
    const dispatch = useDispatch();
    const postIdxUrl = window.location.pathname.split("/")[2];
    const getUserInfo = useSelector((state) => state.userInfo);

    const [comments, setComments] = useState("");
    const [created, setCreated] = useState("");
    const [currentComments, setCurrentComments] = useState("");
    const [showComment, setShowComment] = useState(false);
    const [loading, setLoading] = useState(false);
    const [otherPosts, setOtherPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [writer, setWriter] = useState("");
    const [content, setContent] = useState("");
    const [hashtags, setHashtags] = useState();
    const [likesCount, setLikesCount] = useState();
    const [idx, setIdx] = useState();
    const [show, setShow] = useState(false);
    const [updateContent, setUpdateContent] = useState("");
    const [updateTitle, setUpdateTitle] = useState("");
    const [updateHashtag, setUpdateHashtag] = useState("");
    const [imagePreview, setImagePreview] = useState();
    const [writerAvatar, setWriterAvatar] = useState();
    const [modalSize, setModalSize] = useState("lg");
    //user
    const [isLoginUserFollowed, setIsLoginUserFollowed] = useState();
    const [isLiked, setIsLiked] = useState();
    const [isSaved, setIsSaved] = useState();
    const [isWriter, setIsWriter] = useState();

    useEffect(() => {
        setLoading(true);
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        const token = JSON.parse(localStorage.getItem("token"));
        return fetch(`${API_DOMAIN}/post/${props.idx}/`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsLiked(data.is_login_user_liked);
                setTitle(data.title);
                setImage(data.image);
                setImagePreview(data.image);
                setIsLoginUserFollowed(data.is_login_user_follow);
                setHashtags(data.hashtag);
                setIdx(data.idx);
                setWriter(data.writer);
                setContent(data.content);
                setIsWriter(data.is_writer);
                setLikesCount(data.likes);
                setWriterAvatar(data.writer_avatar);
                setComments(data.comment);
                setOtherPosts(data.writer_other_post);
                setCreated(moment(data.created_at).format("YYYY-MM-DD"));
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            });
    }, []);

    useEffect(() => {
        setLoading(true);
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        if (idx !== undefined) {
            return fetch(`${API_DOMAIN}/post/${idx}/`, {
                method: "GET",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsLiked(data.is_login_user_liked);
                    setTitle(data.title);
                    setImage(data.image);
                    setImagePreview(data.image);
                    setIsLoginUserFollowed(data.is_login_user_follow);
                    setHashtags(data.hashtag);
                    setIdx(data.idx);
                    setWriter(data.writer);
                    setContent(data.content);
                    setIsWriter(data.is_writer);
                    setLikesCount(data.likes);
                    setWriterAvatar(data.writer_avatar);
                    setComments(data.comment);
                    setOtherPosts(data.writer_other_post);
                })
                .finally(() => {
                    setTimeout(() => {
                        setLoading(false);
                    }, 500);
                });
        }
    }, [idx]);

    const handleFollow = () => {
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        const token = JSON.parse(localStorage.getItem("token"));
        console.log(token);
        return fetch(`${API_DOMAIN}/account/follow/`, {
            method: "POST",
            headers: {
                Authorization: `${token}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                follower: writer,
            }),
        }).then(() => {
            setIsLoginUserFollowed(!isLoginUserFollowed);
            console.log(isLoginUserFollowed);
        });
    };

    const handleClose = () => {
        setShow(false);
        setUpdateContent("");
        setUpdateTitle(null);
        setImagePreview(null);
        setModalSize("lg");
    };
    const handleShow = () => setShow(true);
    const history = useHistory();

    const onChangeTitle = (e) => {
        setUpdateTitle(e.target.value);
    };
    const onChangeContent = (e) => {
        setUpdateContent(e.target.value);
    };

    const onChangeHashtag = (e) => {
        setUpdateHashtag(e.target.value);
    };

    const onClickToUpdate = async () => {
        const postIdx = idx;
        const formData = new FormData();
        if (updateContent == "") {
            formData.append("content", content);
        } else {
            formData.append("content", updateContent);
        }
        if (updateTitle == "") {
            formData.append("title", title);
        } else {
            formData.append("title", updateTitle);
        }
        if (updateHashtag == "") {
            formData.append("hashtag", hashtags);
        } else {
            formData.append("hashtag", updateHashtag);
        }

        try {
            await dispatch(updatePost(formData, postIdx));
            await Swal.fire({
                icon: "success",
                title: "Change Complete",
                text: "게시물이 수정되었습니다",
                showConfirmButton: false,
                timer: 1500,
            });
            window.location.reload();
        } catch (e) {
            console.error(e);
        }
    };

    const handleSubmit = async () => {
        try {
            const token = JSON.parse(localStorage.getItem("token"));

            if (currentComments == "") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "댓글을 입력해주세요!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else if (token == undefined) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "로그인을 해주세요",
                    showConfirmButton: false,
                    timer: 1000,
                });
            } else {
                await dispatch(uploadCommentPost(postIdxUrl, currentComments));
                window.location.reload();
            }
        } catch (e) {
            console.error(e);
        }
    };

    const onChangeComment = (e) => {
        e.preventDefault();
        setCurrentComments(e.target.value);
        console.log(currentComments);
    };

    const handleLikes = () => {
        try {
            const postIdx = idx;
            dispatch(sendIsLiked(postIdx));
            setIsLiked(!isLiked);
            handleLikesCount();

            console.log(isLiked);
        } catch (e) {
            console.error(e);
        }
    };

    const handleSave = () => {
        try {
            const PostIdx = idx;
            setIsSaved(!isSaved);
        } catch (e) {
            console.error(e);
        }
    };

    const handleLikesCount = () => {
        if (isLiked == true) {
            setLikesCount(likesCount - 1);
        } else {
            setLikesCount(likesCount + 1);
        }
    };

    const onKeyPressEnter = (e) => {
        if (e.key == "Enter") {
            handleSubmit();
        }
    };

    const handleDeletePost = async () => {
        const postIdx = postIdxUrl;
        dispatch(deletePost(postIdx));
        await Swal.fire({
            icon: "success",
            title: "Delete Complete",
            text: "게시물이 삭제되었습니다",
            showConfirmButton: false,
            timer: 1500,
        });
        history.push("/");
    };

    if (loading == true) {
        return <></>;
    }

    const handleHistoryPushNickname = () => {
        console.log(writer);
        history.push(`/my-page/${writer}`);
    };

    return (
        <Box>
            <Box paddingX={12} paddingY={12}>
                <Box>
                    <Box marginBottom={12}>
                        <Flex
                            direction="row"
                            justifyContent="between"
                            alignItems="center"
                        >
                            <Box>
                                <Flex direction="row" alignItems="center">
                                    <ModalAvatar src={props.avatar} />
                                    <Flex direction="column">
                                        <Writer>{props.writer}</Writer>
                                        <Flex direction="row">
                                            <Date>{created}</Date>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex direction="row">
                                    <Box marginEnd={3}>
                                        {isWriter === false ? (
                                            isLoginUserFollowed === false ? (
                                                <Button
                                                    text="팔로우"
                                                    onClick={handleFollow}
                                                ></Button>
                                            ) : (
                                                <Button
                                                    onClick={handleFollow}
                                                    text="팔로잉"
                                                    color="red"
                                                ></Button>
                                            )
                                        ) : (
                                            <></>
                                        )}
                                    </Box>
                                    <Box marginEnd={3}>
                                        {isLiked === true ? (
                                            <IconButton
                                                icon="heart"
                                                bgColor="red"
                                                onClick={handleLikes}
                                            />
                                        ) : (
                                            <IconButton
                                                icon="heart"
                                                bgColor="lightGray"
                                                onClick={handleLikes}
                                            />
                                        )}
                                    </Box>
                                    <Box>
                                        {isSaved === true ? (
                                            <IconButton
                                                icon="folder"
                                                bgColor="red"
                                                onClick={handleSave}
                                            />
                                        ) : (
                                            <IconButton
                                                icon="folder"
                                                bgColor="lightGray"
                                                onClick={handleSave}
                                            />
                                        )}
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                    <ModalImageContainer>
                        <ModalImage src={image} alt="" />
                    </ModalImageContainer>
                    {otherPosts.map((post) => (
                        <React.Fragment key={post.idx}>
                            <img
                                src={`${post.image}`}
                                onClick={() => {
                                    setIdx(post.idx);
                                    console.log(idx);
                                }}
                            />
                        </React.Fragment>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

function DetailPostPreview(props) {
    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(10);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);

    useEffect(() => {
        console.log("hi");
    });

    const ModalWithHeading = ({ onDismiss }) => {
        return (
            <>
                <ReactModal
                    onDismiss={onDismiss}
                    footer={
                        <>
                            <DetailPost
                                idx={props.idx}
                                image={props.image}
                                title={props.title}
                                writer={props.writer}
                                avatar={props.avatar}
                            />
                        </>
                    }
                    size={900}
                ></ReactModal>
            </>
        );
    };

    return (
        <React.Fragment>
            <CardContainer>
                <ImageContainer onClick={() => setShouldShow(true)}>
                    <Image
                        src={`${props.image}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    />
                </ImageContainer>
                <InfoContainer>
                    <WriterContainer>
                        <Avatar src={props.avatar} alt="" />
                        <PostWriter>{props.writer}</PostWriter>
                    </WriterContainer>
                    <PostStatusContainer>
                        <LikesIcon />
                        <CustomSpan>{props.likes}</CustomSpan>
                        <EyeIcon />
                        <CustomSpan>{props.views}</CustomSpan>
                    </PostStatusContainer>
                </InfoContainer>
            </CardContainer>
            {shouldShow && (
                <Layer zIndex={modalZIndex}>
                    <ModalWithHeading onDismiss={() => setShouldShow(false)} />
                </Layer>
            )}
        </React.Fragment>
    );
}

function Card({
    idx,
    title,
    image,
    liked,
    avatar,
    views,
    likes,
    writer,
    rect,
}) {
    return (
        <DetailPostPreview
            idx={idx}
            title={title}
            image={image}
            liked={liked}
            avatar={avatar}
            writer={writer}
            views={views}
        />
    );
}

export default Card;
