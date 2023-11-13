"use client"
import Image from "next/image";
import Hero from "../components/Hero";
import TrendingCards from "../components/TrendingCards";
import LatestEpisodes from "../components/LatestEpisodes";
import TopUpcoming from "../components/TopUpcoming";
import EstimatedSchedule from "../components/EstimatedSchedule";
import BottomBox from "../components/BottomBox";
import EpisodesRow from "@/components/EpisodesRow";
import { requests } from "@/core/movies/instance";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between space-y-24">
      <Hero />
      <EpisodesRow title="Latest Episodes" url={requests.fetchTrending} />
      <EpisodesRow title="Top Upcomming" url={requests.fetchTopRated} />
    </main>
  );
}
