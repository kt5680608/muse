import React, { useState } from 'react'
import { CustomModal,
        CustomButton,
        BurgerIcon,
        CustomListGroup
} from './style'
import SearchBar from '../searchBar'

function NavModal() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
      return (
        <>
          {values.map((v, idx) => (
            <CustomButton key={idx} className="me-2" onClick={() => handleShow(v)}>
              <BurgerIcon/>
            </CustomButton>
          ))}
          <CustomModal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <CustomModal.Header closeButton>
              <CustomModal.Title>MUSE</CustomModal.Title>
            </CustomModal.Header>
            <CustomModal.Body>
                <CustomListGroup defaultActiveKey="#link1">
                    <CustomListGroup.Item>
                        <SearchBar/>
                    </CustomListGroup.Item>
                    <CustomListGroup.Item action href="#link1">
                        MUSE
                    </CustomListGroup.Item>
                    <CustomListGroup.Item action href="#link2">
                        Contest
                    </CustomListGroup.Item>
                    <CustomListGroup.Item action href = "#link3">
                        All
                    </CustomListGroup.Item>
                </CustomListGroup>
            </CustomModal.Body>
          </CustomModal>
        </>
      );
}

export default NavModal