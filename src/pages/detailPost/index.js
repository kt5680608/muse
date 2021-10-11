import React, {useState, useEffect} from 'react'
import { Navbar } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailPost } from '../../actions/post'
function DetailPost() {
    const dispatch = useDispatch();
    const postIdxUrl = window.location.pathname.split('/')[2];
    const getPost= useSelector(state => state.detailPost);

    const [hashTags, setHashTags] = useState(null);
    useEffect (() => {
        dispatch(getDetailPost(postIdxUrl));
    },[])
    
    const onClickToConsole = () => {
        setHashTags(getPost.hashTag);
        console.log(getPost.hashTag);
    }
    return (
        <>
            <div>
                <Navbar/>
            </div>
            <div>
                <h1>{getPost.title}</h1>
                {getPost.hashTag !=null && getPost.hashTag.map((hashTag, index) => {
                    return <p key = {index}>{hashTag}</p>
                })}
                <img src={`https://muse-bucket.s3.ap-northeast-2.amazonaws.com/media/public/${getPost.image}`} alt="" onClick = {onClickToConsole} />
            </div>
        </>
    )
}

export default DetailPost
