"use client"

import React from "react";
import DarkModeSwitcher from "@/components/ThemeToggle/DarkModeSwitcher";
import Link from "next/link";
import routes from "@/core/routes";
import { usePathname } from "next/navigation";
import Drawer from "./Drawer";

const Header = () => {
  const router = usePathname();
  return (
    <header className="text-white bg-[#181818] grid grid-cols-12 items-center w-full overflow-hidden">
      <div className="col-span-6 lg:col-span-5 md:col-span-7 xl:col-span-4 items-center py-1.5 grid grid-col-1 sm:grid-cols-12 md:gap-0 gap-1">
        <div className="col-span-5 flex items-center space-x-3">
          <Drawer />
          <span className="text-lg">Anime Eleven</span>
        </div>
        <div className="col-span-7 hidden sm:grid grid-cols-12 items-center bg-gray-400/20 rounded-lg overflow-hidden">
          <input type="search" className="col-span-10 outline-none border-none h-full w-full bg-transparent px-2" placeholder="Search Anime..." />
          <svg width="40" height="40" viewBox="0 0 40 40" className="col-span-2 cursor-pointer" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.755 22.255H22.965L22.685 21.985C23.665 20.845 24.255 19.365 24.255 17.755C24.255 14.165 21.345 11.255 17.755 11.255C14.165 11.255 11.255 14.165 11.255 17.755C11.255 21.345 14.165 24.255 17.755 24.255C19.365 24.255 20.845 23.665 21.985 22.685L22.255 22.965V23.755L27.255 28.745L28.745 27.255L23.755 22.255ZM17.755 22.255C15.265 22.255 13.255 20.245 13.255 17.755C13.255 15.265 15.265 13.255 17.755 13.255C20.245 13.255 22.255 15.265 22.255 17.755C22.255 20.245 20.245 22.255 17.755 22.255Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="hidden lg:col-span-4 xl:col-span-6 lg:flex flex-1 h-full pl-8">
        <ul className="w-full gap-4 flex-row overflow-hidden hidden md:flex 2xl:hidden">
          {routes.map((item, index) => {
            return (
              <li key={index} className={`hidden text-center lg:px-2 px-4 ${router === item.path ? " border-[#E01E26]" : "border-transparent"} border-b-2 h-full flex-col items-center justify-center  ${item.classNames}`}>
                <Link className="hover:!text-white" href={item.path}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
        <ul className="w-full gap-4 flex-row overflow-hidden hidden 2xl:flex">
          {routes.map((item, index) => {
            return (
              <li key={index} className={`text-center xl:px-2 ${router === item.path ? " border-[#E01E26]" : "border-transparent"} border-b-2 h-full flex-col items-center justify-center  ${item.classNames}`}>
                <Link className="hover:!text-white" href={item.path}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="lg:col-span-3 col-span-6 xl:col-span-2 md:col-span-5 flex flex-row items-center justify-end pr-[1rem] gap-4">
        <button className="hidden sm:flex border py-[0.4rem] px-4 rounded-lg border-gray-400/50 hover:bg-red-500 hover:border-red-500 transition-all">Register</button>
        <button className="hidden sm:flex border py-[0.4rem] px-4 rounded-lg border-red bg-red-500 border-red-500">Login</button>
        <button className="bg-transparent flex items-center border p-1.5 rounded-full border-gray-400/50">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs bg-red-500 border-red-500 indicator-item"></span>
          </div>
        </button>
        <DarkModeSwitcher />
      </div>
    </header>
  );
};

export default Header;
