import React, { useState, useEffect, useCallback} from 'react'
import { Container,
    ListItem,
    GridContainer } from './style'
import { useInView } from 'react-intersection-observer'
import Card from  '../card'
import axios from "axios"
import { DetailModal } from  '../../components/'
import * as style from './style'
import StackGrid from 'react-stack-grid'


function MainContainer() {
    const [posts, setPosts] = useState([]);
    const [label, setLabel] = useState('인기순');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState('likes');
    const [ref, inView] = useInView({trackVisibility: true, delay: 100});
    const getPosts = useCallback(async () => {
        setLoading(true)
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        await axios.get(`${API_DOMAIN}/posts/display/all/${page}/?order=${options}`)
        .then(res => {
            try{
                    const fetchedData = res.data;
                    const mergedData = posts.concat(...fetchedData);
                    setPosts(mergedData);
            }
            catch(e){
                console.log(e);
            }
        })
        setLoading(false)
        }, [page, options]
    )
    const likesOrder = () => {
        setPosts([]);
        setPage(1);
        setOptions('likes');
        setLabel('인기순')
        getPosts();
    }

    const viewsOrder = () => {
        setPosts([]);
        setPage(1);
        setOptions('views');
        setLabel('조회수순')
        getPosts();
    }
    
    const recentOrder = () => {
        setPosts([]);
        setPage(1);
        setOptions('recent');
        setLabel('최신순')
        getPosts();
    }
      
    useEffect(()=>{
        getPosts();
    },[getPosts]);
    useEffect(() => {
        getPosts();
    },[])
    useEffect(() => {
        getPosts();
    },[options])



    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView && !loading) {
            setPage(state => state + 1)
        }
        }, [inView, loading]);

        return (
            <style.MainContainer>
                <style.DropDownContainer>
                    <style.CustomDropdown>
                        <style.CustomDropdown.Toggle id="style.CustomDropdown-basic">
                            {label}
                        </style.CustomDropdown.Toggle>
                            <style.CustomDropdown.Menu>
                                <style.CustomDropdown.Item href="#/action-1" onClick = {likesOrder}>인기순</style.CustomDropdown.Item>
                                <style.CustomDropdown.Item href="#/action-2" onClick = {viewsOrder}>조회수순</style.CustomDropdown.Item>
                                <style.CustomDropdown.Item href="#/action-3" onClick = {recentOrder}>최신순</style.CustomDropdown.Item>
                            </style.CustomDropdown.Menu>
                    </style.CustomDropdown>
                    
                </style.DropDownContainer>
                <GridContainer>
                <StackGrid
                    columnWidth = {280}
                    duration ={0}
                    monitorImagesLoaded = {true}
                >
                    {posts.map((post, idx) => (
                        <React.Fragment key={idx}>
                        {posts.length-1 === idx ? (
                            <ListItem
                            ref = {ref}
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
                    </StackGrid>
                    </GridContainer>
            </style.MainContainer>
        )
        
       
}

export default MainContainer
