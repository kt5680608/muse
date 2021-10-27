import styled from 'styled-components'
import { FiHeart } from 'react-icons/fi'
import { BsChat } from 'react-icons/bs'
import  { MdClose } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import { Dropdown } from 'react-bootstrap'
import { CgProfile } from 'react-icons/cg'
import { Modal } from 'react-bootstrap'
export const Viewport = styled.div`
    width: 100vw;
    height: 100vh;  
`
export const MainContainer = styled.div`
    height: 94vh;
    display: flex;
    justify-content : center;
    align-items: flex-start;
`
export const DetailContainer = styled.div`
    margin-top: 60px;
    width: 72vw;
    height: 80%;
    display: flex;
    border-radius: 40px;
    box-shadow: 10px 10px 28px 4px rgba(156,156,156,0.64);
    -webkit-box-shadow: 10px 10px 28px 4px rgba(156,156,156,0.64);
    -moz-box-shadow: 10px 10px 28px 4px rgba(156,156,156,0.64);
`
   
export const DetailImage = styled.img`
    width: 60%;
    object-fit: fill;
    height: 100%;
    // original height: 50vh + 100%;
    border-radius: 40px 0px 0px 40px;
`

export const DetailTitle = styled.h1`
    font-family: "Helvetica";
    font-weight: 900;
    font-size: var(--g-text-font-size-6);
`

export const InfoContainer = styled.div`
    padding: 36px 24px 36px 24px;
    background-color: white;
    width: 40%;
    border-radius: 0px 40px 40px 0px;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
`

export const CommentAllContainer = styled.div`
    max-height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const CommentContainer = styled.div`
    margin: 0;
    padding: 0;
    max-height: 90%;
    overflow: scroll;
`

export const CommentPostContainer = styled.form`

`

export const WriterContainer = styled.div`
    max-height: 50%;

`

export const HashTagContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 0 20px;
    margin-right: 100px;
    background-color: red;
    flex-direction: row;
    border-radius: 20px;
    display: inline-block;
`

export const HashTag = styled.a`
    margin-right: 100px;
    font-size: var(--g-text-font-size-1);
    font-family: 'Helvetica Neue',Helvetica,sans-serif;
    font-weight: 600;
    margin: 0;
    cursor: pointer;
`

export const CustomUl = styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 4px 0 4px 0;
    padding: 0px;

`

export const CustomLi = styled.li`
    margin: 0 6px 0 0;
    padding: 0;
    list-style-type: none;
    border-radius: 24px;
    font-size: 12px;
    font-family: Noto-Sans-KR;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    background-color: var(--g-color-gray100);
    &:hover{
        background-color: var(--g-color-blue);
        color: var(--g-color-white)
    }
`
export const HashtagUl = styled.ul`
    display: inline-block;

    padding: 0;
`
export const HashtagLi = styled.li`
    margin: 0 3px 0 3px;
    padding: 6px;
    font-size: var(--g-text-font-size-1);
    background-color: var(--g-color-gray100);
    list-style: none;
    border-radius: 16px;
    display: inline;
    &:hover{
        background-color: var(--g-color-blue);
        color: var(--g-color-white);
    }
`

export const DetailWriter = styled.h5`
    font-size: 16px;
    padding-left: 6px;
    font-family: Noto-Sans-KR;
    font-weight: 900;
    margin: 0;
`

export const DetailUserAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

export const Pre = styled.pre`
    margin: 0;
    padding: 0;
`

export const DetailText = styled.p`
    margin: 16px 0 16px 0;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: break-word;
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: var(--g-text-font-size-3);
`

export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
`

export const HeartIconOff = styled(FiHeart)`
    width: 24px;
    height: 24px;
    margin: 0 4px 0 4px;
    stroke-width: 2.2.px;
    padding: 1px;
    cursor: pointer;
`

export const HeartIconOn = styled(HeartIconOff)`
    color: red;
    fill: red;
`

