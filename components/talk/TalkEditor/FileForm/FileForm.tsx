import { ChangeEvent, useRef, useState } from "react"
import { initializeApp } from "firebase/app";
import { ImageBox } from "./FileForm.styles";
import { openDB } from 'idb'
import { uploadImageToArticle } from "@/utils/idb";


// const firebaseConfig = {
//     storageBucket: 'gs://octo-generator.appspot.com'
// };

// const app = initializeApp(firebaseConfig);

const FileForm = () => {
    const [image, setImage] = useState('')

    const handleFileInput = async (e: ChangeEvent<HTMLInputElement>) => {
        console.log("file: ", e.target.files)
        const file =  e.target.files && e.target.files[0]
        if (!file) return;
        const imgURL = URL.createObjectURL(file)
        setImage(imgURL)
        console.log("imgURL: ", imgURL)
        
        uploadImageToArticle(file)

    }
    
    return(
        <div style={{width: "100%"}}>
            <input type="file" onChange={handleFileInput}  accept="image/*"/>
            <ImageBox>
                {image ? <img src={image} style={{maxWidth: "100%"}} alt="업로드 이미지"/> : "이미지를 업로드 해주세요."}
            </ImageBox>

        </div>
    )
}

export default FileForm