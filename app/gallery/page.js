import GalleryHeroSection from "../components/GalleryHeroSection";
import GalleryMiniFooter from "../components/GalleryMiniFooter";
import Wrapper from "../components/Wrapper";

export default function Page() {
  return (
    <div>
      <Wrapper>
        <GalleryHeroSection />
      </Wrapper>
      <GalleryMiniFooter />
    </div>
  );
}
