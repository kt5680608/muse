import React, { useState, useEffect, useCallback} from 'react'
import { Container,
    ListItem,
    GridContainer } from './style'
import { useInView } from 'react-intersection-observer'
import Card from  '../card'
import axios from "axios"

import * as style from './style'

function MainContainer() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState('인기순');
    const [ref, inView] = useInView({trackVisibility: true, delay: 100});
    const getPosts = useCallback(async () => {
        setLoading(true)
        await axios.get(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/display/all/${page}/`)
        .then(res => {
            try{
                    console.log(options);
                    const fetchedData = res.data;
                    const mergedData = posts.concat(...fetchedData);
                    setPosts(mergedData);
                    console.log(res.data);
            }
            catch(e){
                console.log(e);
            }
        })
        setLoading(false)
        }, [page]
    )

    const getPostsLikes = useCallback(async () => {
        setLoading(true)
        await axios.get(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/display/all/${page}/?order=likes`)
        .then(res => {
            try{
                    console.log('좋아요순으로 받기')
                    const fetchedData = res.data;
                    const mergedData = posts.concat(...fetchedData);
                    setPosts(mergedData);
                    console.log(res.data);
            }
            catch(e){
                console.log(e);
            }
        })
        setLoading(false)
        }, [page]
    )
    const getPostsViews= useCallback(async () => {
        setLoading(true)
        await axios.get(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/display/all/${page}/?order=views`)
        .then(res => {
            try{
                    console.log('조회수순으로 받기')
                    const fetchedData = res.data;
                    const mergedData = posts.concat(...fetchedData);
                    setPosts(mergedData);
                    console.log(res.data);
            }
            catch(e){
                console.log(e);
            }
        })
        setLoading(false)
        }, [page]
    )

    const getPostsRecent= useCallback(async () => {
        setLoading(true)
        await axios.get(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/display/all/${page}/?order=recent`)
        .then(res => {
            try{
                    console.log('최신순으로 받기')
                    const fetchedData = res.data;
                    const mergedData = posts.concat(...fetchedData);
                    setPosts(mergedData);
                    console.log(res.data);
            }
            catch(e){
                console.log(e);
            }
        })
        setLoading(false)
        }, [page]
    )

    const likesOrder = () => {
        setPosts([]);
        setPage(1);
        setOptions('인기순');
        console.log(options)
        getPostsLikes();
    }

    const viewsOrder = () => {
        setPosts([]);
        setPage(1);
        setOptions('조회수순');
        console.log(options)
        getPostsViews();
    }
    
    const recentOrder = () => {
        setPosts([]);
        setPage(1);
        setOptions('최신순');
        getPostsRecent();
    }
      
    useEffect(()=>{
        getPosts();
        if(options == 'likes'){
            getPostsLikes();
        }
        if(options == 'views'){
            getPostsViews();
        }
    },[getPosts]);
    useEffect(() => {
        getPosts();
    },[])



    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView && !loading) {
            setPage(state => state + 1)
        }
        }, [inView, loading])

        return (
            <>
                <style.DropDownContainer>
                    <style.CustomDropdown>
                        <style.CustomDropdown.Toggle id="style.CustomDropdown-basic">
                            {options}
                        </style.CustomDropdown.Toggle>
                            <style.CustomDropdown.Menu>
                                <style.CustomDropdown.Item href="#/action-1" onClick = {likesOrder}>인기순</style.CustomDropdown.Item>
                                <style.CustomDropdown.Item href="#/action-2" onClick = {viewsOrder}>조회수순</style.CustomDropdown.Item>
                                <style.CustomDropdown.Item href="#/action-3" onClick = {recentOrder}>최신순</style.CustomDropdown.Item>
                            </style.CustomDropdown.Menu>
                    </style.CustomDropdown>
                    
                </style.DropDownContainer>
                <GridContainer>
                    {posts.map((post, idx) => (
                        <React.Fragment key={idx}>
                        {posts.length-1 === idx ? (
                            <ListItem
                            ref={ref}
                            >
                                <Card
                                    image = {post.image}
                                    title = {post.title}
                                    idx = {post.idx}
                                    liked= {post.liked}
                                    avatar= {post.writer_avatar}
                                    writer = {post.writer}
                                    views = {post.views}
                                    likes = {post.likes}
                                />
                            </ListItem>
                        ) : (
                            <ListItem >
                                <Card
                                    image = {post.image}
                                    title = {post.title}
                                    idx = {post.idx}
                                    liked= {post.liked}
                                    avatar= {post.writer_avatar}
                                    writer = {post.writer}
                                    views = {post.views}
                                    likes = {post.likes}
                                />
                            </ListItem>
                        )
                        }
                        </React.Fragment>
                    ))
                    }
                </GridContainer>
            </>
        )
        
       
}

export default MainContainer
