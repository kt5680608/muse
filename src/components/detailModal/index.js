import React, { useState, useEffect } from "react";
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
    Spinner,
    Image,
} from "gestalt";
import { Navbar, Loading } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
    getDetailPost,
    uploadCommentPost,
    updatePost,
    deletePost,
} from "../../actions/post";
import { sendIsLiked } from "../../actions/likeBtn";
import { useHistory, Link } from "react-router-dom";
import * as style from "./style";
import * as home from "../../pages/home/style";

import Swal from "sweetalert2";

function DetailModal(details) {
    // const onClickHistoryPushNickname = () => {
    //     console.log(writer);
    //     history.push(`/my-page/${writer}`)
    // }
    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(10);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);

    const token = JSON.parse(localStorage.getItem("token"));
    const dispatch = useDispatch();
    const currentIdx = details.idx;
    const getUserInfo = useSelector((state) => state.userInfo);

    const [comments, setComments] = useState("");
    const [currentComments, setCurrentComments] = useState("");
    const [showComment, setShowComment] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLiked, setIsLiked] = useState();
    const [post, setPost] = useState();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [writer, setWriter] = useState("");
    const [isWriter, setIsWriter] = useState();
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
    const [showAlert, setShowAlert] = useState(true);
    const [showModal, setShowModal] = useState(true);
    const [modalSize, setModalSize] = useState("lg");
    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        if (localStorage.getItem("token") == undefined) {
            return fetch(`${API_DOMAIN}/display/detail/${currentIdx}/`, {
                method: "GET",
            })
                .then((res) => res.json())
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
                    setTimeout(() => {
                        setLoading(false);
                    }, 500);
                });
        } else {
            return fetch(`${API_DOMAIN}/posts/display/detail/${currentIdx}/`, {
                method: "GET",
                headers: {
                    Authorization: `${token.token}`,
                },
            })
                .then((res) => res.json())
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
                    setTimeout(() => {
                        setLoading(false);
                    }, 500);
                });
        }
    }, []);

    const handleClose = () => {
        setShow(false);
        setUpdateContent("");
        setUpdateTitle(null);
        setImagePreview(null);
        setModalSize("lg");
    };
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleChangeTitle = (e) => {
        setUpdateTitle(e.target.value);
    };
    const handleChangeContent = (e) => {
        setUpdateContent(e.target.value);
    };

    const handleChangeHashtag = (e) => {
        setUpdateHashtag(e.target.value);
    };

    const handleUpdate = async () => {
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

    const handleCommentSubmit = async () => {
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
                await dispatch(uploadCommentPost(currentIdx, currentComments));
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

    const handleLike = () => {
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

    const handleShowComment = () => {
        setShowComment(!showComment);
    };

    const onKeyPressEnter = (e) => {
        if (e.key == "Enter") {
            handleSubmit();
        }
    };

    const handleDeletePost = async () => {
        const postIdx = currentIdx;
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

    const handleLikesCount = () => {
        if (isLiked == true) {
            setLikesCount(likesCount - 1);
        } else {
            setLikesCount(likesCount + 1);
        }
    };

    const ModalWithHeading = ({ onDismiss }) => {
        return (
            <Modal onDismiss={onDismiss} size={900} overflow="hidden">
                <Flex alignItems="center" overflow="hidden">
                    <style.DetailContainer>
                        {loading == false ? (
                            <style.DetailImage id="imgID" src={`${image}`} />
                        ) : (
                            <></>
                        )}
                        <style.InfoContainer>
                            <style.WriterContainer>
                                {isWriter == true ? (
                                    <style.CustomDropdown className="shadow-none">
                                        <style.CustomDropdown.Toggle id="dropdown-menu-align-end">
                                            <style.isWriterButton />
                                        </style.CustomDropdown.Toggle>

                                        <style.CustomDropdown.Menu
                                            align={{ sm: "end" }}
                                        >
                                            <style.CustomDropdown.Item
                                                onClick={handleShow}
                                            >
                                                수정
                                            </style.CustomDropdown.Item>
                                            <home.CustomModal
                                                show={show}
                                                onHide={handleClose}
                                                size={modalSize}
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                            >
                                                <home.CustomModal.Header
                                                    closeButton
                                                ></home.CustomModal.Header>
                                                <home.CustomModal.Body>
                                                    <home.CustomForm
                                                        onSubmit={handleSubmit}
                                                        encType="multipart/form-data"
                                                    >
                                                        <home.ImgPreview
                                                            src={imagePreview}
                                                            alt=""
                                                        />
                                                        <home.InfoContainer>
                                                            <home.CustomInput
                                                                type="text"
                                                                name="title"
                                                                onChange={
                                                                    handleChangeTitle
                                                                }
                                                                placeholder={`제목: ${title}`}
                                                                autocomplete="off"
                                                            ></home.CustomInput>
                                                            <home.CustomInput
                                                                type="text"
                                                                name="hasgtag"
                                                                onChange={
                                                                    handleChangeHashtag
                                                                }
                                                                placeholder={`해시태그: ${hashtags}`}
                                                                min="0"
                                                                step="1"
                                                                autocomplete="off"
                                                            />
                                                            <home.Pre>
                                                                <home.CustomTextarea
                                                                    name="Text1"
                                                                    cols="90"
                                                                    rows="12"
                                                                    onChange={
                                                                        handleChangeContent
                                                                    }
                                                                    placeholder={`내용: ${content}`}
                                                                    autocomplete="off"
                                                                />
                                                            </home.Pre>
                                                            <home.CustomButton
                                                                type="submit"
                                                                onClick={
                                                                    handleUpdate
                                                                }
                                                            >
                                                                {" "}
                                                                제출
                                                            </home.CustomButton>
                                                        </home.InfoContainer>
                                                    </home.CustomForm>
                                                </home.CustomModal.Body>
                                            </home.CustomModal>
                                            <style.CustomDropdown.Item
                                                onClick={handleDeletePost}
                                            >
                                                삭제
                                            </style.CustomDropdown.Item>
                                        </style.CustomDropdown.Menu>
                                    </style.CustomDropdown>
                                ) : (
                                    <></>
                                )}
                                <style.DetailTitle>{title}</style.DetailTitle>
                                <style.UserInfoContainer>
                                    <style.WriterInfoContainer>
                                        {writerAvatar !=
                                        "https://muse-bucket.s3.ap-northeast-2.amazonaws.com/media/public/" ? (
                                            <style.DetailUserAvatar
                                                src={`${writerAvatar}`}
                                            />
                                        ) : (
                                            <></>
                                        )}
                                        <style.DetailWriter>
                                            {writer}
                                        </style.DetailWriter>
                                    </style.WriterInfoContainer>
                                    <style.FollowButton
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        팔로우
                                    </style.FollowButton>
                                </style.UserInfoContainer>
                                <style.Pre>
                                    <style.DetailText>
                                        {content}
                                    </style.DetailText>
                                </style.Pre>
                                {hashtags != null &&
                                    hashtags.map((hashTag, index) => {
                                        return (
                                            <style.HashtagUl key={index}>
                                                {hashTag != null ? (
                                                    <>
                                                        <style.HashtagLi>
                                                            <style.HashTag>
                                                                #{hashTag}
                                                            </style.HashTag>
                                                        </style.HashtagLi>
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                            </style.HashtagUl>
                                        );
                                    })}
                                <style.IconContainer>
                                    {isLiked == true ? (
                                        <>
                                            <style.HeartIconOn
                                                onClick={handleLike}
                                            />
                                            <p>{likesCount}</p>
                                        </>
                                    ) : (
                                        <>
                                            <style.HeartIconOff
                                                onClick={handleLike}
                                            />
                                            <p>{likesCount}</p>
                                        </>
                                    )}

                                    {!showComment ? (
                                        <>
                                            <style.BubbleIcon
                                                onClick={handleShowComment}
                                            />
                                            <p>{comments.length}</p>
                                        </>
                                    ) : (
                                        <style.CloseIcon
                                            onClick={handleShowComment}
                                        />
                                    )}
                                </style.IconContainer>
                            </style.WriterContainer>
                            <style.CommentAllContainer>
                                <style.CommentContainer>
                                    <div>
                                        {showComment ? (
                                            comments != null &&
                                            comments.map((comment, idx) => {
                                                return (
                                                    <style.CustomUl
                                                        key={idx}
                                                        initial={{ y: 100 }}
                                                        animate={{ y: 0 }}
                                                    >
                                                        <>
                                                            <style.DetailUserAvatar
                                                                src={`${comment.writer_avatar}`}
                                                            />
                                                            <style.CommentWriterLi>
                                                                {comment.writer}
                                                            </style.CommentWriterLi>
                                                            <style.CommentLi>
                                                                {
                                                                    comment.comment
                                                                }
                                                            </style.CommentLi>
                                                        </>
                                                    </style.CustomUl>
                                                );
                                            })
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </style.CommentContainer>
                                <style.CommentPostContainer>
                                    <style.CommentInput
                                        onChange={onChangeComment}
                                        value={currentComments}
                                        onKeyPress={onKeyPressEnter}
                                    />
                                    <style.CommentSubmitButton
                                        onClick={handleCommentSubmit}
                                    >
                                        게시
                                    </style.CommentSubmitButton>
                                </style.CommentPostContainer>
                            </style.CommentAllContainer>
                        </style.InfoContainer>
                    </style.DetailContainer>
                </Flex>
            </Modal>
        );
    };

    return (
        <React.Fragment>
            <style.ImageContainer
                src={details.image}
                onClick={() => setShouldShow(true)}
            />
            {shouldShow && (
                <Layer zIndex={modalZIndex}>
                    <ModalWithHeading onDismiss={() => setShouldShow(false)} />
                </Layer>
            )}
        </React.Fragment>
    );
}

export default DetailModal;
