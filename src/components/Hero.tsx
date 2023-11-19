import React from "react";

const Hero = () => {


  return (
    <div className="w-full hero_bg">
      <div className="grid grid-cols-12 text-white bg-gradient-to-r from-[#121212] via-[#181818]/80 md:via-[#181818]/95  to-transparent min-h-[100vh] px-[1.5rem]">
        <div className="flex flex-col h-full justify-center md:col-span-9 sm:col-span-10 col-span-12 lg:col-span-8 space-y-6 sm:space-y-7 pt-8 sm:pt-0">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide">Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su</h1>
          <div className="flex flex-row items-center justify-start space-x-6 sm:space-x-12 text-[#ffff]/50">
            <div className="flex items-center justify-center space-x-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" fill="white" fillOpacity="0.5" />
              </svg>
              <span>Movie</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="white" fillOpacity="0.5" />
              </svg>
              <div className="flex items-center justify-end space-x-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" fill="white" fillOpacity="0.5" />
                </svg>
                <span className="">7 Oct 2023</span>

              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="white" fillOpacity="0.5" />
              </svg>
              <span className="bg-red-500 p-1 rounded-lg text-white">HD</span>
            </div>
          </div>
          <p className="sm:flex hidden">
            A man with a passion for vending machines awakens to realize that he has not only died, but he has also been reborn as one of his beloved machines! Although he is a modern appliance in a fantasy world, he requires money in order to keep functioning. He is stuck in one location until a young girl named Lammis stumbles upon him. Amazed by the drinks and food he sells, Lammis uses her "Blessing of Might" to lift him with ease and take him back to the village of Clearflow Lake.
          </p>
          <p className="sm:hidden flex">
            A man with a passion for vending machines awakens to realize that he has not only died, but he has also been reborn as one of his beloved machines! Although he is a modern appliance in a fantasy world, he requires money in order to keep functioning. He is stuck in one location until a young girl named Lammis stumbles upon him.
          </p>
          <div className="flex flex-row items-center space-x-6">
            <button className="bg-red-500 transition-all py-3 px-4 sm:px-6 rounded-lg space-x-2 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 5V19L17.5 12L6.5 5Z" fill="white" />
              </svg>
              <span>
                Watch now
              </span>
            </button>
            <button className="hover:bg-red-500 transition-all py-3 px-4 sm:px-6 rounded-lg border hover:border-red-500 border-gray-400/50 space-x-2 flex items-center justify-center">
              <span>
                Details
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.29501 16.59L12.875 12L8.29501 7.41L9.70501 6L15.705 12L9.70501 18L8.29501 16.59Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
        <div className="col-span-4">

        </div>
      </div>
    </div>
  );
};

export default Hero;
