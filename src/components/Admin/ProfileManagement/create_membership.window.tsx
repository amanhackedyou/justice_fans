// import React, { useState } from 'react';
// import { FiX } from 'react-icons/fi';
// import FixedWindow from '@/components/Admin/ui/FixedWindow';

// const CreatePremiumMembership = ({ onClose }: { onClose: () => void }) => {
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [originalPrice, setOriginalPrice] = useState('');
//     const [actualPrice, setActualPrice] = useState('');
//     const [coverImage, setCoverImage] = useState<File | null>(null);
//     const [coverPreview, setCoverPreview] = useState<string | null>(null);
//     const [proofFiles, setProofFiles] = useState<File[]>([]);
//     const [proofPreviews, setProofPreviews] = useState<string[]>([]);
//     const [comingSoon, setComingSoon] = useState(false);
//     const [errors, setErrors] = useState<{ [key: string]: string }>({});

//     const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file) {
//             setCoverImage(file);
//             setCoverPreview(URL.createObjectURL(file));
//         }
//     };

//     const handleProofFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const files = Array.from(e.target.files || []);
//         setProofFiles([...proofFiles, ...files]);
//         setProofPreviews([...proofPreviews, ...files.map(file => URL.createObjectURL(file))]);
//     };

//     const removeProof = (index: number) => {
//         const updatedFiles = proofFiles.filter((_, i) => i !== index);
//         const updatedPreviews = proofPreviews.filter((_, i) => i !== index);
//         setProofFiles(updatedFiles);
//         setProofPreviews(updatedPreviews);
//     };

//     // const isVideo = (url: string) => /\.(mp4|webm|ogg)$/i.test(url) ;
//     // const isVideo = (url: string) => url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg");
//     const isVideoFile = (file: File) => file.type.startsWith('video/');


//     const discount = (!isNaN(+originalPrice) && !isNaN(+actualPrice))
//         ? Math.max(0, +originalPrice - +actualPrice)
//         : 0;

