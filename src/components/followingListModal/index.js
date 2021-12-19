import React, { useState, useEffect } from "react";
import "gestalt/dist/gestalt.css";
import {
    Box,
    Button,
    Checkbox,
    CompositeZIndex,
    FixedZIndex,
    Flex,
    Text,
    Layer,
    Modal,
} from "gestalt";
import { Avatar, FollowerListButton } from "./style";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function FollowingListModal(props) {
    const anchorRef = React.useRef(null);

    useEffect(() => {}, []);
    const ModalWithHeading = ({ onDismiss }) => {
        return (
            <Modal
                accessibilityModalLabel="MUSE 이용약관"
                onDismiss={onDismiss}
                size="sm"
                footer={<>h</>}
            ></Modal>
        );
    };

    const [shouldShow, setShouldShow] = React.useState(false);
    const HEADER_ZINDEX = new FixedZIndex(10);
    const modalZIndex = new CompositeZIndex([HEADER_ZINDEX]);

    return (
        <React.Fragment>
            <Box margin={2}>
                <Button
                    size="md"
                    onClick={() => setShouldShow(true)}
                    text={"팔로잉" + "\xa0" + props.followingCount + "명"}
                    shouldFocus={false}
                    ref={anchorRef}
                />
            </Box>
            {shouldShow && (
                <Layer zIndex={modalZIndex}>
                    <ModalWithHeading onDismiss={() => setShouldShow(false)} />
                </Layer>
            )}
        </React.Fragment>
    );
}

export default FollowingListModal;
