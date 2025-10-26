import { ChangeEvent, useRef, useState } from "react";

export const useFileInput = (maxSize: number) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const selectedFile = e.target.files[0];

      if (selectedFile.size > maxSize) {
        return;
      }
      if (previewUrl) URL.revokeObjectURL(previewUrl);

      setFile(selectedFile);
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
      
      // Extract duration for video files
      if (selectedFile.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onloadedmetadata = () => {
          // Only set duration if it's a valid finite number
          if (isFinite(video.duration) && video.duration > 0) {
            setDuration(Math.round(video.duration)); // Round to nearest integer
          } else {
            setDuration(null); // Set to null if invalid
          }
          URL.revokeObjectURL(video.src);
        };
        video.src = objectUrl;
      }
    }
  };

  const resetFile = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setFile(null);
    setPreviewUrl(null);
    setDuration(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return { file, previewUrl, duration, inputRef, handleFileChange, resetFile };
};
