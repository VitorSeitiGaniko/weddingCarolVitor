const Banner = () => {
  return (
    <section className='relative min-h-screen flex flex-col items-center justify-center py-8 px-6 overflow-hidden bg-background'>
      <audio src='/background-music.mp3' loop preload='auto'></audio>

      <div className='absolute inset-0 w-full h-full'>
        <video
          src='/hero-video.mp4'
          autoPlay
          loop
          playsInline
          preload='auto'
          className='absolute inset-0 w-full h-full object-cover'
        ></video>
        <div className='absolute inset-0 bg-background/20'></div>
      </div>

      <div className='text-center z-10 animate-fade-in my-[230px]'>
        <p className='text-xs md:text-sm tracking-[0.3em] uppercase mb-3 text-wedding-olive'>
          We're Getting Married
        </p>

        <h1 className='font-script text-5xl md:text-6xl lg:text-7xl mb-2 text-wedding-olive'>
          Alex <span className='mx-2'>&amp;</span> Diane
        </h1>

        <div className='flex items-center justify-center gap-4 md:my-8 my-[5px]'>
          <span className='h-px w-12 md:w-20 bg-wedding-olive'></span>
          <span className='text-amber-500 text-lg drop-shadow-md'>✦</span>
          <span className='h-px w-12 md:w-20 bg-wedding-olive'></span>
        </div>

        <p className='text-xs md:text-sm tracking-[0.2em] uppercase text-wedding-olive my-0 py-[6px]'>
          22 November 2026
        </p>
      </div>

      <div className='flex-1'></div>

      <div className='text-center z-10 animate-fade-in' style={{ animationDelay: '0.4s' }}>
        <button className='text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300'>
          Confirm Attendance
        </button>

        <div className='mt-4 flex justify-center'>
          <svg
            className='w-4 h-4 text-muted-foreground animate-bounce'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M19 9l-7 7-7-7'></path>
          </svg>
        </div>
      </div>

      <button
        className='fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-muted-foreground/30 bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all duration-300'
        aria-label='Unmute'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-volume-x'
        >
          <path d='M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z'></path>
          <line x1='22' x2='16' y1='9' y2='15'></line>
          <line x1='16' x2='22' y1='9' y2='15'></line>
        </svg>
      </button>
    </section>
  );
};

export { Banner };
