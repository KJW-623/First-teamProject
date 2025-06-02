import React, { useState, useEffect } from 'react';
import './ImageUpload.css'; // 스타일링을 위한 CSS 파일 (선택 사항)

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
            // 이미 URL로 제공되는 이미지 (예: 이전에 저장된 이미지)
            setPreviewUrl(currentImage);
        } else {
            setPreviewUrl(null);
        }
    }, [currentImage]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onImageChange(file); // 부모 컴포넌트로 File 객체 전달
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