//     const validateForm = () => {
//         const newErrors: { [key: string]: string } = {};
//         if (!name.trim()) newErrors.name = 'Package name is required';
//         if (!description.trim()) newErrors.description = 'Description is required';
//         if (!originalPrice) newErrors.originalPrice = 'Original price is required';
//         if (!actualPrice) newErrors.actualPrice = 'Actual price is required';
//         if (!coverImage) newErrors.coverImage = 'Cover image is required';
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = () => {
//         if (!validateForm()) return;

//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('description', description);
//         formData.append('originalPrice', originalPrice);
//         formData.append('actualPrice', actualPrice);
//         formData.append('comingSoon', String(comingSoon));
//         if (coverImage) formData.append('coverImage', coverImage);
//         proofFiles.forEach(file => formData.append('proofs', file));

//         console.log("Form ready to submit:", { name, description, originalPrice, actualPrice, coverImage, proofFiles });

//         // Reset or close after submission
//         onClose();
//     };

//     return (
//         <FixedWindow onClose={onClose} title="Create Membership">
//             <div className="space-y-4">
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Package Name</label>
//                     <input
//                         type="text"
//                         placeholder="e.g., VIP Fan Club"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className={`mt-1 w-full outline-none rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} px-4 py-2 shadow-sm focus:ring-2 focus:ring-pink-500`}
//                     />
//                     {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Description</label>
//                     <textarea
//                         rows={4}
//                         placeholder="Brief details about this membership..."
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         className={`mt-1 w-full outline-none rounded-lg border ${errors.description ? 'border-red-500' : 'border-gray-300'} px-4 py-2 resize-none shadow-sm focus:ring-2 focus:ring-pink-500`}
//                     />
//                     {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Original Price (₹)</label>
//                         <input
//                             type="number"
//                             placeholder="e.g., 499"
//                             value={originalPrice}
//                             onChange={(e) => setOriginalPrice(e.target.value)}
//                             className={`mt-1 w-full outline-none rounded-lg border ${errors.originalPrice ? 'border-red-500' : 'border-gray-300'} px-4 py-2 shadow-sm focus:ring-2 focus:ring-pink-500`}
//                         />
//                         {errors.originalPrice && <p className="text-sm text-red-500 mt-1">{errors.originalPrice}</p>}
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Actual Price (₹)</label>
//                         <input
//                             type="number"
//                             placeholder="e.g., 299"
//                             value={actualPrice}
//                             onChange={(e) => setActualPrice(e.target.value)}
//                             className={`mt-1 w-full outline-none rounded-lg border ${errors.actualPrice ? 'border-red-500' : 'border-gray-300'} px-4 py-2 shadow-sm focus:ring-2 focus:ring-pink-500`}
//                         />
//                         {errors.actualPrice && <p className="text-sm text-red-500 mt-1">{errors.actualPrice}</p>}
//                     </div>
//                 </div>

//                 {(originalPrice && actualPrice) && (
//                     <p className="text-sm text-gray-600">
//                         You are giving a discount of <span className="font-semibold text-pink-600">₹{discount}</span>
//                     </p>
//                 )}

//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Cover Image</label>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleCoverChange}
//                         className="mt-1 w-full text-sm text-gray-500 cursor-pointer file:mr-4 file:rounded-lg file:border-0 file:bg-pink-50 file:px-4 file:py-2 file:font-semibold file:text-pink-600 hover:file:bg-pink-100"
//                     />
//                     {errors.coverImage && <p className="text-sm text-red-500 mt-1">{errors.coverImage}</p>}
//                     {coverPreview && (
//                         <div className="mt-2 w-full aspect-video rounded-lg overflow-hidden border">
//                             <img src={coverPreview} alt="Cover Preview" className="object-cover w-full h-full" />
//                         </div>
//                     )}
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Exclusive Content (Proofs)</label>
//                     <input
//                         type="file"
//                         accept="image/*,video/*"
//                         multiple
//                         onChange={handleProofFilesChange}
//                         className="mt-1 w-full text-sm text-gray-500 file:mr-4 cursor-pointer file:rounded-lg file:border-0 file:bg-pink-50 file:px-4 file:py-2 file:font-semibold file:text-pink-600 hover:file:bg-pink-100"
//                     />
//                     {/* {proofPreviews.length > 0 && (
//                         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
//                             {proofPreviews.map((src, i) => (
//                                 <div key={i} className="relative aspect-video overflow-hidden rounded-lg border">
//                                     {isVideo(src) ? (
//                                         <video
//                                             src={src}
//                                             controls
//                                             className="w-full h-full object-cover"
//                                             preload="metadata"
//                                         >
//                                             Your browser does not support the video tag.
//                                         </video>
//                                     ) : (
//                                         <img
//                                             src={src}
//                                             className="w-full h-full object-cover"
//                                             alt={`Proof ${i + 1}`}
//                                         />
//                                     )}
//                                     <button
//                                         onClick={() => removeProof(i)}
//                                         className="absolute top-1 right-1 p-1 bg-white bg-opacity-80 rounded-full shadow hover:bg-opacity-100"
//                                     >
//                                         <FiX size={16} className="text-red-500" />
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     )} */}

//                     {proofPreviews.length > 0 && <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
//                         {
//                             proofFiles.map((file, i) => (
//                                 <div key={i} className="relative aspect-video overflow-hidden rounded-lg border">
//                                     {isVideoFile(file) ? (
//                                         <video src={proofPreviews[i]} controls className="w-full h-full object-cover" />
//                                     ) : (
//                                         <img src={proofPreviews[i]} className="w-full h-full object-cover" />
//                                     )}
//                                     <button
//                                         onClick={() => removeProof(i)}
//                                         className="absolute top-1 right-1 p-1 bg-white bg-opacity-80 rounded-full shadow hover:bg-opacity-100"
//                                     >
//                                         <FiX size={16} className="text-red-500" />
//                                     </button>
//                                 </div>
//                             ))
//                         }
//                     </div>}



//                 </div>

//                 <div className="flex items-center gap-2">
//                     <input
//                         id="comingSoon"
//                         type="checkbox"
//                         checked={comingSoon}
//                         onChange={(e) => setComingSoon(e.target.checked)}
//                         className="h-4 w-4 text-pink-500 focus:ring-pink-400 border-gray-300 rounded"
//                     />
//                     <label htmlFor="comingSoon" className="text-sm text-gray-700">Coming Soon?</label>
//                 </div>

//                 <button
//                     onClick={handleSubmit}
//                     className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium cursor-pointer py-2 px-4 rounded-lg shadow transition-all mt-4"
//                 >
//                     Submit Membership
//                 </button>
//             </div>
//         </FixedWindow>
//     );
// };

