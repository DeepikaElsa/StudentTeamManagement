import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

interface FileUploadProps {
  label: string;
  name: string;
  onChange: (file: File | null) => void;
  required?: boolean;
  error?: string;
  className?: string;
  accept?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  name,
  onChange,
  required = false,
  error,
  className = '',
  accept = 'image/*',
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      setFileName(file.name);
      onChange(file);
      
      // Create a preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
      }
    } else {
      setFileName('');
      setPreview(null);
      onChange(null);
    }
  };

  const clearFile = () => {
    setFileName('');
    setPreview(null);
    onChange(null);
  };

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${
        error ? 'border-red-300' : 'border-gray-300'
      } border-dashed rounded-md`}>
        <div className="space-y-1 text-center">
          {preview ? (
            <div className="relative">
              <img 
                src={preview} 
                alt="Preview" 
                className="mx-auto h-32 w-32 object-cover rounded-md" 
              />
              <button 
                type="button" 
                onClick={clearFile}
                className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
          )}
          
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor={name}
              className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
            >
              <span>Upload a file</span>
              <input
                id={name}
                name={name}
                type="file"
                accept={accept}
                onChange={handleFileChange}
                className="sr-only"
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          
          <p className="text-xs text-gray-500">
            {fileName || 'PNG, JPG, GIF up to 10MB'}
          </p>
        </div>
      </div>
      
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FileUpload;