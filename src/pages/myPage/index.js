import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateUser, profileImageUpload} from '../../actions/updateUser'
import { userInfo} from '../../actions/userInfo'
import { Navbar, NicknameUpdateButton, OwnerPost } from '../../components'
import StackGrid from 'react-stack-grid'

import{ Avatar,
    MyPageContainer,
    OwnerInfoContainer,
    OwnerNicknameContainer,
    OwnerNickname,
    OwnerFollower,
    FollowButton,
    FollowContainer,
    FollowCountContainer,
    MyPostContainer,
    Introduce,
    Pre
} from './style'

function MyPage({match}) {
    const getUserInfo = useSelector(state => state.userInfo.nickname);
    const getUserAvatar = useSelector(state => state.userInfo.avatar);
    
    const history = useHistory();
    const dispatch = useDispatch();
    const [nickname, setNickname] = useState('');
    const [ isOwner, setIsOwner ] = useState();
    const [ isLoginUserFollow, setIsLoginUserFollow] = useState();
    const [ ownerInfo, setOwnerInfo ] = useState([]);
    const [ followingCount, setFollowingCount ] = useState();
    const [ followingList, setFollowingList ] = useState([]);
    const [ followerCount, setFollowerCount ] = useState();
    const [ followerList, setFollowerList ] = useState([]);
    const [ ownerPosts, setOwnerPosts ] = useState([]);
    const [introduce, setIntroduce] = useState('');
    const myPageOwner = match.params;
    const [cover, setCover] = useState(); 
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('변경');
    }
    const onChangeProfileImage = (e) => {
        e.preventDefault();
        setCover(e.target.files[0]);
    }
    const onClickToSubmit = async(e) => {
        if (cover == null){
            console.log('프로필 사진 안바낌')
        }
        else{
            const data = new FormData();
            data.append('avatar', cover);
            
            try{
                await dispatch(profileImageUpload(data));
            }
            catch{
                console.log(e);
            }
        }
        if (nickname == '') {
            console.log('빈칸이라 그대로 처리해슴')
        }
        else{
            try{
                await dispatch(updateUser(nickname));
                
            }
            catch(e){
                console.error(e);
            }
        }
            await history.push('/userUpdate')
    }
    const onPressEnter = (e) => {
        if(e.key == 'Enter'){
            onClickToSubmit();
        }
    }
    
    useEffect(() => {
        dispatch(userInfo());
        const url = window.location.pathname;
        const urlParts = url.replace(/\/\s*$/,'').split('/'); 
        urlParts.shift();
        console.log(urlParts);
        const token = JSON.parse(localStorage.getItem('token'));     
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;   
        return fetch(`${API_DOMAIN}/accounts/my-page/${urlParts[1]}/`,{
            method: 'GET',
            headers:{
                Authorization: `${token.token}`
            }
            })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setIsOwner(data.is_owner);
                setIsLoginUserFollow(data.is_login_user_follow);
                setOwnerInfo(data.owner_info);
                setOwnerPosts(data.owner_post);
                setFollowingCount(data.following_count);
                setFollowingList(data.following_list);
                setFollowerCount(data.follower_count);
                setFollowerList(data.follower_list);
        })

    },[])

    return (
        <div>
            <Navbar/>
            <MyPageContainer>      
                <OwnerInfoContainer>
                
                    <Avatar src = {ownerInfo.avatar} />
                        <OwnerNicknameContainer>
                           <OwnerNickname>{ownerInfo.nickname}</OwnerNickname>
                           
                            { isOwner == true ?
                                <NicknameUpdateButton
                                    avatar = {ownerInfo.avatar}
                                    nickname = {ownerInfo.nickname}
                                    selfIntroduce = {ownerInfo.self_introduce}
                                />
                                :
                                <></>
                            }
                        </OwnerNicknameContainer>
                        <div><Pre><Introduce>{ownerInfo.self_introduce}</Introduce></Pre></div>
                        { isOwner == false && isLoginUserFollow == false ?
                            <FollowButton>팔로우</FollowButton>
                            :
                            <></>
                        }
                        
                        <FollowContainer>
                            <FollowCountContainer
                                whileHover = {{
                                    scale: 1.05
                                }}
                            ><OwnerFollower>팔로워<br/>{followerCount}명</OwnerFollower></FollowCountContainer>
                            <FollowCountContainer
                                whileHover = {{
                                    scale: 1.05
                                }}
                            ><OwnerFollower>팔로잉<br/>{followingCount}명</OwnerFollower></FollowCountContainer>
                        </FollowContainer>
                    </OwnerInfoContainer>
            </MyPageContainer>
            <MyPostContainer>
                <StackGrid
                    columnWidth = "25%"
                    duration ={0}
                    monitorImagesLoaded = {true}
                >
                {ownerPosts.map((post) => (
                                <OwnerPost
                                    image = {post.image}
                                    title = {post.title}
                                    idx = {post.idx}
                                    liked= {post.liked}
                                    avatar= {post.writer_avatar}
                                    writer = {post.writer}
                                    views = {post.views}
                                    likes = {post.likes}
                                />
                ))
                }
                </StackGrid>
            </MyPostContainer>
        </div>
    )
}

export default MyPage