// export default CreatePremiumMembership;







import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import FixedWindow from '@/components/Admin/ui/FixedWindow';

const CreateOrUpdateMembership = ({
    onClose,
    membershipData, // prop to pass existing membership data for updating
}: {
    onClose: () => void;
    membershipData?: {
        id: string;
        name: string;
        description: string;
        originalPrice: string;
        actualPrice: string;
        coverImage: string;
        proofFiles: string[];
        comingSoon: boolean;
    };
}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [actualPrice, setActualPrice] = useState('');
    const [coverImage, setCoverImage] = useState<File | null>(null);
    const [coverPreview, setCoverPreview] = useState<string | null>(null);
    const [proofFiles, setProofFiles] = useState<(File | string)[]>([]);
    const [proofPreviews, setProofPreviews] = useState<string[]>([]);
    const [comingSoon, setComingSoon] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (membershipData) {
            setName(membershipData.name);
            setDescription(membershipData.description);
            setOriginalPrice(membershipData.originalPrice);
            setActualPrice(membershipData.actualPrice);
            setCoverPreview(membershipData.coverImage);
            setProofFiles(membershipData.proofFiles);
            setProofPreviews(membershipData.proofFiles);
            setComingSoon(membershipData.comingSoon);
        }
        return () => {
            proofPreviews.forEach(preview => URL.revokeObjectURL(preview));
            if (coverPreview?.startsWith('blob:')) URL.revokeObjectURL(coverPreview);
        };
    }, [membershipData]);

    const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setCoverImage(file);
            const previewUrl = URL.createObjectURL(file);
            setCoverPreview(previewUrl);
        }
    };

    const handleProofFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = Array.from(e.target.files || []);
        const newPreviews = newFiles.map(file => URL.createObjectURL(file));

        setProofFiles(prev => [...prev, ...newFiles]);
        setProofPreviews(prev => [...prev, ...newPreviews]);
    };

    const removeProof = (index: number) => {
        const updatedFiles = proofFiles.filter((_, i) => i !== index);
        const updatedPreviews = proofPreviews.filter((_, i) => i !== index);
        setProofFiles(updatedFiles);
        setProofPreviews(updatedPreviews);
    };

    const isVideoFile = (item: File | string) => {
        if (typeof item === 'string') {
            return item.match(/\.(mp4|webm|ogg)$/i);
        }
        return item.type.startsWith('video/');
    };

    const discount = (!isNaN(+originalPrice) && !isNaN(+actualPrice))
        ? Math.max(0, +originalPrice - +actualPrice)
        : 0;

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!name.trim()) newErrors.name = 'Package name is required';
        if (!description.trim()) newErrors.description = 'Description is required';
        if (!originalPrice) newErrors.originalPrice = 'Original price is required';
        if (!actualPrice) newErrors.actualPrice = 'Actual price is required';
        if (!coverImage && !coverPreview) newErrors.coverImage = 'Cover image is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('originalPrice', originalPrice);
        formData.append('actualPrice', actualPrice);
        formData.append('comingSoon', String(comingSoon));

        if (coverImage) {
            formData.append('coverImage', coverImage);
        }

        proofFiles.forEach((file) => {
            if (typeof file !== 'string') {
                formData.append('proofs', file);
            }
        });

        if (membershipData) {
            formData.append('id', membershipData.id);
            console.log("Updating membership:", { ...membershipData, formData });
        } else {
            console.log("Creating new membership");
        }

        onClose();
    };

    return (
        <FixedWindow onClose={onClose} title={membershipData ? "Update Membership" : "Create Membership"}>
            <div className="space-y-4">
                {/* Form Fields (same as before) */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Package Name</label>
                    <input
                        type="text"
                        placeholder="e.g., VIP Fan Club"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`mt-1 w-full outline-none rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} px-4 py-2 shadow-sm focus:ring-2 focus:ring-pink-500`}
                    />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        rows={4}
                        placeholder="Brief details about this membership..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={`mt-1 w-full outline-none rounded-lg border ${errors.description ? 'border-red-500' : 'border-gray-300'} px-4 py-2 resize-none shadow-sm focus:ring-2 focus:ring-pink-500`}
                    />
                    {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Original Price (₹)</label>
                        <input
                            type="number"
                            placeholder="e.g., 499"
                            value={originalPrice}
                            onChange={(e) => setOriginalPrice(e.target.value)}
                            className={`mt-1 w-full outline-none rounded-lg border ${errors.originalPrice ? 'border-red-500' : 'border-gray-300'} px-4 py-2 shadow-sm focus:ring-2 focus:ring-pink-500`}
                        />
                        {errors.originalPrice && <p className="text-sm text-red-500 mt-1">{errors.originalPrice}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Actual Price (₹)</label>
                        <input
                            type="number"
                            placeholder="e.g., 299"
                            value={actualPrice}
                            onChange={(e) => setActualPrice(e.target.value)}
                            className={`mt-1 w-full outline-none rounded-lg border ${errors.actualPrice ? 'border-red-500' : 'border-gray-300'} px-4 py-2 shadow-sm focus:ring-2 focus:ring-pink-500`}
                        />
                        {errors.actualPrice && <p className="text-sm text-red-500 mt-1">{errors.actualPrice}</p>}
                    </div>
                </div>

                {(originalPrice && actualPrice) && (
                    <p className="text-sm text-gray-600">
                        You are giving a discount of <span className="font-semibold text-pink-600">₹{discount}</span>
                    </p>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700">Cover Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleCoverChange}
                        className="mt-1 w-full text-sm text-gray-500 cursor-pointer file:mr-4 file:rounded-lg file:border-0 file:bg-pink-50 file:px-4 file:py-2 file:font-semibold file:text-pink-600 hover:file:bg-pink-100"
                    />
                    {errors.coverImage && <p className="text-sm text-red-500 mt-1">{errors.coverImage}</p>}
                    {coverPreview && (
                        <div className="mt-2 w-full aspect-video rounded-lg overflow-hidden border">
                            <img src={coverPreview} alt="Cover Preview" className="object-cover w-full h-full" />
                        </div>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Exclusive Content (Proofs)</label>
                    <input
                        type="file"
                        accept="image/*,video/*"
                        multiple
                        onChange={handleProofFilesChange}
                        className="mt-1 w-full text-sm text-gray-500 file:mr-4 cursor-pointer file:rounded-lg file:border-0 file:bg-pink-50 file:px-4 file:py-2 file:font-semibold file:text-pink-600 hover:file:bg-pink-100"
                    />

                    {/* {proofPreviews.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                            {proofFiles.map((file, i) => (
                                <div key={i} className="relative aspect-video overflow-hidden rounded-lg border">
                                    {isVideoFile(file) ? (
                                        <video src={proofPreviews[i]} controls className="w-full h-full object-cover" />
                                    ) : (
                                        <img src={proofPreviews[i]} className="w-full h-full object-cover" />
                                    )}
                                    <button
                                        onClick={() => removeProof(i)}
                                        className="absolute top-1 right-1 p-1 bg-white bg-opacity-80 rounded-full shadow hover:bg-opacity-100"
                                    >
                                        <FiX size={16} className="text-red-500" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )} */}


                    {proofPreviews.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                            {proofPreviews.map((preview, i) => (
                                <div key={i} className="relative aspect-video overflow-hidden rounded-lg border">
                                    {isVideoFile(proofFiles[i]) ? (
                                        <video src={preview} controls className="w-full h-full object-cover" />
                                    ) : (
                                        <img src={preview} className="w-full h-full object-cover" />
                                    )}
                                    <button
                                        onClick={() => removeProof(i)}
                                        className="absolute top-1 right-1 p-1 bg-white bg-opacity-80 rounded-full shadow hover:bg-opacity-100"
                                    >
                                        <FiX size={16} className="text-red-500" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    <input
                        id="comingSoon"
                        type="checkbox"
                        checked={comingSoon}
                        onChange={(e) => setComingSoon(e.target.checked)}
                        className="h-4 w-4 text-pink-500 focus:ring-pink-400 border-gray-300 rounded"
                    />
                    <label htmlFor="comingSoon" className="text-sm text-gray-700">Coming Soon?</label>
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium cursor-pointer py-2 px-4 rounded-lg shadow transition-all mt-4"
                >
                    {membershipData ? "Update Membership" : "Submit Membership"}
                </button>
            </div>
        </FixedWindow>
    );
};

export default CreateOrUpdateMembership;
