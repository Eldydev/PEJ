import { cleanup } from "@testing-library/react";
import React, { useCallback, useEffect, useState } from "react";
import './Owner.css'

const Owner = () => {
    const [show, setShow] = useState(true)
    const controlOwner = () => {
        if (window.scrollY>100) {
            setShow(false)
        }else {
            setShow(true)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',
        controlOwner)
        return () => {
            window.removeEventListener('scroll',
            controlOwner)
        }
    }, [])
    return (
        <div className={`own ${show && 'own__blue'}`}>
            <p className="owner">PIERRE EDOUARD JOUBERT</p>
            <p className="ownerTitle">CINEMATOGRAPHY</p>
        </div>
    )
}

export default Owner