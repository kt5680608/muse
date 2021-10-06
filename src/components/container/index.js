import React, { useState, useEffect, useCallback} from 'react'
import { displayPost } from '../../actions/displayPost'
import { Container,
    ListItem,
    GridContainer } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { Loader } from '../loader'
import Card from  '../card'
import axios from "axios"
function MainContainer() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const [ref, inView] = useInView({trackVisibility: true, delay: 100});

    const getPosts = useCallback(async () => {
        setLoading(true)
        await axios.get(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/display/?page=${page}`)
        .then(res => {
            try{
                console.log(res.data)
                const fetchedData = res.data;
                const mergedData = posts.concat(...fetchedData);
                setPosts(mergedData);
            }
            catch(e){
                console.log(e);
            }
        })
        setLoading(false)
        }, [page]
    )
      
    useEffect(()=>{
        getPosts();
    },[getPosts]);

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView && !loading) {
            setPage(state => state + 1)
        }
        }, [inView, loading])

        return (
            <GridContainer>
                {posts.map((post, idx) => (
                    <React.Fragment key={idx}>
                    {posts.length-1 === idx ? (
                        <ListItem
                        ref={ref}
                        >
                            <Card
                                image = {post.post_image}
                                title = {post.title}
                                idx = {post.idx}
                            />
                        </ListItem>
                    ) : (
                        <ListItem >
                            <Card
                                image = {post.post_image}
                                title = {post.title}
                                idx = {post.idx}
                            />
                        </ListItem>
                    )
                    }
                    </React.Fragment>
                ))
                }
            </GridContainer>
        )
        
       
}

export default MainContainer
