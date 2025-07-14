import { useAlbum } from '@/application/hooks/useAlbum';
import { GalleryFilter } from '@/presentation/components/molecules/GalleryFilter';
import { AlbumGrid } from '@/presentation/components/organisms/AlbumGrid';
import { Footer } from '@/presentation/components/organisms/Footer';
import { Header } from '@/presentation/components/organisms/Header';
import { HeroSection } from '@/presentation/components/organisms/HeroSection';
import { useState } from 'react';

const LandingPage = () => {
  const { albums, loading } = useAlbum();
  const [query, setQuery] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-[#E4E8F8]">
      <Header />
      <HeroSection />
      <main className="flex flex-col gap-6 px-4 sm:px-12 py-6">
        <GalleryFilter query={query} onSearch={setQuery} />
        <AlbumGrid albums={albums} query={query} loading={loading} />
      </main>
      <Footer />
    </div>
  );
};

export { LandingPage };
