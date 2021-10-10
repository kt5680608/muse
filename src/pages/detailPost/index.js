import React, {useState, useEffect} from 'react'
import { Navbar } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailPost } from '../../actions/post'
function DetailPost() {
    const dispatch = useDispatch();
    const postIdxUrl = window.location.pathname.split('/')[1];
    const getPost= useSelector(state => state.detailPost);
    const [hi, setHi] = useState(null);
    const onClickToConsole = () => {
        console.log(getPost.hashTag);
    }
    useEffect (() => {
        dispatch(getDetailPost(postIdxUrl));
    },[])
    return (
        <>
            <div>
                <Navbar/>
            </div>
            <div>
                <h1>{getPost.title}</h1>
                <img src={`https://muse-bucket.s3.ap-northeast-2.amazonaws.com/media/public/${getPost.image}`} alt="" onClick = {onClickToConsole}/>
            </div>
        </>
    )
}

export default DetailPost
