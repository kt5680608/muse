import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUploadPost } from "../../actions/post";
import * as style from "./style";
import Swal from "sweetalert2";
import {
    Box,
    Button,
    Checkbox,
    IconButton,
    CompositeZIndex,
    FixedZIndex,
    Flex,
    Text,
    Layer,
    Modal,
} from "gestalt";
function Input() {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState(null);
    const [hashtag, setHashtag] = useState("");
    const [imagePreview, setImagePreview] = useState();
    const tag = "contest";

    const hiddenFileInput = useRef(null);

    const handleClose = () => {
        setShow(false);
        setContent("");
        setTitle(null);
        setImagePreview(null);
    };
    const dispatch = useDispatch();
    const history = useHistory();
    const onChangeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onChangeImage = (e) => {
        setImage(e.target.files[0]);
        const imgTarget = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(imgTarget);
        fileReader.onload = function (e) {
            setImagePreview(e.target.result);
        };
    };

    const onChangeHashtag = (e) => {
        setHashtag(e.target.value);
    };

    const handleHiddenInputFile = () => {
        hiddenFileInput.current.click();
    };

    const handleSubmit = async (e) => {
        const data = new FormData();
        data.append("title", title);
        data.append("content", content);
        data.append("image", image);
        data.append("hashtag", hashtag);

        try {
            if (
                title == null ||
                "" ||
                content == null ||
                "" ||
                image == null ||
                ""
            ) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "내용을 채워주세요",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                await dispatch(getUploadPost(data, tag));
                handleClose();
                history.push("/replace");
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <Box paddingX={8} overflow="hidden">
                <Box marginBottom={8} marginTop={8}>
                    <Flex justifyContent="center">
                        <Box marginBottom={3}></Box>
                    </Flex>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        direction="row"
                        gap="6"
                    >
                        <style.CustomForm
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            {imagePreview != null ? (
                                <style.ImgPreview src={imagePreview} alt="" />
                            ) : (
                                <style.ImgPreviewSkeleton
                                    onClick={handleHiddenInputFile}
                                    onChange={onChangeImage}
                                >
                                    <style.ImgPreviewSkeletonPlusButton />
                                </style.ImgPreviewSkeleton>
                            )}
                            <style.InfoContainer>
                                <style.CustomInput
                                    type="text"
                                    name="title"
                                    onChange={onChangeTitle}
                                    placeholder="제목"
                                    autocomplete="off"
                                />
                                <style.CustomInputFile
                                    type="file"
                                    name="images"
                                    onChange={onChangeImage}
                                    ref={hiddenFileInput}
                                />
                                <style.CustomInput
                                    type="text"
                                    name="hasgtag"
                                    onChange={onChangeHashtag}
                                    placeholder="#해시태그"
                                    min="0"
                                    step="1"
                                    autocomplete="off"
                                />
                                <style.Pre>
                                    <style.CustomTextarea
                                        name="Text1"
                                        cols="90"
                                        Rows="4"
                                        maxLength="90"
                                        onChange={onChangeContent}
                                        placeholder="내용"
                                        autocomplete="off"
                                    />
                                </style.Pre>
                                <style.CustomButton
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    제출
                                </style.CustomButton>
                            </style.InfoContainer>
                        </style.CustomForm>
                    </Flex>
                    <Box marginTop={3}></Box>
                </Box>
            </Box>
        </>
    );
}

function ContestPostButton() {
    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(10);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);

    const ModalWithHeading = ({ onDismiss }) => {
        return (
            <Modal onDismiss={onDismiss} footer={<Input />} size="lg"></Modal>
        );
    };

    return (
        <React.Fragment>
            <Button
                onClick={() => {
                    setShouldShow(true);
                }}
                text="콘테스트 참여하기"
                size="lg"
            />
            {shouldShow && (
                <Layer zIndex={modalZIndex}>
                    <ModalWithHeading onDismiss={() => setShouldShow(false)} />
                </Layer>
            )}
        </React.Fragment>
    );
}

export default ContestPostButton;
