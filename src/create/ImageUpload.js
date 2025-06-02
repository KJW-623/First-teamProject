import { useState, useEffect } from 'react';
import './ImageUpload.css';

function ImageUpload({ onImageChange, currentImage }) {
    const [previewUrl, setPreviewUrl] = useState(null);

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
                    <img src={previewUrl} alt="미리보기" />
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