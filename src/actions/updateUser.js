import { UPDATE_USER, PROFILE_IMAGE_UPLOAD } from "../constants/actionTypes";
import * as api from "../api";

export const updateUser = (formData) => {
    try {
        api.updateUser(formData);
    } catch (e) {
        console.error(e);
    }
};

export const profileImageUpload = (data) => async (dispatch) => {
    try {
        await api.profileImageUpload(data);
        dispatch({ type: PROFILE_IMAGE_UPLOAD });
    } catch (e) {
        console.log(e);
    }
};
