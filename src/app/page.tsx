import Image from "next/image";
import Hero from "./components/Hero";
import TrendingCards from "./components/TrendingCards";
import LatestEpisodes from "./components/LatestEpisodes";
import TopUpcoming from "./components/TopUpcoming";
import EstimatedSchedule from "./components/EstimatedSchedule";
import BottomBox from "./components/BottomBox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <TrendingCards />
      <LatestEpisodes />
      <EstimatedSchedule />
      <TopUpcoming />
      <BottomBox />
    </main>
  );
}
