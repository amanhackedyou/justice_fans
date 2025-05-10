"use client";

import { createContext, useContext, useState, ReactNode, useEffect, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuFullscreen } from "react-icons/lu";

interface FullScreenMediaContextType {
    showMedia: (src: string, mediaType: "photo" | "video") => void;
}

const FullScreenMediaContext = createContext<FullScreenMediaContextType | null>(null);

export const FullScreenMediaProvider = ({ children }: { children: ReactNode }) => {
    const [isShowing, setIsShowing] = useState(false);
    const [src, setSrc] = useState("");
    const [mediaType, setMediaType] = useState("");

    const showMedia = (src: string, mediaType: "photo" | "video") => {
        setSrc(src);
        setMediaType(mediaType);
        setIsShowing(true);
    }

    const closeMedia = () => {
        setIsShowing(false);
        setSrc("");
        setMediaType("");
    }

    return <FullScreenMediaContext.Provider value={{ showMedia }}>
        {children}

        {isShowing && <section onClick={e => {
            // @ts-ignore
            if (e.target.tagName === "SECTION") {
                closeMedia();
            }
        }} className={`flex items-center md:justify-center w-full h-full fixed bg-black/30 backdrop-blur z-20`}>
            <button onClick={e => closeMedia()} className="text-3xl text-white absolute top-4 right-4 z-30"><IoClose /></button>
            <div className={`w-full ${mediaType === "video" ? "md:w-[30%]" : `md:w-1/2 md:h-full md:py-2`}  max-h-[90vh]- max-h-full overflow-hidden relative`}>
                {mediaType == "photo" && <img onLoad={e => {
                    // console.log(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight);
                    // console.log(((e.currentTarget.naturalWidth / e.currentTarget.naturalHeight) * 100) / 2);
                    // setWapperWidth(((e.currentTarget.naturalWidth / e.currentTarget.naturalHeight) * 100) / 2);

                }} className="h-full- w-auto max-h-full object-center- mx-auto object-cover-" src={src} alt="Full screen media" />}
                {mediaType == "video" && <VideoView src={src} />}
            </div>
        </section>}
    </FullScreenMediaContext.Provider>
};

// const VideoView = ({ src }: { src: string }) => {
//     return <>
//         <video className="w-full max-h-full object-center object-cover" src={src}></video>
//         <div className="absolute top-0 left-0 w-full h-full bg-black/50">

//         </div>
//     </>
// }



const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

export const VideoView = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [showControls, setShowControls] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateTime = () => {
            setCurrentTime(video.currentTime);
            setProgress((video.currentTime / video.duration) * 100);
        };

        video.addEventListener("timeupdate", updateTime);
        video.addEventListener("loadedmetadata", () => {
            setDuration(video.duration);
        });

        return () => {
            video.removeEventListener("timeupdate", updateTime);
        };
    }, []);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current;
        const value = parseFloat(e.target.value);
        if (video && duration) {
            video.currentTime = (value / 100) * duration;
        }
    };

    const toggleFullScreen = () => {
        const video = videoRef.current;
        if (!video) return;

        if (!isFullScreen) {
            video.requestFullscreen?.();
        } else {
            document.exitFullscreen?.();
        }
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div
            className="relative w-full max-h-full bg-black group"
            onMouseEnter={() => {
                if (showControls) return;
                setShowControls(true);
                setTimeout(() => setShowControls(false), 3000);
            }}

            onMouseLeave={() => {
                setShowControls(false);
            }}
        >
            <video
                ref={videoRef}
                src={src}
                autoPlay
                loop
                onPlay={() => {
                    showControls && setShowControls(false);
                    setIsPlaying(true)
                }}
                onPause={() => setIsPlaying(false)}
                className="max-w-full h-full max-h-full object-cover"
            />

            {/* Overlay for controls */}
            {showControls && (
                <div onClick={e => {
                    // @ts-ignore
                    if (e.target.classList.contains("CAN_HIDE")) {
                        setShowControls(false)
                    }
                }} className="absolute CAN_HIDE inset-0 flex flex-col justify-between bg-black/30 text-white transition-opacity duration-300 px-4 py-3">
                    {/* Top Controls (optional title or overlay) */}
                    <div className="text-sm text-gray-300">Video Player</div>

                    {/* Center Play/Pause */}
                    <div className="flex justify-center items-center">
                        <button
                            onClick={togglePlay}
                            className="text-white text-4xl cursor-pointer"
                        >
                            {/* Add Play / Pause Icon here based on `isPlaying` */}
                            {isPlaying ? <FaPause className="text-5xl" /> : <FaPlay className="text-5xl" />}
                        </button>
                    </div>

                    {/* Bottom Controls */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-white w-[50px]">
                            {formatTime(currentTime)}
                        </span>

                        <input
                            type="range"
                            className="w-full cursor-pointer accent-pink-500 transition-all duration-200"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={handleSeek}
                        />

                        <span className="text-sm text-white w-[50px] text-right">
                            {formatTime(duration)}
                        </span>

                        <button onClick={toggleFullScreen} className="ml-2 cursor-pointer text-white">
                            {/* Add Fullscreen Icon here */}
                            {/* Example: Lucide Maximize / Minimize icon */}
                            <LuFullscreen />

                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export const useFullScreenMediaContext = () => {
    return useContext(FullScreenMediaContext);
};
