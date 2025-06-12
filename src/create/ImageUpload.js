import { useState, useEffect } from 'react';
import './ImageUpload.css';

//onImageChange, currentImage 받기
function ImageUpload({ onImageChange, currentImage }) {

    //미리보기 주소 상태 관리
    const [previewUrl, setPreviewUrl] = useState(null);

    //외부 전달 값으로 설정하는 미리보기
    useEffect(() => {
        if (currentImage instanceof File) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(currentImage);
        } else if (typeof currentImage === 'string' && currentImage.startsWith('http')) {
            setPreviewUrl(currentImage);
        } else {
            setPreviewUrl(null);
        }
    }, [currentImage]);

    //파일 변경
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onImageChange(file);
        } else {
            onImageChange(null);
        }
    };

    return (
        <div className="image-upload-container">
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="image-input"
            />
            {previewUrl ? (
                <div className="image-preview">
                    <img src={previewUrl} />
                </div>
            ) : (
                <div className="no-image-preview">
                    이미지 미리보기
                </div>
            )}
        </div>
    );
}

export default ImageUpload;