import { POST_UPLOAD, DETAIL_POST } from "../constants/actionTypes";
import * as api from "../api/index";

export const getUploadPost = (data, tag) => async () => {
    try {
        api.uploadPost(data, tag);
    } catch (e) {
        console.error(e);
    }
};

export const getDetailPost = (postIdxUrl) => async (dispatch) => {
    try {
        const response = await api.detailPost(postIdxUrl);
        dispatch({ type: DETAIL_POST, payload: response });
    } catch (e) {
        console.error(e);
    }
};

export const uploadCommentPost = (idx, currentComments) => async () => {
    try {
        await api.CommentUpload(idx, currentComments);
    } catch (e) {
        console.error(e);
    }
};

export const updatePost = (postIdx, formData) => async () => {
    try {
        await api.updatePost(postIdx, formData);
    } catch (e) {
        console.error(e);
    }
};

export const deletePost = (postIdx) => async () => {
    try {
        await api.deletePost(postIdx);
    } catch (e) {
        console.error(e);
    }
};
