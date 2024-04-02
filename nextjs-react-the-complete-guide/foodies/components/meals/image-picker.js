import classes from "./image-picker.module.css"
export default function ImagePicker({ label, name }) {



    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <input type="file" accept="image/png, image/jpeg" name={name} />
        </div>
    </div>
}