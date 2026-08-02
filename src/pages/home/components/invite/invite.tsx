import { useEffect, useRef, useState } from 'react';
import { InviteVideo } from '../../../../assets';
import { useInviteStore } from '../../../../store/useInvite';

const Invite = () => {
  const { audioRef, setShowInviteScreem } = useInviteStore();

  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video
        .play()
        .then(() => {
          video.pause();
          video.currentTime = 0;
        })
        .catch(() => {});
    }
  }, []);

  const handleStart = () => {
    if (started) return;
    setStarted(true);
    videoRef.current?.play().catch(() => {});
    audioRef.current?.play().catch(() => {});
  };

  const handleVideoEnded = () => {
    setShowInviteScreem(false);
  };

  return (
    <div className='fixed inset-0 z-50 w-screen h-screen bg-black' onClick={handleStart}>
      <video
        ref={videoRef}
        src={InviteVideo}
        muted
        playsInline
        preload='auto'
        onEnded={handleVideoEnded}
        className='absolute inset-0 w-full h-full object-cover'
      ></video>
    </div>
  );
};

export { Invite };
