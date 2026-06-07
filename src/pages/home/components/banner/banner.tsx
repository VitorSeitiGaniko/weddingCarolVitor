import { useRef, useState } from 'react';
import { BannerVideo, BannerMusic } from '../../../../assets';
import { VolumeUp, VolumeOff } from '@mui/icons-material';

const Banner = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showModal, setShowModal] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const handleAllow = () => {
    audioRef.current?.play().catch(() => {});
    setShowModal(false);
  };

  const handleToggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className='relative min-h-screen flex flex-col items-center justify-center py-8 px-6 overflow-hidden bg-background'>
      <button
        onClick={handleToggleMute}
        className='fixed bottom-6 right-6 z-50 bg-white/80 hover:bg-white rounded-full p-2 shadow-md cursor-pointer'
      >
        {isMuted ? <VolumeOff style={{ color: '#3d4c2f' }} /> : <VolumeUp style={{ color: '#3d4c2f' }} />}
      </button>

      <div className='absolute inset-0 w-full h-full'>
        <audio ref={audioRef} src={BannerMusic} loop preload='auto' />

        {showModal && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
            <div className='bg-white rounded-2xl p-8 text-center shadow-xl'>
              <p className='text-lg font-heading mb-6'>Deseja ativar a música de fundo?</p>
              <div className='flex gap-4 justify-center'>
                <button
                  className='cursor-pointer border px-4 py-2 rounded'
                  onClick={() => setShowModal(false)}
                >
                  Não
                </button>
                <button className='cursor-pointer border px-4 py-2 rounded' onClick={handleAllow}>
                  Sim
                </button>
              </div>
            </div>
          </div>
        )}

        <video
          src={BannerVideo}
          autoPlay
          muted
          loop
          playsInline
          preload='auto'
          className='absolute inset-0 w-full h-full object-cover'
        ></video>
        <div className='absolute inset-0 bg-white/30'></div>
      </div>

      <div className='text-center z-10 animate-fade-in my-[200px]'>
        <p className='mb-9 font-sans text-xs font-medium uppercase tracking-[4px] text-[#3d4c2f]'>
          Vamos nos casar
        </p>
        <h1 className='font-banner font-regular leading-none text-[#3d4c2f] text-[clamp(48px,9vw,92px)]'>
          Carol
          <span className='ml-4 mr-9 inline-block font-normal italic text-[#C0714F]'>&amp;</span>
          Vitor
        </h1>
        <div className='flex items-center justify-center gap-4 md:my-8 my-[5px]'>
          <span className='h-px w-12 md:w-20 bg-[#3d4c2f]'></span>
          <span className='text-[#C0714F] text-lg drop-shadow-md'>✦</span>
          <span className='h-px w-12 md:w-20 bg-[#3d4c2f]'></span>
        </div>
        <p className='mt-5 text-xs font-bold uppercase tracking-[4px] text-[#3d4c2f]'>
          23 de Janeiro de 2027
        </p>
      </div>
    </section>
  );
};

export { Banner };
