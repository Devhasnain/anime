import React from "react";

const BottomBox = () => {
  return (
    <div className="hero_bg w-full rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-[#2A2A2A] via-[#2A2A2A]/80 md:via-[#2A2A2A]  to-[#2A2A2A]/40">
        <div className="grid grid-cols-12 mx-auto py-5 px-5 md:py-14 md:px-14">
          <div className="md:col-span-8 col-span-12 xl:col-span-6 flex flex-col justify-center space-y-8">
            <h2 className="text-3xl">
              Lorem, ipsum dolor sit amet consectetur
              <br /> adipisicing elit. Illo, distinctio.
            </h2>
            <p className="pb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              recusandae excepturi doloribus possimus amet architecto et nisi,
              ut, sunt voluptatem molestias deleniti eius repudiandae, maxime
              provident necessitatibus itaque aspernatur vitae.
            </p>
            <button className="bg-red-500 transition-all py-3 px-4 sm:px-6 self-start rounded-lg space-x-2 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.5 5V19L17.5 12L6.5 5Z" fill="white" />
              </svg>
              <span>Watch now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBox;