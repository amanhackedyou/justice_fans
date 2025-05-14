"use client"

import React, { useState } from 'react'
import Button from '../Button';
import { IoAddSharp } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';
import UploaderProfileCard from '../UploaderProfileCard';
import FixedWindow from '../ui/FixedWindow';

const ProfilePage = () => {
    const [isAddProfileWindowShowing, setIsAddProfileWindowShowing] = useState(false);
    const [profileUpdateId, setProfileUpdateId] = useState('');

    return (
        <>
            {isAddProfileWindowShowing && <AddProfileWindow isCreateNew onClose={() => setIsAddProfileWindowShowing(false)} />}
            {profileUpdateId.length !== 0 && <UpdateProfileWindow
                onClose={() => setProfileUpdateId('')}
                initialData={{
                    name: "Aanya Advani",
                    username: "aanya_advani",
                    profilePictureUrl: "https://lh3.googleusercontent.com/rL6TKaC9rRwjeHTc8zQ4Cqzj5pjMGgN6fR964Qp6WZ10jpSnp39kkfG-EDLmcYuWyRdvh7sk3kioc-STvXNPZ98d-WwEWNRM=s200-c",
                    coverPhotoUrl: "/images/dev/header_image1.jpg",


                    membershipsDescription: "Get access to my PRIVATE and EXCLUSIVE Videos and Pictures here 😉",
                    membershipDisplayPictureUrl: "https://lh3.googleusercontent.com/rL6TKaC9rRwjeHTc8zQ4Cqzj5pjMGgN6fR964Qp6WZ10jpSnp39kkfG-EDLmcYuWyRdvh7sk3kioc-STvXNPZ98d-WwEWNRM=s200-c"
                }}
                onUpdate={(formData) => {
                    // send formData to backend
                    console.log("Update FormData", formData);
                }}
            />
            }
            <div className='w-full h-full flex flex-col gap-2 md:w-[60%]'>
                <div className='flex items-center justify-between'>
                    <p className='text-xl font-medium text-gray-500'>Profiles</p>
                    <Button onClick={() => setIsAddProfileWindowShowing(true)} text='Add' icon={<IoMdAdd />} />
                </div>

                <div className='flex flex-col gap-4'>
                    <UploaderProfileCard
                        profile={{
                            id: 'uploader001',
                            name: 'Lisa Manoban',
                            avatarUrl: 'https://lh3.googleusercontent.com/rL6TKaC9rRwjeHTc8zQ4Cqzj5pjMGgN6fR964Qp6WZ10jpSnp39kkfG-EDLmcYuWyRdvh7sk3kioc-STvXNPZ98d-WwEWNRM=s200-c',
                            photosCount: 128,
                            videosCount: 36,
                        }}
                        onEdit={(id) => console.log('Editing:', id)}
                        onDelete={(id) => console.log('Deleting:', id)}
                    />

                    <UploaderProfileCard
                        profile={{
                            id: 'uploader001',
                            name: 'Aanya Advani',
                            avatarUrl: 'https://lh3.googleusercontent.com/46LyP2SS2-U0An8JltolBUIjD-M7q5GSArHnh2Y3VGCqbMsbkpkQOWvC5vhXklXoCNerjFyHzYZzaxEHPoG3SrXOC36-91KD=s200-c',
                            photosCount: 362,
                            videosCount: 287,
                        }}
                        onEdit={(id) => setProfileUpdateId('sfnjsfn')}
                        onDelete={(id) => console.log('Deleting:', id)}
                    />
                    <UploaderProfileCard
                        profile={{
                            id: 'uploader001',
                            name: 'MS Sethi',
                            avatarUrl: 'https://s.yimg.com/ny/api/res/1.2/3GECIxuq370nD2S43w8c0A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ5Nw--/https://media.zenfs.com/en/mmail.com.my/76f8ff3f350f003c2f2feaab8df90c63',
                            photosCount: 1278,
                            videosCount: 634,
                        }}
                        onEdit={(id) => console.log('Editing:', id)}
                        onDelete={(id) => console.log('Deleting:', id)}
                    />


                </div>
            </div>
        </>
    )
}

