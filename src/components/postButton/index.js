import React, { useState }from 'react'
import { useHistory } from 'react-router-dom' 
import { useDispatch } from 'react-redux' 
import { getUploadPost } from '../../actions/post'
import * as style from './style'
import Swal from 'sweetalert2'
function PostButton() {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState(null);
    const [hashtag, setHashtag] = useState('');
    const [imagePreview, setImagePreview] = useState();
    const [modalSize, setModalSize] = useState('md');

    
    const handleClose = () => {
        setShow(false);
        setContent('');
        setTitle(null);
        setImagePreview(null);
        setModalSize('md')
    };
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    const onChangeImage = (e) => {
        e.preventDefault();
        setImage(e.target.files[0]);
        const imgTarget = (e.target.files)[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL (imgTarget);
        fileReader.onload = function(e){
            setImagePreview(e.target.result);
            setModalSize('lg');
        }
    }
    const onChangeHashtag = (e) => {
        setHashtag(e.target.value);
    }

    const onClickToSubmit = async(e) => {
        const data = new FormData();
        data.append('title', title);
        data.append('content', content);
        data.append('image', image);
        data.append('hashtag', hashtag);

        try{
            if ( title == null || '' || content == null|| '' || image == null || '' ) {
                
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '내용을 채워주세요',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else{
                await dispatch(getUploadPost(data));
                handleClose();
                history.push('/replace');
            }
        }
        catch(e){
            console.error(e);
        }
    }
    return (
        <>
            <style.PostButton
                onClick = {handleShow}
                whileHover = {{ scale: 1.1 }}
                whileTap = {{ scale: .9 }}
            >
                <style.PlusButton/>
            </style.PostButton>
            <style.QaButton/>
            <style.CustomModal show={show}
                onHide={handleClose}
                size = {modalSize}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <style.CustomModal.Body>
                <style.CustomForm onSubmit = { handleSubmit }
                    encType="multipart/form-data"
                >
                    { imagePreview != null ?
                        <style.ImgPreview src={imagePreview} alt=""/>
                        :
                        <></>
                    }
                    <style.InfoContainer>
                        <style.CustomInput type="text"
                            name = "title"
                            onChange = {onChangeTitle}
                            placeholder = "제목"
                            autocomplete = 'off'
                        />
                        <style.CustomInputFile
                            type="file"
                            name = 'images'
                            onChange = {onChangeImage}
                        />
                        <style.CustomInput
                            type="text"
                            name = "hasgtag"
                            onChange = { onChangeHashtag }
                            placeholder = "#해시태그" 
                            min="0" step="1"
                            autocomplete = 'off'/>
                        <style.Pre>
                            <style.CustomTextarea
                                name="Text1"
                                cols="90"
                                Rows="4"
                                maxLength="90"
                                onChange={onChangeContent}
                                placeholder = "내용"
                                autocomplete = 'off'
                            />
                        </style.Pre>
                        <style.CustomButton
                            type = "submit"
                            onClick = { onClickToSubmit }
                        >
                            제출
                        </style.CustomButton>
                    </style.InfoContainer>
                </style.CustomForm>
                </style.CustomModal.Body>
            </style.CustomModal>
        </>
    )
}

export default PostButton
