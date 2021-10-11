import axios from 'axios'

const token = JSON.parse(localStorage.getItem('token'));
export const kakaoLogin = (authorizeCodeFromKakao) => {
    return fetch("http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/accounts/login/",{
          method: "POST",
          headers: {
            'content-type' : 'application/json'
          },
          body : JSON.stringify({
            "code": authorizeCodeFromKakao
          })
          
        })
        .then(res => res.json())
        .then((data) => {
          return data
        })
}

export const nicknameUpdate = (nickname) => {
  console.log(token)
  return fetch("http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/accounts/update-nickname/",{
    method: "POST",
    headers: {
      'Authorization' : `TOKEN ${token.token}`,
      'content-type' : 'application/json'
    },
    body : JSON.stringify({
      "nickname" : nickname
    })
  })
}

export const getUserInfo = () => {
  console.log(token.token);
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/accounts/user-info/`,{
    method: 'GET',
    headers:{
      'content-type' : 'application/json',
      'Authorization' : `TOKEN ${token.token}`
    }
  })
  .then(res => res.json())
  .then((data) => {
    console.log(data, "서버에서 받아온 데이터");
    return data
  })
}

export const profileImageUpload = (data) => {
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/accounts/update-avatar/`,{
    method: "POST",
    headers:{
      'Authorization' : `TOKEN ${token.token}`
    },
    body : data
  })
}

export const uploadPost = (data) => {
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/upload/`,{
    method: "POST",
    headers: {
      'content-type' : 'application/json',
      'Authorization' : `TOKEN ${token.token}`
    },
    body: data
  })
}

export const liked = (post_idx) => {
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/like/`,{
    method: "POST",
          headers: {
            'content-type' : 'application/json',
            'Authorization' : `TOKEN ${token.token}`
          },
          body : JSON.stringify({
            "user_id": token.user.user_id,
            "post_idx": post_idx
          })
        })
        .then(res => res.json())
        .then((data) => {
          console.log(data)
            return data
        })
}

export const detailPost = (postIdxUrl) => {
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/display/detail/${postIdxUrl}/`,{
    method: 'GET',
    headers: {
      'Authorization' : `TOKEN ${token.token}`,
      'content-type' : 'application/json'
    }
  })
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    return data
  })
}