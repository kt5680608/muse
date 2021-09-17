import React, { useEffect } from 'react'
import{ useHistory } from 'react-router-dom'
function UserUpdate() {
    const history = useHistory();
    useEffect (() => {
        try{
            console.log('돌아가!')
            history.push('/myPage');

        }
        catch(e){
            console.error(e);
        }
    },[])
    return (
        <div>
        </div>
    )
}

export default UserUpdate
