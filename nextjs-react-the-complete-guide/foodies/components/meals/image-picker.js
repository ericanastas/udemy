"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import classes from "./image-picker.module.css"
export default function ImagePicker({ label, name }) {

    const imageInput = useRef();
    let [pickedImage, setPickedImage] = useState();

    function onImageChange(event) {

        let file = event.target.files[0];

        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                let dataUrl = fileReader.result;
                setPickedImage(dataUrl);
            };

            fileReader.readAsDataURL(file);
        }
        else setPickedImage(null)
    }

    function onButtonClick(event) {
        imageInput.current.click();
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && <Image src={pickedImage} alt="image preview" fill />}
            </div>
            <input required ref={imageInput} onChange={onImageChange} className={classes.input} type="file" accept="image/png, image/jpeg" name={name} />
            <button className={classes.button} onClick={onButtonClick} type="button">Pick an Image</button>
        </div>
    </div>
}