import axios from 'axios'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN
export const kakaoLogin = (authorizeCodeFromKakao) => {
    return fetch(`${API_DOMAIN}/accounts/login/`,{
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
            console.log(data);
            if ( data.result == false ) {
              return(
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: '회원가입 해주세요',
                  showConfirmButton: false,
                  timer: 1500
                })
              )
            }
            return data;
          }
          catch{
            console.log('data')
          }
        })
}

export const kakaoRegister = (authorizeCodeFromKakao) => {
  return fetch(`${API_DOMAIN}/accounts/register/`,{
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
          console.log(data);
          if ( data.result == false ) {
            return(
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '이미 회원가입 되어있습니다.',
                showConfirmButton: false,
                timer: 1500
              })
            )
          }
          else if ( data.result == true ) {
            return(
              Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: '회원가입이 완료되었습니다',
                showConfirmButton: false,
                timer: 1500
              })
            )
          }
          return data;
        }
        catch{
          console.log('data')
        }
      })
}
export const nicknameUpdate = (nickname) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`${API_DOMAIN}/accounts/update/nickname/`,{
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
  return fetch(`${API_DOMAIN}/accounts/info/`,{
    method: 'GET',
    headers:{
      'content-type' : 'application/json',
      'Authorization' : `${token.token}`
    }
  })
  .then(res => res.json())
  .then((data) => {
    return data
  })
}

export const profileImageUpload = (data) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`${API_DOMAIN}/accounts/update/avatar/`,{
    method: "POST",
    headers:{
      'Authorization' : `${token.token}`
    },
    body : data
  })
}

export const uploadPost = (data) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`${API_DOMAIN}/posts/upload/`,{
    method: "POST",
    headers: {
      'Authorization' : `${token.token}`
    },
    body: data
  })
}

export const detailPost = (postIdxUrl) => {
  const token = JSON.parse(localStorage.getItem('token'));
  if (localStorage.getItem('token') == undefined){
    return fetch(`${API_DOMAIN}/posts/display/detail/${postIdxUrl}/`,{
    })
    .then(res => res.json())
    .then((data) => {
      return data;
    })
  }
  return fetch(`${API_DOMAIN}/posts/display/detail/${postIdxUrl}/`,{
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

export const CommentUpload = (idx, currentComments) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`${API_DOMAIN}/posts/comment/upload/${idx}/`,{
    method: 'POST',
    headers:{
      Authorization: `${token.token}`
    },
    body: JSON.stringify({
      "comment" : currentComments
    })
  })
}

export const sendIsLiked = (postIdx) => {
  console.log( '좋아요 버튼 클릭')
  const token = JSON.parse(localStorage.getItem('token'))
  return fetch(`${API_DOMAIN}/posts/like/${postIdx}/`,{
    method: 'POST',
    headers:{
      Authorization: `${token.token}`
    }
  })
}

export const updatePost = (formData, postIdx) => {
  const token = JSON.parse(localStorage.getItem('token'))
  return fetch(`${API_DOMAIN}/posts/update/${postIdx}/`,{
    method: "POST",
    headers:{
      Authorization: `${token.token}`
    },
    body: formData
  })
}

export const deletePost = (postIdx) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`${API_DOMAIN}/posts/delete/${postIdx}/`,{
    method: 'DELETE',
    headers:{
      Authorization: `${token.token}`
    }
  })
}

export const updateUser = (formData) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`${API_DOMAIN}/accounts/update/`,{
    method: 'POST',
    headers:{
      Authorization: `${token.token}`
    },
    body: formData
  })
  .then(res => res.json())
  .then((data) =>{
    useHistory.push(`/my-page/${data.nickname}`)
    console.log(data);
    return data
  }
  )
}