import React, { useState, useEffect } from 'react'
import { Navbar, Banner, Container, UploadPost } from '../../components'
import { Modal, Button } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { PostButton, PlusButton, CustomTextarea } from './style'
import { getUploadPost } from '../../actions/post'
import { userInfo } from '../../actions/userInfo'
import { useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
function Home() {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState(null);
    const [hashtag, setHashtag] = useState(null);
    const handleClose = () => setShow(false);
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
    }
    const onChangeHashtag = (e) => {
        setHashtag(e.target.value);
    }
    const onClickToSubmit = async() => {
        const data = new FormData();
        data.append('title', title);
        data.append('content', content);
        data.append('image', image);
        data.append('hashtag', hashtag);

        try{
            await dispatch(getUploadPost(data));
            handleClose();
            history.push('/replace');
        }
        catch(e){
            console.error(e);
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
                    <pre><CustomTextarea name="Text1" cols="40" rows="5" onChange={onChangeContent} placeholder = "내용"/></pre>
                    <input type="text" name = "hasgtag" onChange = { onChangeHashtag } placeholder = "#해시태그"  min="0" step="1"/>
                    <button type = "submit" onClick = { onClickToSubmit }> 제출</button>
                </form>
                </Modal.Body>
            </Modal>
            <Container>
            </Container>
        </div>
    )
}

export default Home
