import { ChangeEvent, MouseEvent, useState } from "react"

const FileForm = () => {
    const [image, setImage] = useState("")

    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("file: ", e.target.files)
        const file =  e.target.files && e.target.files[0]
        if (!file) return;
        const imgURL = URL.createObjectURL(file)
        setImage(imgURL)

        console.log("imgURL: ", imgURL)
    }
    
    return(
        <div style={{width: "100%"}}>
            <input type="file" onChange={handleFileInput}  accept="image/*"/>
            <img src={image} style={{maxWidth: "100%"}}/>
        </div>
    )
}

export default FileForm