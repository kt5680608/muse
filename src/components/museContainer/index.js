import React, { useState, useEffect } from 'react'
import * as style from './style.js'
import axios from 'axios'
import MuseCard from '../museCard'

function MuseContainer() {
    const [musePosts, setMusePosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const getMuse = async() => {
        setLoading(true);
        await axios.get(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/display/muse/`)
        .then(res => {
            try{
                console.log(res.data);
                setMusePosts(res.data);
                console.log('data fetch complete');
            }
            catch(e){
                console.log(e);
            }
        })
        setLoading(false);
    }
    useEffect(() => {
        getMuse();
    }, [])
    const clickBanner = () => {
        console.log(musePosts);
    }
    return (
        <style.GridContainer>
            {musePosts.map((musePost, idx) => (
                            <style.ListItem key={idx}>
                                <MuseCard
                                    image = {musePost.image}
                                    title = {musePost.title}
                                    idx = {musePost.idx}
                                    liked= {musePost.liked}
                                    writer = {musePost.writer}
                                    avatar= {musePost.writer_avatar}
                                    views = {musePost.views}
                                    likes = {musePost.likes}
                                    week = {musePost.week}
                                    content = {musePost.content}
                                />
                            </style.ListItem>
                    ))
                    }
        </style.GridContainer>
    )
}

export default MuseContainer
