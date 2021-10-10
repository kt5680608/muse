import React, {useState, useEffect} from 'react'
import { Navbar } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailPost } from '../../actions/post'
function DetailPost() {
    const dispatch = useDispatch();
    const postIdxUrl = window.location.pathname.split('/')[1];
    const getPost= useSelector(state => state.detailPost);
    const [hashTags, setHashTags] = useState('');
    const onClickToConsole = () => {
        console.log(getPost.hashTag);
    }
const hashTagsList = hashTags.map((hashTag) => (<li>{hashTag}</li>))
    useEffect (() => {
        dispatch(getDetailPost(postIdxUrl));
        setHashTags(getPost.hashTag);
        console.log(hashTags)
    },[])
    return (
        <>
            <div>
                <Navbar/>
            </div>
            <div>
                <h1>{getPost.title}</h1>
                <img src={`https://muse-bucket.s3.ap-northeast-2.amazonaws.com/media/public/${getPost.image}`} alt="" onClick = {onClickToConsole}/>
                {hashTagsList}
                
            </div>
        </>
    )
}

export default DetailPost
