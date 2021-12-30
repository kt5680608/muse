import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
const token = JSON.parse(localStorage.getItem("token"));
/*------------------------------------------------------------------------------------------------*/
// 로그인 및 회원가입
export const kakaoLogin = (authorizeCodeFromKakao) => {
    return fetch(`${API_DOMAIN}/account/`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            type: "login",
            code: authorizeCodeFromKakao,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            try {
                if (data.result == false) {
                    return Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "회원가입 해주세요",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                return data;
            } catch (e) {
                console.error(e);
            }
        });
};

export const kakaoRegister = (authorizeCodeFromKakao) => {
    return fetch(`${API_DOMAIN}/account/`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            code: authorizeCodeFromKakao,
            type: "register",
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            try {
                if (data.result == false) {
                    return Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "이미 회원가입 되어있습니다.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else if (data.result == true) {
                    return Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "회원가입이 완료되었습니다",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                return data;
            } catch (e) {
                console.error(e);
            }
        });
};

/*------------------------------------------------------------------------------------------------*/
// 유저 정보 가져오기
export const getUserInfo = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch(`${API_DOMAIN}/account/`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: `${token.token}`,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        });
};

/*------------------------------------------------------------------------------------------------*/
// 포스트 관련
export const uploadPost = (data) => {
    return fetch(`${API_DOMAIN}/post/`, {
        method: "POST",
        headers: {
            Authorization: `${token.token}`,
        },
        body: data,
    });
};

export const detailPost = (postIdxUrl) => {
    if (localStorage.getItem("token") == undefined) {
        return fetch(`${API_DOMAIN}/posts/display/detail/${postIdxUrl}/`, {})
            .then((res) => res.json())
            .then((data) => {
                return data;
            });
    }
    return fetch(`${API_DOMAIN}/posts/display/detail/${postIdxUrl}/`, {
        method: "GET",
        headers: {
            Authorization: `${token.token}`,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
};

export const CommentUpload = (idx, currentComments) => {
    return fetch(`${API_DOMAIN}/posts/comment/upload/${idx}/`, {
        method: "POST",
        headers: {
            Authorization: `${token.token}`,
        },
        body: JSON.stringify({
            comment: currentComments,
        }),
    });
};

export const sendIsLiked = (postIdx) => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    return fetch(`${API_DOMAIN}/post/${postIdx}/like/`, {
        method: "POST",
        headers: {
            Authorization: token,
        },
    });
};

export const updatePost = (formData, postIdx) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch(`${API_DOMAIN}/posts/update/${postIdx}/`, {
        method: "POST",
        headers: {
            Authorization: `${token.token}`,
        },
        body: formData,
    });
};

export const deletePost = (postIdx) => {
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch(`${API_DOMAIN}/posts/delete/${postIdx}/`, {
        method: "DELETE",
        headers: {
            Authorization: `${token.token}`,
        },
    });
};

export const updateUser = (formData) => {
    return fetch(`${API_DOMAIN}/account/update/`, {
        method: "POST",
        headers: {
            Authorization: `${token.token}`,
        },
        body: formData,
    })
        .then((res) => res.json())
        .then((data) => {
            useHistory.push(`/my-page/${data.nickname}`);
            return data;
        });
};
