"use client";

import React from "react";
import { Image, NoteMessage } from "@/components/UI";
import { HiPlus } from "react-icons/hi2";
import useLangs from "@/hooks/useLangs";

export interface UploadSingleProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  onChange?: (file: File | null) => void;
}

const ACCEPT_FILE_TYPES = ["image/png", "image/jpg", "image/jpeg"];

const FILE_SIZE = 1024 * 1024 * 2;

const UploadSingle: React.FC<UploadSingleProps> = ({ rootClassName = "", style, onChange }) => {
  const { langs } = useLangs();

  const [preview, setPreview] = React.useState<string>("");

  const [file, setFile] = React.useState<File | null>(null);

  const [error, setError] = React.useState<boolean>(false);

  const [dragged, setDragged] = React.useState<boolean>(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const draggedClassName = dragged ? "single-group-dragged" : "";

  const errorClassName = error ? "single-group-error" : "";

  React.useEffect(() => {
    if (!file) return;
    onChange?.(file);
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
    setError(false);
  }, [file]);

  const handleUpload = (file: File) => {
    if (!ACCEPT_FILE_TYPES.includes(file.type)) return setError(true);
    if (file.size > FILE_SIZE) return setError(true);
    setFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const fileUploaded: File = e.target.files[0];
    handleUpload(fileUploaded);
  };

  const handleDrag = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragged(true);
    else if (e.type === "dragleave") setDragged(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragged(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const fileUploaded: File = e.dataTransfer.files[0];
      handleUpload(fileUploaded);
    }
  };

  const handleRemove = () => {
    setPreview("");
    setFile(null);
    if (file && inputRef.current && inputRef.current.files) {
      const fileTransfer = new DataTransfer();
      const uploadedFiles: File[] = Array.from(inputRef.current.files);
      const filterFiles: File[] = uploadedFiles.filter((uploadedFile) => uploadedFile.name !== file.name);
      filterFiles.forEach((file) => {
        const remainFile = new File([file.name], file.name);
        fileTransfer.items.add(remainFile);
      });
      inputRef.current.files = fileTransfer.files;
    }
  };

  return (
    <div className={`upload-single ${rootClassName}`}>
      {!preview ? (
        <label
          className={`single-group ${draggedClassName} ${errorClassName}`}
          style={style}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            className="group-control"
            ref={inputRef}
            accept={ACCEPT_FILE_TYPES.join(",")}
            onChange={handleChange}
          />

          <div className="group-view">
            <HiPlus size={30} />
          </div>
        </label>
      ) : (
        <Image hasRemove src={preview} alt="preview" onRemove={handleRemove} />
      )}

      {error && <NoteMessage type="error" message={langs?.common.message.error.upload} />}
    </div>
  );
};

export default UploadSingle;