const AddProfileWindow = ({ isCreateNew, onClose }: { isCreateNew: boolean, onClose: () => void }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [membershipDescription, setMembershipDescription] = useState('Get access to my PRIVATE and EXCLUSIVE Videos and Pictures here 😉');
    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
    const [membershipDisplayPicture, setMembershipDisplayPicture] = useState<File | null>(null);

    const [profilePreview, setProfilePreview] = useState<string | null>(null);
    const [coverPreview, setCoverPreview] = useState<string | null>(null);
    const [membershipPreview, setMembershipPreview] = useState<string | null>(null);

    const isFormValid = name && username && profilePicture && coverPhoto;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('username', username);
        formData.append('membershipDescription', membershipDescription);
        if (profilePicture) formData.append('profilePicture', profilePicture);
        if (coverPhoto) formData.append('coverPhoto', coverPhoto);
        if (membershipDisplayPicture) formData.append('membershipDisplayPicture', membershipDisplayPicture);

        // onSubmit(formData);

        setName('');
        setUsername('');
        setMembershipDescription('');
        setProfilePicture(null);
        setCoverPhoto(null);
        setMembershipDisplayPicture(null);
        setProfilePreview(null);
        setCoverPreview(null);
        setMembershipPreview(null);
    };

    const handleFileChange = (file: File | null, type: 'profile' | 'cover' | 'membership') => {
        if (!file) return;

        const previewUrl = URL.createObjectURL(file);
        switch (type) {
            case 'profile':
                setProfilePicture(file);
                setProfilePreview(previewUrl);
                break;
            case 'cover':
                setCoverPhoto(file);
                setCoverPreview(previewUrl);
                break;
            case 'membership':
                setMembershipDisplayPicture(file);
                setMembershipPreview(previewUrl);
                break;
        }
    };

    return (
        <FixedWindow title={isCreateNew ? "Add Profile" : "Update Profile"} onClose={onClose}>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl p-6 shadow-lg space-y-5"
            >
                <h2 className="text-xl font-semibold text-gray-800">Add New Uploader Profile</h2>

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
                    />
                </div>

                {/* Username */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
                    />
                </div>

                {/* Memberships Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Memberships Description</label>
                    <textarea
                        value={membershipDescription}
                        onChange={e => setMembershipDescription(e.target.value)}
                        placeholder="Describe the membership perks, benefits, etc..."
                        className="w-full border border-gray-300 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
                        rows={3}
                    />
                </div>

                {/* Profile Picture Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={e => handleFileChange(e.target.files?.[0] || null, 'profile')}
                        className="mt-2 w-full border border-dashed border-gray-300 rounded-xl p-3 text-sm cursor-pointer bg-gray-50 hover:border-pink-500"
                    />
                    {profilePreview && (
                        <img src={profilePreview} alt="Profile Preview" className="mt-3 rounded-xl h-28 object-cover" />
                    )}
                </div>

                {/* Cover Photo Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Cover Photo</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={e => handleFileChange(e.target.files?.[0] || null, 'cover')}
                        className="mt-2 w-full border border-dashed border-gray-300 rounded-xl p-3 text-sm cursor-pointer bg-gray-50 hover:border-pink-500"
                    />
                    {coverPreview && (
                        <img src={coverPreview} alt="Cover Preview" className="mt-3 rounded-xl h-28 object-cover" />
                    )}
                </div>

                {/* Membership Display Picture Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Membership Display Picture</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={e => handleFileChange(e.target.files?.[0] || null, 'membership')}
                        className="mt-2 w-full border border-dashed border-gray-300 rounded-xl p-3 text-sm cursor-pointer bg-gray-50 hover:border-pink-500"
                    />
                    {membershipPreview && (
                        <img src={membershipPreview} alt="Membership Preview" className="mt-3 rounded-xl h-28 object-cover" />
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full py-2 rounded-xl text-white font-medium transition ${isFormValid ? 'bg-pink-600 hover:bg-pink-700' : 'bg-gray-300 cursor-not-allowed'
                        }`}
                >
                    {isCreateNew ? 'Create Profile' : 'Update Profile'}
                </button>
            </form>
        </FixedWindow>
    );
};

interface UpdateProfileWindowProps {
    isCreateNew?: false;
    onClose: () => void;
    initialData: {
        name: string;
        username: string;
        profilePictureUrl: string;
        coverPhotoUrl: string;
        membershipsDescription: string;
        membershipDisplayPictureUrl: string;
    };
    onUpdate: (formData: FormData) => void;
}

const UpdateProfileWindow: React.FC<UpdateProfileWindowProps> = ({ onClose, initialData, onUpdate }) => {
    const [name, setName] = useState(initialData.name);
    const [username, setUsername] = useState(initialData.username);
    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
    const [membershipsDescription, setMembershipsDescription] = useState(initialData.membershipsDescription);
    const [membershipDisplayPicture, setMembershipDisplayPicture] = useState<File | null>(null);

    const [profilePreview, setProfilePreview] = useState<string | null>(initialData.profilePictureUrl);
    const [coverPreview, setCoverPreview] = useState<string | null>(initialData.coverPhotoUrl);
    const [membershipDisplayPicturePreview, setMembershipDisplayPicturePreview] = useState<string | null>(initialData.membershipDisplayPictureUrl);

    const isFormValid = name && username && membershipsDescription;

    const handleFileChange = (file: File | null, type: 'profile' | 'cover' | 'membership') => {
        if (file) {
            const preview = URL.createObjectURL(file);
            if (type === 'profile') setProfilePreview(preview);
            else if (type === 'cover') setCoverPreview(preview);
            else if (type === 'membership') setMembershipDisplayPicturePreview(preview);
        }
        if (type === 'profile') setProfilePicture(file);
        else if (type === 'cover') setCoverPhoto(file);
        else if (type === 'membership') setMembershipDisplayPicture(file);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('username', username);
        formData.append('membershipsDescription', membershipsDescription);
        if (profilePicture) formData.append('profilePicture', profilePicture);
        if (coverPhoto) formData.append('coverPhoto', coverPhoto);
        if (membershipDisplayPicture) formData.append('membershipDisplayPicture', membershipDisplayPicture);

        onUpdate(formData);
    };

    return (
        <FixedWindow title="Update Profile" onClose={onClose}>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl p-6 shadow-lg space-y-5"
            >
                <h2 className="text-xl font-semibold text-gray-800">Update Uploader Profile</h2>

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
                    />
                </div>

                {/* Username */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
                    />
                </div>

                {/* Memberships Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Memberships Description</label>
                    <textarea
                        value={membershipsDescription}
                        onChange={e => setMembershipsDescription(e.target.value)}
                        required
                        rows={3}
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
                    />
                </div>

                {/* Profile Picture Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={e => handleFileChange(e.target.files?.[0] || null, 'profile')}
                        className="mt-2 w-full border border-dashed border-gray-300 rounded-xl p-3 text-sm cursor-pointer bg-gray-50 hover:border-pink-500"
                    />
                    {profilePreview && (
                        <img src={profilePreview} alt="Profile Preview" className="mt-3 rounded-xl h-28 object-cover" />
                    )}
                </div>

                {/* Cover Photo Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Cover Photo</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={e => handleFileChange(e.target.files?.[0] || null, 'cover')}
                        className="mt-2 w-full border border-dashed border-gray-300 rounded-xl p-3 text-sm cursor-pointer bg-gray-50 hover:border-pink-500"
                    />
                    {coverPreview && (
                        <img src={coverPreview} alt="Cover Preview" className="mt-3 rounded-xl h-28 object-cover" />
                    )}
                </div>

                {/* Membership Display Picture Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Membership Display Picture</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={e => handleFileChange(e.target.files?.[0] || null, 'membership')}
                        className="mt-2 w-full border border-dashed border-gray-300 rounded-xl p-3 text-sm cursor-pointer bg-gray-50 hover:border-pink-500"
                    />
                    {membershipDisplayPicturePreview && (
                        <img src={membershipDisplayPicturePreview} alt="Membership Display Preview" className="mt-3 rounded-xl h-28 object-cover" />
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full py-2 rounded-xl text-white font-medium transition ${isFormValid ? 'bg-pink-600 hover:bg-pink-700 cursor-pointer' : 'bg-gray-300 cursor-not-allowed'}`}
                >
                    Save Changes
                </button>
            </form>
        </FixedWindow>
    );
};



export default ProfilePage;