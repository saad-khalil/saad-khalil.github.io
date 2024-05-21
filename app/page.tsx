import {Image} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="bg-white">
        <div>
            <h1 className="text-black text-5xl md:text-7xl lg:text-9xl font-bold heading text-center hover:text-fuchsia-400">[software
                — </h1>
            <h1 className=" text-black text-5xl md:text-7xl lg:text-9xl font-bold heading text-center hover:text-emerald-400">engineer.]</h1>
        </div>
        <div className="relative">
            <svg viewBox="0 50 200 200" xmlns="http://www.w3.org/2000/svg" className="w-1/2 h-1/2">
                <path fill="#34d399"
                      d="M15.1,-22.7C25.9,-20,45.4,-28.7,60.1,-26.8C74.9,-25,84.9,-12.5,80.1,-2.7C75.4,7,55.8,14,47.1,26.3C38.4,38.6,40.6,56.3,34.5,56.2C28.5,56.2,14.2,38.4,-1,40.1C-16.2,41.8,-32.4,63,-45.2,66.9C-57.9,70.8,-67.3,57.5,-72.1,43.5C-77,29.5,-77.4,14.7,-77.8,-0.2C-78.1,-15.1,-78.3,-30.2,-68.2,-35.2C-58.1,-40.2,-37.6,-35,-24.6,-36.4C-11.5,-37.7,-5.7,-45.7,-1.8,-42.6C2.2,-39.5,4.3,-25.4,15.1,-22.7Z"
                      transform="translate(100 100)"/>
            </svg>
            <h1 className="text-black text-5xl md:text-7xl lg:text-9xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/4 ">curious.<br/>finding solutions.</h1>
        </div>


    </main>
  );
}
