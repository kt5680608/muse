import React, { useState, useEffect } from 'react'
import * as style from './style'
function MuseCard({idx, title, image, avatar, views, likes, week, writer}) {
    return (
        <style.Viewport>
                <style.MuseNumber>MUSE.0{week}</style.MuseNumber>
            <style.MuseContainer>
                    <style.MuseImg src = {`${image}`}
                        whileHover = {{
                            scale: 1.04
                        }}
                        whileTap = {{
                            scale: .9
                        }}
                    />      
            </style.MuseContainer>
            {title}
        </style.Viewport>
    )
}

export default MuseCard