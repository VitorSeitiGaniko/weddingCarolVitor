import { BannerVideo } from '../../assets';
import { Footer, Header } from '../../components';
import { Banner, Timer, Story, Gift, CeremonyLocation } from './components';

const Home = () => {
  return (
    <main className='flex flex-col'>
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
