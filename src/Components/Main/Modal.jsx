import '../../App.css'
import React, { useEffect, useRef, useState } from "react";




export const Modal = ({ close, text }) => {
    const modalRef = useRef()
    useEffect(() => {
        const handler = (event) => {
            if (!modalRef.current) {
                return;
            }
            if (!modalRef.current.contains(event.target)) {
                close();
            }
        };
        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler);
        };
    }, [])
    return <div className="modalBackground">
        <div className="modal-content" ref={modalRef}>
            <div className="modal">
                <p>{text}</p>
            </div>
            <button className="modalBtn-close" onClick={() => close()}>x</button>
        </div>
    </div>
}