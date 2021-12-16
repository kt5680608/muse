import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import PreviewCard from "../previewCard";
import axios from "axios";
import {
    MainContainer,
    PreviewH1,
    Container,
    ListItem,
    GridContainer,
    PreviewH2,
    PreviewInfoContainer,
} from "./style";
import StackGrid from "react-stack-grid";

function PreviewReference(props) {
    const [posts, setPosts] = useState([]);
    const [ref, inView] = useInView({ trackVisibility: true, delay: 100 });

    const getPosts = async () => {
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        await axios
            .get(`${API_DOMAIN}/posts/display/preview/${props.name}/`)
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
        <MainContainer>
            <PreviewInfoContainer>
                {props.name == "reference" && <PreviewH1>Reference</PreviewH1>}
                {props.name == "contest" && <PreviewH1>Contest</PreviewH1>}
                <PreviewH2
                    whileHover={{
                        scale: 1.05,
                        color: "#0057ff",
                    }}
                >
                    more
                </PreviewH2>
            </PreviewInfoContainer>
            <GridContainer>
                {posts.map((post, idx) => (
                    <React.Fragment key={idx}>
                        <ListItem ref={ref}>
                            <PreviewCard
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
        </MainContainer>
    );
}

export default PreviewReference;
