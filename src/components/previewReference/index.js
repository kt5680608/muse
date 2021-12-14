import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../card";
import axios from "axios";
import * as style from "./style";
import StackGrid from "react-stack-grid";
import { Container, ListItem, GridContainer } from "./style";

function PreviewReference() {
    const [posts, setPosts] = useState([]);
    const [ref, inView] = useInView({ trackVisibility: true, delay: 100 });

    const getPosts = async () => {
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        await axios
            .get(`${API_DOMAIN}/posts/display/preview/reference/`)
            .then((res) => {
                try {
                    const fetchedData = res.data;
                    setPosts(fetchedData);
                } catch (e) {
                    console.error(e);
                }
            });
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <style.MainContainer>
            <GridContainer>
                {posts.map((post, idx) => (
                    <React.Fragment key={idx}>
                        <ListItem ref={ref}>
                            <Card
                                image={post.image}
                                title={post.title}
                                idx={post.idx}
                                liked={post.liked}
                                avatar={post.writer_avatar}
                                writer={post.writer}
                                views={post.views}
                                likes={post.likes}
                            />
                        </ListItem>
                    </React.Fragment>
                ))}
            </GridContainer>
        </style.MainContainer>
    );
}

export default PreviewReference;
