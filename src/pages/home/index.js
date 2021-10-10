import React, { useState, useEffect } from 'react'
import { Navbar, Banner, Container, UploadPost } from '../../components'
import { Modal, Button } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { PostButton, PlusButton } from './style'
import { uploadPost } from '../../actions/post'
import { userInfo } from '../../actions/userInfo'
import { useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
function Home() {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
    const [content, setContent] = useState(null);
    const [title, setTitle] = useState(null);
    const [week, setWeek] = useState(null);
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
    const onChangeWeek = (e) => {
        setWeek(e.target.value);
    }
    const onClickToSubmit = async(e) => {
        const token = JSON.parse(localStorage.getItem('token'));
        const data = new FormData();
        data.append('user_id', token.user.user_id);
        data.append('title', title);
        data.append('body_image', image);
        data.append('body_text', content);
        data.append('week', week);

        try{
            await dispatch(uploadPost(data));
            await handleClose();
            await history.push('/replace');
        }
        catch{
            console.log(e);
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
                    <input type="text" name = "title" onChange = {onChangeTitle} placeholder = "Title"/>
                    <input type="file" name = 'images' onChange = {onChangeImage}/>
                    <input type="text" name = "content" onChange = { onChangeContent } placeholder = "content"/>
                    <input type="number" name = "week" onChange = { onChangeWeek } placeholder = "week"  min="0" step="1"/>
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
