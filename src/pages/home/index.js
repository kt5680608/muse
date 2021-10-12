import React, { useState, useEffect } from 'react'
import { Navbar, Banner, Container, UploadPost } from '../../components'
import { Modal, Button } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { PostButton, PlusButton } from './style'
import { getUploadPost } from '../../actions/post'
import { userInfo } from '../../actions/userInfo'
import { useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
function Home() {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
    const [content, setContent] = useState(null);
    const [title, setTitle] = useState(null);
    const [hashTag, setHashTag] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('변경');
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
    }
    const onChangeHashTag = (e) => {
        setHashTag(e.target.value);
    }
    const onClickToSubmit = async() => {
        const data = new FormData();
        data.append('title', title);
        data.append('body_image', image);
        data.append('body_text', content);
        data.append('hash_tag', hashTag);

        try{
            await dispatch(getUploadPost(data));
            handleClose();
            history.push('/replace');
        }
        catch(e){
            console.error(e);
        }
    }
    const onPressEnter = (e) => {
        if(e.key == 'Enter'){
            onClickToSubmit();
        }
    }
    useEffect(() => {
        dispatch(userInfo());
    },[])
    return (
        <div>
            <Navbar/>
            <Banner/>
            <PostButton onClick={handleShow}>
                <PlusButton/>
            </PostButton>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit = { handleSubmit } encType="multipart/form-data">
                    <input type="text" name = "title" onChange = {onChangeTitle} placeholder = "제목"/>
                    <input type="file" name = 'images' onChange = {onChangeImage}/>
                    <input type="text" name = "content" onChange = { onChangeContent } placeholder = "내용"/>
                    <input type="text" name = "hasgtag" onChange = { onChangeHashTag } placeholder = "#해시태그"  min="0" step="1"/>
                    <button type = "submit" onClick = { onClickToSubmit } onKeyPress = {onPressEnter}> 제출</button>
                </form>
                </Modal.Body>
            </Modal>
            <Container>
            </Container>
        </div>
    )
}

export default Home
