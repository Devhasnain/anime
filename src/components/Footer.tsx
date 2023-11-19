import routes from "@/core/routes";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24">
      <form className="px-[1.5rem] pt-10 pb-12 grid md:grid-cols-2 grid-cols-1 space-y-2 md:space-y-0 gap-2 bg-[#181818]">
        <div className="space-y-1">
          <span className=" text-white text-xl">Join our newsletter</span>
          <div className="text-[#ffff]/50 text-sm font-normal ">
            We'll send you a nice letter once per week. No spam.
          </div>
        </div>
        <fieldset className="grid sm:grid-cols-12 grid-cols-1 w-full gap-4">
          <input
            type="text"
            placeholder="username@site.com"
            className="input col-span-8 input-bordered bg-gray-400/20 text-white"
          />
          <button className="btn col-span-4 bg-red-600 border-red-600 hover:bg-red-500 hover:border-red-600 text-white rounded-">
            Subscribe
          </button>
        </fieldset>
      </form>
      <footer className="footer py-10 px-[1.5rem] bg-[#121212] text-white">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 space-y-5 xl:space-y-0 xl:grid-cols-12 w-full pt-12 pb-6 gap-8">
          <div className="xl:col-span-4 w-full space-y-7">
            <h3 className="text-2xl font-medium tracking-wide">Anime Eleven</h3>
            <p>Design amazing digital experiences that<br /> create more happy in the world.</p>
            <div className="space-y-3">
              <h6 className="text-lg">Get the app</h6>
              <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-4">
                <button className="border rounded-lg flex items-center text-white bg-transparent space-x-4 px-2.5 py-1.5">
                  <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.769 12.3008C15.7907 10.6198 16.6934 9.02922 18.1256 8.14876C17.2221 6.85844 15.7088 6.04034 14.1344 5.99108C12.4552 5.81482 10.8272 6.99591 9.97149 6.99591C9.09922 6.99591 7.78172 6.00858 6.36299 6.03777C4.51374 6.09751 2.78977 7.1489 1.89007 8.76564C-0.0439277 12.1141 1.39866 17.0351 3.25127 19.7417C4.17817 21.0671 5.26145 22.5475 6.6789 22.495C8.06596 22.4375 8.584 21.6105 10.2583 21.6105C11.9171 21.6105 12.4031 22.495 13.8493 22.4616C15.3377 22.4375 16.2754 21.1304 17.1698 19.7925C17.8358 18.8481 18.3483 17.8044 18.6882 16.7C16.9391 15.9602 15.771 14.2 15.769 12.3008Z" fill="white" />
                    <path d="M13.0373 4.21108C13.8489 3.23687 14.2487 1.98469 14.1518 0.720459C12.912 0.850679 11.7668 1.44324 10.9443 2.38007C10.14 3.2954 9.72143 4.52555 9.80056 5.74146C11.0408 5.75423 12.2601 5.17773 13.0373 4.21108Z" fill="white" />
                  </svg>

                  <div className="text-start">
                    <span className="text-xs">Download on the</span><br />
                    <span className="text-lg">App Store</span>
                  </div>
                </button>
                <button className="border rounded-lg flex items-center text-white bg-transparent space-x-4 px-2.5 py-1.5">
                  <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.15639 0.966418C1.03827 1.23392 0.973022 1.56168 0.973022 1.94294V24.0589C0.973022 24.441 1.03835 24.7688 1.15661 25.0362L13.1905 13.0006L1.15639 0.966418ZM1.85161 25.7554C2.29766 25.9463 2.87953 25.8858 3.51402 25.5259L17.6711 17.4812L13.8976 13.7077L1.85161 25.7554ZM18.5736 16.9694L23.015 14.4459C24.412 13.6509 24.412 12.3519 23.015 11.5579L18.5716 9.03306L14.6047 13.0005L18.5736 16.9694ZM17.6698 8.52065L3.51402 0.476945C2.87949 0.116367 2.29759 0.0562038 1.85153 0.247342L13.8976 12.2934L17.6698 8.52065Z" fill="white" />
                  </svg>
                  <div className="text-start">
                    <span className="text-xs">Download on the</span><br />
                    <span className="text-lg">Play Store</span>
                  </div>
                </button>
              </div>
            </div>

          </div>
          <div className="xl:col-span-2 flex flex-col justify-center w-full">
            <header className="text-lg">Product</header>
            <ul className="flex flex-col space-y-3 pt-2">
              {routes.map((item, index) => {
                return (
                  <Link className="link link-hover text-[#ffffff]/50" href={item.path} key={index}>{item.title}</Link>
                )
              })}
              <li></li>
            </ul>
          </div>
          <div className="xl:col-span-2 flex flex-col justify-center w-full">
            <header className="text-lg">Company</header>
            <ul className="flex flex-col space-y-3 pt-2">
              {routes.map((item, index) => {
                return (
                  <Link className="link link-hover text-[#ffffff]/50" href={item.path} key={index}>{item.title}</Link>
                )
              })}
              <li></li>
            </ul>
          </div>
          <div className="xl:col-span-2 flex flex-col justify-center w-full">
            <header className="text-lg">Resources</header>
            <ul className="flex flex-col space-y-3 pt-2">
              {routes.map((item, index) => {
                return (
                  <Link className="link link-hover text-[#ffffff]/50" href={item.path} key={index}>{item.title}</Link>
                )
              })}
              <li></li>
            </ul>
          </div>
          <div className="xl:col-span-1 flex flex-col justify-center w-full">
            <header className="text-lg">Social</header>
            <ul className="flex flex-col space-y-3 pt-2">
              {routes.map((item, index) => {
                return (
                  <Link className="link link-hover text-[#ffffff]/50" href={item.path} key={index}>{item.title}</Link>
                )
              })}
              <li></li>
            </ul>
          </div>
          <div className="xl:col-span-1 flex flex-col justify-center w-full">
            <header className="text-lg">Legal</header>
            <ul className="flex flex-col space-y-3 pt-2">
              {routes.map((item, index) => {
                return (
                  <Link className="link link-hover text-[#ffffff]/50" href={item.path} key={index}>{item.title}</Link>
                )
              })}
              <li></li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-[#121212] text-white border-base-300">
        <aside className="items-center grid-flow-col">
          <p>
            © 2023 - 2024 Anime Eleven. All rights reserved. <br />
            Design created by «Frorex».
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </footer>
  );
};

export default Footer;
