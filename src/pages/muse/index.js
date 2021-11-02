import React, { useState, useCallback, useEffect} from 'react'
import { Navbar, CounterBanner, Banner, MuseContainer } from '../../components'
import * as style from './style'
import axios from 'axios'
function Muse() {    
    return (
        <style.MusePage>
            <Navbar/>            
            <CounterBanner/>
            <MuseContainer/>
        </style.MusePage>
    )
}

export default Muse
