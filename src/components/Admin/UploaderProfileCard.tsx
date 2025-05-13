import React, { useState } from 'react';
import { FiEdit, FiTrash, FiImage, FiVideo } from 'react-icons/fi';
import FixedWindow from './ui/FixedWindow';

interface UploaderProfile {
    id: string;
    name: string;
    avatarUrl?: string;
    photosCount: number;
    videosCount: number;
}

interface UploaderProfileCardProps {
    profile: UploaderProfile;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const UploaderProfileCard: React.FC<UploaderProfileCardProps> = ({ profile, onEdit, onDelete }) => {
    return (

        <div onClick={e => {
            if (e.currentTarget == e.target) {
                // TODO: Bring to the next page
            }
        }} className="flex items-center cursor-pointer hover:bg-gray-50 justify-between bg-white rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4">
                <img
                    src={profile.avatarUrl || '/default-avatar.png'}
                    alt={profile.name}
                    className="w-14 h-14 rounded-full object-cover border border-pink-500"
                />
                <div>
                    <h3 className="text-lg font-semibold">{profile.name}</h3>
                    <div className="flex gap-4 text-sm text-gray-700 mt-1">
                        <div className="flex items-center gap-1">
                            <FiImage className="text-pink-500 w-4 h-4" />
                            <span className='leading-none text-sm'>{profile.photosCount}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FiVideo className="text-indigo-500 w-4 h-4" />
                            <span className='leading-none text-sm'>{profile.videosCount}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-2">
                <button
                    onClick={() => onEdit(profile.id)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer active:bg-gray-200"
                    title="Edit Profile"
                >
                    <FiEdit className="w-5 h-5 text-blue-600" />
                </button>
                <button
                    onClick={() => onDelete(profile.id)}
                    className="p-2 rounded-lg hover:bg-red-50 transition-colors cursor-pointer active:bg-red-100"
                    title="Delete Profile"
                >
                    <FiTrash className="w-5 h-5 text-red-500" />
                </button>
            </div>
        </div>

    );
};



export default UploaderProfileCard;