export const BubbleIcon = styled(BsChat)`
    width: 26px;
    padding: 2px;
    height: 24px;
    stroke-width: .5;
    margin: 0 4px 0 4px;
    display: block;
    cursor: pointer;
`

export const CloseIcon = styled(MdClose)`
    width: 24px;
    height:24px;
    stroke-width: .5;
    display: block;
    padding: 2px;
    margin: 0 4px 0 4px;
`

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const CommentInput = styled.input`
    width: 84%;
    height: 36px;
    border-radius: 20px;
    background-color: var(--g-color-gray100);
    border: none;
    padding: 10px;
`

export const CommentSubmitButton = styled.button`
    width: 14%;
    height: 36px; 
    border-radius: 32px;
    background-color: var(--g-color-blue);
    color: var(--g-color-white);
    font-family: 'Helvetica';
    font-size: var(--g-text-font-size-1);
    padding: 0;
    margin: 0;
    font-weight: 600;
    border: none;
    &:hover{
        opacity: 0.8;
    }
    &:focus{
        border: none;
    }
`

export const CommentDisplayContainer = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    justify-content: center;
    align-items: center;
`

export const CommentLi = styled.li`
    margin: 4px;
    list-style: none;
    font-size: var(--g-text-font-size-2);
`

export const CommentWriterLi = styled(CommentLi)`
    font-size: var(--g-text-font-size-2);
    font-weight: bold;
    display: flex;
    align-items: center;
`

export const ShowCommentButton = styled.button`
    background-color: var(--g-color-white);
    color: var(--g-color-gray200);
    font-family: "Helvetica";
    font-size: var(--g-text-font-size-1);
    padding: 0;
    margin: 0;
    font-weight: 600;
    border: none;
    display: block;
`

export const Height40Container = styled.div`
    height: 40%;
`

export const isWriterButton = styled(BsThreeDots)`
    position: absolute;
    top: 16%;
    right: 2.8%;
    font-size: var(--g-text-font-size-5);
`

export const CustomDropdown = styled(Dropdown)`
    button {
        background-color: var(--g-color-blue);
        width: 72px;
        height: 36px;
        position: absolute;
        top: 16%;
        right: 2.8%;
    }
    .btn-primary.dropdown-toggle:focus {
    box-shadow: none;
    }
    
    .btn-success{
        background-color: var(--g-color-blue);
        border-color: var(--g-color-blue);
    }
    .btn-success:hover{
        background-color: var(--g-color-blue);
    }
    #dropdown-menu-align-end{
        width: 24px;
        padding: 0;
        background-color: transparent;
        border: none;
        color: var(--g-olor-blue);
    }
    .dropdown-menu{
        min-width: 48px;
        background-color: white;
    }

    .dropdown-item{
        color:black;
        display: flex;
        justify-content: center;
        font-weight: 600;
        &:hover {
            background-color: var(--g-color-blue);
        }
    }
    .dropdown-toggle::after{display:none}
    .btn-check:focus + &, &:focus{
        background-color: transparent;
        box-shadow: none;
    }
    .btn-check:focus + .btn-primary, .btn-primary:focus{
        box-shadow: none;
    }
    .btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {
    box-shadow: none;
    }
`

export const AvatarIcon = styled(CgProfile)`
    
    font-size: 24px;
    &:hover{
        color: var(--g-color-blue);
    }
`

export const FollowButton = styled.button`
    width: 60px;
    height: 30px;
    background-color: var(--g-color-blue);
    border: none;
    border-radius: 20px;
    color: var(--g-color-white);
    font-family: "Helvetica";
    font-weight: 600;
    font-size: var(--g-text-font-size-3);
    text-align: center;
    margin: 0;
    padding: 0;
    line-height: 33px;
    &:hover{
        opacity: 0.8;
    }
`

export const WriterInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`
export const LoadingH1 = styled.h1`
    font-family: R-FLEX-BLACK;
    font-size: 40px;
    margin-bottom: 24px;
`