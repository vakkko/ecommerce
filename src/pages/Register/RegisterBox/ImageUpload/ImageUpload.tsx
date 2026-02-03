import { useEffect, useState } from "react";

import type { ImageUploadProps } from "./imageUpload.types";

import {
  ImageUploadContainer,
  Circle,
  Avatar,
  UploadText,
} from "./imageUpload.styled";

export default function ImageUpload({ setAvatar }: ImageUploadProps) {
  const [preview, setPreview] = useState<string>("");

  const handleRemoveClick = () => {
    setPreview("");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file?.type.startsWith("image/")) return;
    if (file) {
      setAvatar(file);

      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

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
          <input accept="image/*" onChange={handleFileChange} type="file" />
        </label>
        {preview && <button onClick={handleRemoveClick}>Remove</button>}
      </UploadText>
    </ImageUploadContainer>
  );
}
