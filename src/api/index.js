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
            console.log(data)
            return data
        })
}

export const nicknameUpdate = (nickname) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch("http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/accounts/update_nickname/",{
    method: "POST",
    headers: {
      'content-type' : 'application/json'
    },
    body : JSON.stringify({
      "uid" : token.user.uid,
      "nickname" : nickname
    })
  })
}

export const userInfo = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`http://ec2-3-38-107-219.ap-northeast-2.compute.amazonaws.com:8080/accounts/info/?uid=${token.user.uid}`,{
    method: 'GET',
  })
  .then(res => res.json())
  .then((data) => {
    //console.log(data, "서버에서 받아온 데이터");
    return data
  })
}
