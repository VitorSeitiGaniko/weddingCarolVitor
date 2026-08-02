import { Footer } from '../../components';
import { Banner, Timer, Story, Gift, CeremonyLocation, Invite } from './components';
import { useInviteStore } from '../../store/useInvite';
import { useEffect } from 'react';
import { BannerMusic } from '../../assets/';

const Home = () => {
  const { showInviteScreem, audioRef } = useInviteStore();

  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    if (!isMobile) return;

    let wasPlaying = false;

    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.visibilityState === 'hidden') {
        wasPlaying = !audioRef.current.paused;
        if (wasPlaying) audioRef.current.pause();
      } else {
        if (wasPlaying) audioRef.current.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [audioRef]);

  return (
    <main className='flex flex-col'>
      <audio ref={audioRef} src={BannerMusic} loop preload='auto' />
      {showInviteScreem && <Invite />}
      <Banner />
      <Timer />
      <Story />
      <Gift />
      <CeremonyLocation />
      <Footer />
    </main>
  );
};

export { Home };
