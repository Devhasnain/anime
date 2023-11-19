"use client";
import Hero from "../components/Hero";
import EpisodesRow from "@/components/EpisodesRow";
import { requests } from "@/core/movies/instance";
import EpisodesSlider from "@/components/EpisodesSlider";
import { Provider } from "react-redux";
import { store } from "@/core/redux/store";
import EstimatedSchedule from "@/components/EstimatedSchedule";
import BottomBox from "@/components/BottomBox";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between space-y-24">
        <Hero />
        <div className="px-[1.5rem] mx-auto text-white w-full space-y-24">
          <EpisodesSlider title="Trending" url={requests.fetchTrending} />
          <EpisodesRow title="Latest Episodes" url={requests.fetchTopRated} />
          <EstimatedSchedule
            title="Estimated Schedule"
            url={requests.fetchTopRated}
          />
          <EpisodesRow title="Top Upcomming" url={requests.fetchTopRated} />
          <BottomBox/>
        </div>
      </main>
    </Provider>
  );
}
