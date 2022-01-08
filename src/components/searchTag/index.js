import React, { useState, useEffect } from "react";
import { MainContainer, TagName, TagCard } from "./style";
function SearchTag(props) {
    const [tags, setTags] = useState(props.tags);
    return (
        <MainContainer>
            {tags.map((tag) => (
                <TagCard>
                    <TagName>{tag}</TagName>
                </TagCard>
            ))}
        </MainContainer>
    );
}

export default SearchTag;
