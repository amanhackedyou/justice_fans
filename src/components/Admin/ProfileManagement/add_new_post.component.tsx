import React, { useState } from 'react';
import { FiX, FiUpload } from 'react-icons/fi';
import FixedWindow from '../ui/FixedWindow';

const AddNewPostWindow = ({ onClose }: { onClose: () => void }) => {
    const [caption, setCaption] = useState('');
    const [mediaFiles, setMediaFiles] = useState<File[]>([]);

    const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const filesArray = Array.from(e.target.files);
        setMediaFiles(prev => [...prev, ...filesArray]);
    };

    const removeMedia = (index: number) => {
        setMediaFiles(prev => prev.filter((_, i) => i !== index));
    };

    const getMediaType = (file: File) => {
        return file.type.startsWith('video') ? 'video' : 'image';
    };

    const handleSubmit = () => {
        if (mediaFiles.length === 0) {
            alert('Please upload at least one image or video.');
            return;
        }

        // Submit logic here
        console.log({ caption, mediaFiles });
    };

    const isValid = mediaFiles.length > 0;

    return (
        <FixedWindow onClose={onClose} title='Upload Post'>
            <div className="flex flex-col gap-4 p-6 w-full max-w-2xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-700">Add New Post</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-500">
                        <FiX size={22} />
                    </button>
                </div>

                {/* Caption */}
                <textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Write a caption..."
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
                    rows={3}
                />

                {/* Media Upload */}
                <label className="flex items-center gap-2 text-sm cursor-pointer text-pink-600">
                    <FiUpload /> Upload Images or Videos
                    <input
                        type="file"
                        accept="image/*,video/*"
                        multiple
                        onChange={handleMediaUpload}
                        className="hidden"
                    />
                </label>

                {/* Preview Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto">
                    {mediaFiles.map((file, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden group">
                            {getMediaType(file) === 'image' ? (
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="preview"
                                    className="w-full h-36 object-cover rounded-xl"
                                />
                            ) : (
                                <video
                                    src={URL.createObjectURL(file)}
                                    controls
                                    className="w-full h-36 object-cover rounded-xl"
                                />
                            )}
                            <button
                                onClick={() => removeMedia(index)}
                                className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 hover:bg-red-600"
                            >
                                <FiX size={16} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    disabled={!isValid}
                    className={`py-2 px-4 rounded-lg transition w-full text-center font-semibold ${isValid
                        ? 'bg-pink-500 hover:bg-pink-600 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    Upload Post
                </button>
            </div>
        </FixedWindow>
    );
};

export default AddNewPostWindow;
