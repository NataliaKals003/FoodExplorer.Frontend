import React, { useState, useEffect } from 'react';
import { Container } from './styles';

export function UploadImg({ title, buttonLabel, icon: Icon, onImageUpload, imageUrl }) {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [imageName, setImageName] = useState(title);

    useEffect(() => {
        if (imageUrl) {
            setPreviewUrl(imageUrl);
        }
    }, [imageUrl]);

    const handleChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
            setImageName(file.name);
            onImageUpload(file);
        }
    };

    return (
        <Container>
            <span>{title}</span>
            <label htmlFor="dish_image" className="upload-label">
                {Icon && <Icon className="upload-icon" />}
                {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="preview-img" />
                ) : (
                    <div className="placeholder">
                        <span>{buttonLabel}</span>
                    </div>
                )}
                <input id="dish_image" type="file" onChange={handleChange} style={{ display: 'none' }} />
            </label>
            {imageName && imageName !== title && <span className="image-name">{imageName}</span>}
        </Container>
    );
}
