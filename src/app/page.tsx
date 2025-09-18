import { Advantages } from "@/widgets/Advantages/ui/Advantages";
import { ArcOfImages } from "@/widgets/ArcOfImages/ui/ArcOfImages";
import { HeroSection } from "@/widgets/HeroSection/ui/HeroSection";
import { HowAiWorks } from "@/widgets/HowAiWorks/ui/HowAiWorks";
import { Smiles } from "@/widgets/Smiles/ui/Smiles";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Advantages />
      <Smiles />
      <ArcOfImages />
      <HowAiWorks />
    </div>
  );
}
