import { useState } from 'react';
import { RecantoReal, BannerMusic } from '../../../../assets';
import { VolumeUp, VolumeOff, KeyboardArrowDown } from '@mui/icons-material';
import { useInviteStore } from '../../../../store/useInvite';

const Banner = () => {
  const { audioRef, showInviteScreem } = useInviteStore();

  const [isMuted, setIsMuted] = useState(false);

  const handleToggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.5,
      behavior: 'smooth',
    });
  };

  return (
    <section
      className={`relative min-h-screen flex flex-col items-center justify-center py-8 px-6 overflow-hidden bg-background transition-opacity duration-4000 ease-in-out ${!showInviteScreem ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Botão de indicação de scroll (canto inferior esquerdo) */}
      <button
        onClick={handleScrollDown}
        aria-label='Rolar para baixo'
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white/80 hover:bg-white text-[#3d4c2f] rounded-full p-2 shadow-md cursor-pointer transition-opacity duration-1000 ease-in-out animate-bounce ${
          !showInviteScreem ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <KeyboardArrowDown fontSize='medium' />
      </button>

      {/* Botão de som (canto inferior direito) */}
      <button
        onClick={handleToggleMute}
        className='fixed bottom-6 right-6 z-50 bg-white/80 hover:bg-white rounded-full p-2 shadow-md cursor-pointer'
      >
        {isMuted ? <VolumeOff style={{ color: '#3d4c2f' }} /> : <VolumeUp style={{ color: '#3d4c2f' }} />}
      </button>

      <div className='absolute inset-0 w-full h-full'>
        <audio ref={audioRef} src={BannerMusic} loop preload='auto' />

        <video
          src={RecantoReal}
          autoPlay
          muted
          loop
          playsInline
          preload='auto'
          className='absolute inset-0 w-full h-full object-cover'
        ></video>
        <div className='absolute inset-0 bg-white/46'></div>
      </div>

      <div
        className={`text-center z-10 my-[200px] transition-opacity duration-4500 ease-in-out ${!showInviteScreem ? 'opacity-100' : 'opacity-0'}`}
      >
        <p className='mb-9 font-sans text-base font-medium uppercase tracking-[4px] text-[#502b13]'>
          Vamos nos casar
        </p>
        <h1 className='font-banner font-regular leading-none text-[#502b13] text-[64px] md:text-[74px]'>
          Carol
          <span className='ml-4 mr-9 inline-block font-normal italic text-[#C0714F]'>&amp;</span>
          Vitor
        </h1>
        <div className='flex items-center justify-center gap-4 md:my-8 my-[5px]'>
          <span className='h-px w-12 md:w-20 bg-[#ff8c5a]'></span>
          <span className='text-[#ff8c5a] text-lg drop-shadow-md'>✦</span>
          <span className='h-px w-12 md:w-20 bg-[#ff8c5a]'></span>
        </div>
        <p className='mt-5 text-base font-bold uppercase tracking-[4px] text-[#502b13]'>
          23 de Janeiro de 2027
        </p>
      </div>
    </section>
  );
};

export { Banner };
