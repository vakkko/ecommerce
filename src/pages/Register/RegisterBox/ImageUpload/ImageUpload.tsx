import { useState } from "react";
import {
  ImageUploadContainer,
  Circle,
  Avatar,
  UploadText,
} from "./imageUpload.styled";
import type { ImageUploadProps } from "./imageUpload.types";

export default function ImageUpload({ setAvatar }: ImageUploadProps) {
  const [preview, setPreview] = useState<string>("");
  const handleRemoveClick = () => {
    setPreview("");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatar(file);

      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  return (
    <ImageUploadContainer>
      <Circle>
        {!preview ? (
          <img src="/images/camera.png" alt="camera" />
        ) : (
          <Avatar src={preview} alt="avatar" />
        )}
      </Circle>
      <UploadText>
        <label>
          Upload {preview ? "new" : "image"}
          <input onChange={handleFileChange} type="file" />
        </label>
        {preview && <button onClick={handleRemoveClick}>Remove</button>}
      </UploadText>
    </ImageUploadContainer>
  );
}
