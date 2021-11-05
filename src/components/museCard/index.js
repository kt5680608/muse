import React, { useState, useEffect } from 'react'
import * as style from './style'
function MuseCard({idx, title, image, avatar, views, likes, week, content, writer}) {
        return(
            <style.MuseContainer>   
                <style.MuseInfoContainer>
                    <style.MuseNumber>
                        MUSE.0{week}
                    </style.MuseNumber>
                    <style.MuseH1>
                        Title: {title}
                    </style.MuseH1>
                    <style.MuseWriterH2>
                        <style.Avatar src = {avatar}/>{writer}
                    </style.MuseWriterH2>
                    <style.MuseH2>
                        {content}
                    </style.MuseH2>
                </style.MuseInfoContainer>
                <style.MuseImg src = {`${image}`}
                        whileHover = {{
                            scale: 1.02
                        }}
                        whileTap = {{
                            scale: .98
                        }}
                    />   
            </style.MuseContainer>
        )
}

export default MuseCard