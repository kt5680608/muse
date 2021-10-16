import axios from 'axios'

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
          try{
            return data;
          }
          catch{
            console.log('data')
          }
        })
}

export const nicknameUpdate = (nickname) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch("http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/accounts/update/nickname/",{
    method: "POST",
    headers: {
      'Authorization' : `${token.token}`,
      'content-type' : 'application/json'
    },
    body : JSON.stringify({
      "nickname" : nickname
    })
  })
}

export const getUserInfo = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/accounts/info/`,{
    method: 'GET',
    headers:{
      'content-type' : 'application/json',
      'Authorization' : `${token.token}`
    }
  })
  .then(res => res.json())
  .then((data) => {
    console.log(data, "서버에서 받아온 데이터");
    return data
  })
}

export const profileImageUpload = (data) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/accounts/update/avatar/`,{
    method: "POST",
    headers:{
      'Authorization' : `${token.token}`
    },
    body : data
  })
}

export const uploadPost = (data) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/upload/`,{
    method: "POST",
    headers: {
      'Authorization' : `${token.token}`
    },
    body: data
  })
}

export const detailPost = (postIdxUrl) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/display/detail/${postIdxUrl}/`,{
    method: 'GET',
    headers: {
      'Authorization' : `${token.token}`,
    }
  })
  .then(res => res.json())
  .then((data) => {
    return data;
  })
}

export const CommentUpload = (postIdx, data) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/comment/upload/${postIdx}`,{
    method: 'POST',
    headers:{
      Authorization: `${token.token}`
    },
    body: JSON.stringify({
      "comment" : data
    })
  })
}

export const sendIsLiked = (postIdx) => {
  console.log( '좋아요 버튼 클릭')
  const token = JSON.parse(localStorage.getItem('token'))
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/like/${postIdx}`,{
    method: 'POST',
    headers:{
      Authorization: `${token.token}`
    }
  })
}