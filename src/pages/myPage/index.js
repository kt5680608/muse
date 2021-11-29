import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateUser, profileImageUpload} from '../../actions/updateUser'
import { Navbar, NicknameUpdateButton, OwnerPost, LikedPost, FollowListModal, FollowingListModal, Loading} from '../../components'
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
    Pre,
    DisplayOrderButton,
    DisplayOrderButton2,
    OrderButtonContainer,
    PostContainer,
    FollowedButton,
    ButtonH1,
} from './style'

function MyPage({match}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [ nickname, setNickname ] = useState('');
    const [ isOwner, setIsOwner ] = useState();
    const [ isLoginUserFollow, setIsLoginUserFollow] = useState();
    const [ ownerInfo, setOwnerInfo ] = useState([]);
    const [ followingCount, setFollowingCount ] = useState();
    const [ followingLists, setFollowingLists ] = useState([]);
    const [ followerCount, setFollowerCount ] = useState();
    const [ followerLists, setFollowerLists ] = useState([]);
    const [ ownerPosts, setOwnerPosts ] = useState([]);
    const [ introduce, setIntroduce] = useState('');
    const myPageOwner = match.params;
    const [ cover, setCover] = useState(); 
    const [ displayOwnerPosts, setDisplayOwnerPosts ] = useState(true);
    const [loading, setLoading] = useState(); 
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
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

    const followAction = () => {
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN
        const token = JSON.parse(localStorage.getItem('token'));     
        return fetch(`${API_DOMAIN}/accounts/follow/`,{
            method:'POST',
            headers:{
                'Authorization': `${token.token}`,
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                'follower' : ownerInfo.nickname
            })
        })
        .then(() => {
            setIsLoginUserFollow(!isLoginUserFollow);
            if(isLoginUserFollow == false){
                setFollowerCount(followerCount +1);
            }
            if(isLoginUserFollow == true){
                setFollowerCount(followerCount -1)
            }
            console.log('팔로잉 클릭!')
            console.log(ownerInfo.nickname);
        })
    }

    const getOwnerInfo =() => {
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
                setIsOwner(data.is_owner);
                setIsLoginUserFollow(data.is_login_user_follow);
                setOwnerInfo(data.owner_info);
                setFollowingCount(data.following_count);
                setFollowingLists(data.following_list);
                setFollowerCount(data.follower_count);
                setFollowerLists(data.follower_list);
                console.log(followerLists);
        })
    }

    const getOwnerPosts =() => {
        setLoading(true)
        const url = window.location.pathname;
        const urlParts = url.replace(/\/\s*$/,'').split('/'); 
        urlParts.shift();
        console.log(urlParts);
        const token = JSON.parse(localStorage.getItem('token'));     
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;   
        return fetch(`${API_DOMAIN}/accounts/my-page/owner/post/${urlParts[1]}/`,{
            method: 'GET',
            headers:{
                Authorization: `${token.token}`
            }
        })
            .then(res => res.json())
            .then((data) => {
                setOwnerPosts(data);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const getLikedPosts = () =>{ 
        const url = window.location.pathname;
        const urlParts = url.replace(/\/\s*$/,'').split('/'); 
        urlParts.shift();
        const token = JSON.parse(localStorage.getItem('token'));     
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;   
        return fetch(`${API_DOMAIN}/accounts/my-page/owner/liked-post/${urlParts[1]}/`,{
            method: 'GET',
            headers:{
                Authorization: `${token.token}`
            }
            })
            .then(res => res.json())
            .then((data) => {
                setOwnerPosts(data)
        })
    }
    // ----------------------------------------------------------------정렬--------------------------------------------------------
    const likesOrder = () => {
        setDisplayOwnerPosts(false);
        setOwnerPosts([]);
        getLikedPosts();
    }

    const ownerOrder = () => {
        setDisplayOwnerPosts(true);
        setOwnerPosts([]);
        getOwnerPosts();
    }

    // --------------------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        getOwnerInfo();
        getOwnerPosts();
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
                            {/* { isLoginUserFollow == false && isOwner == false ?
                            <FollowButton onClick = {followAction}>팔로우</FollowButton>
                            :
                            <FollowButton>팔로잉</FollowButton>
                            } */}
                            { isOwner == false ? 
                                ( isLoginUserFollow == false ?
                                    <FollowButton onClick = {followAction}>팔로우</FollowButton>
                                    :
                                    <FollowedButton onClick = {followAction}>팔로잉</FollowedButton>
                                )
                                :
                                <></>
                            }
                        </OwnerNicknameContainer>
                        <div><Pre><Introduce>{ownerInfo.self_introduce}</Introduce></Pre></div>
                        
                        <FollowContainer>                    
                            <FollowListModal
                                followerCount = {followerCount}
                                followerLists = {followerLists}
                            />
                            <FollowingListModal
                                followingCount = {followingCount}
                            />
                        </FollowContainer>
                    </OwnerInfoContainer>
            </MyPageContainer>
            <PostContainer>
                <MyPostContainer>
                    <OrderButtonContainer>
                        {isOwner == true ?
                            <>
                                <DisplayOrderButton onClick = {ownerOrder}> <ButtonH1>내 게시물</ButtonH1></DisplayOrderButton>
                                <DisplayOrderButton2 onClick = {likesOrder}> <ButtonH1>좋아하는 게시물</ButtonH1></DisplayOrderButton2>
                            </>
                        :
                            <></>   
                        }
                    </OrderButtonContainer>
                    { displayOwnerPosts == true ? 
                        <StackGrid
                            columnWidth = {280}
                            duration ={0}
                            monitorImagesLoaded = {true}
                            gutterWidth = {10}
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
                    :
                    <StackGrid
                    columnWidth = {284}
                    duration ={0}
                    monitorImagesLoaded = {true}
                    >
                        {ownerPosts.map((post) => (
                            <LikedPost
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
                    }
                </MyPostContainer>
            </PostContainer>
        </div>
    )
}

export default MyPage
