import "./index.scss"
import LogoAK from "../../../assets/images/logo.png"
import { useEffect, useRef } from 'react'

const Logo = () => {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef}className="solid-logo" src={LogoAK} alt="AK"></img>
        </div>
    )
}

export default Logo