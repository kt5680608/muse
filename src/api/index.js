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
            return data
        })
}

export const nicknameUpdate = (nickname) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch("http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/accounts/update-nickname/",{
    method: "POST",
    headers: {
      'content-type' : 'application/json'
    },
    body : JSON.stringify({
      "user_id" : token.user.user_id,
      "nickname" : nickname
    })
  })
}

export const userInfo = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/accounts/user-info/?user_id=${token.user.user_id}`,{
    method: 'GET',
  })
  .then(res => res.json())
  .then((data) => {
    //console.log(data, "서버에서 받아온 데이터");
    return data
  })
}

export const profileImageUpload = (data) => {
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/accounts/update-avatar/`,{
    method: "POST",
    body : data
  })
}

export const uploadPost = (data) => {
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/upload/`,{
    method: "POST",
    body: data
  })
}

export const displayPost = (page) => {
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/posts/display/?page=${page}`,{
    method: "GET",
  })
  .then(res=>res.json())
  .then((data) => {
    console.log('posts.display 데이터 통신 성공', data);
    return data
  })

}