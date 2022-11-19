import { useState } from "react";
import {
  FaSquarespace,
  FaObjectGroup,
  FaAdversal,
  FaPersonBooth,
} from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [hoverItem, setHoverItem] = useState(false);

  function handleHover(i) {
    setSelectedItem(i);
    setHoverItem(true);
  }

  const data = [
    {
      icon: <FaSquarespace />,
      name: "Booking-menu",
      image: "/images/booking-menu.webp",
      description: "Booking menu description",
      href: "booking menu",
    },
    {
      icon: <FaObjectGroup />,
      name: "Catering-menus",
      image: "/images/catering-menus.webp",
      description: "Catering menus description",
      href: "catering menus",
    },
    {
      icon: <FaAdversal />,
      name: "Gigs",
      image: "/images/gigs.webp",
      description: "Gigs description",
      href: "Gigs",
    },
    {
      icon: <FaPersonBooth />,
      name: "Jobs",
      image: "/images/jobs.webp",
      description: "Jobs description",
      href: "Jobs",
    },
  ];

  return (
    <div className=" container max-w-screen-2xl mx-auto px-10 py-5 lg:px-32 lg:py-20 ">
      <div className="grid grid-cols-12 gap-x-10 gap-y-10">
        <div className="col-span-12 lg:col-span-6 flex flex-col ">
          <p className=" text-gray-500 font-medium">BOOKSY BIZ LITE</p>
          <h2 className="py-2  text-3xl font-bold">
            Appointments, calendar, and clients on the go.
          </h2>
          <div className="flex flex-col gap-y-10 mt-5">
            {data.map((item, i) => (
              <div
                onMouseEnter={() => handleHover(i)}
                onMouseLeave={() => setHoverItem(false)}
                className="flex gap-x-8 items-center cursor-pointer"
                key={i}
              >
                <div
                  className={`${
                    i !== selectedItem
                      ? "bg-gray-100 border-2 border-gray-100"
                      : "bg-white  border-2 border-blue-200"
                  } rounded-full p-3`}
                >
                  <p className="text-2xl text-blue-400">{item.icon}</p>
                </div>

                <p
                  className={`${
                    i === selectedItem && "text-blue-500"
                  } font-medium   underline  underline-offset-1`}
                >
                  {item.name}
                </p>

                {selectedItem === i && hoverItem && (
                  <div className="absolute bg-white rounded-lg shadow-md px-3 py-2 left-[20rem] lg:left-[22rem]">
                    <p className="text-[14px]  font-semibold">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            <div className="bg-blue-700 font-medium cursor-pointer hover:bg-blue-500 mt-14 rounded-md text-white w-64 flex items-center justify-center py-3">
              Explore {data[selectedItem].href}
            </div>
          </div>
        </div>
        <div className=" col-span-12 lg:col-span-6 ">
          <div className="w-full h-[38rem] relative">
            <Image
              alt="image"
              className="w-full h-full object-contain"
              fill
              sizes="50vh"
              src={data[selectedItem].image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
