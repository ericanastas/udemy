"use client";

import { useRef } from "react";

import classes from "./image-picker.module.css"
export default function ImagePicker({ label, name }) {

    const imageInput = useRef();

    function onButtonClick(event) {
        imageInput.current.click();
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <input ref={imageInput} className={classes.input} type="file" accept="image/png, image/jpeg" name={name} />
            <button className={classes.button} onClick={onButtonClick} type="button">Pick an Image</button>
        </div>
    </div>
}