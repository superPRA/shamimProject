import { AiFillAppstore, AiOutlineUserAdd } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiChat } from "react-icons/bi";
import { TbMail } from "react-icons/tb";
import { useState } from "react";
import { IoShapesOutline } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const lst = [
  {
    icon: <AiFillAppstore />,
    title: "داشبرد",
    notification: 0,
    isActive: true,
  },
  {
    icon: <CgProfile />,
    title: "پروفایل",
    notification: 0,
    isActive: false,
  },
  {
    icon: <BiChat />,
    title: "گفت و گو ها",
    notification: 3,
    isActive: false,
  },
  {
    icon: <TbMail />,
    title: "ارسال دعوت نامه",
    notification: 0,
    isActive: false,
  },
  {
    icon: <ImNewspaper />,
    title: "صدور پیش فاکتور",
    notification: 0,
    isActive: false,
  },
  {
    icon: <AiOutlineUserAdd />,
    title: "عضویت در کانتمو",
    notification: 0,
    isActive: false,
  },
  {
    icon: <IoShapesOutline />,
    title: "نمایش اثار",
    notification: 0,
    isActive: false,
  },
];

export default function SideNav() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={` ${
        open ? "w-64" : "w-20"
      }  transition-all bg-white pt-28 flex flex-col items-end px-4 relative`}
    >
      <span
        className={`absolute text-white ${open?"rotate-0":"rotate-180"} transition-all h-6 w-6 top-[calc(50%-1.5rem)] -left-3 border-2 rounded-full flex justify-center items-center bg-gray-400`}
        onClick={() => setOpen(!open)}
      >
        <BsChevronCompactRight />
      </span>
      {lst.map(({ icon, isActive, notification, title }) => {
        return (
          <div
            className={`w-full cursor-pointer flex gap-2 items-center px-2 h-16 rounded-lg hover:bg-blue-50 hover:border-r-4 hover:border-blue-600 transition-all ${
              isActive
                ? "bg-blue-100 border-r-4 border-blue-600 text-blue-600"
                : "text-neutral-500"
            }`}
          >
            <div className="text-3xl">{icon}</div>
            <div
              className={`text-lg ${
                open ? "w-auto" : "w-0"
              } overflow-hidden transition-all`}
            >
              {title}
            </div>
            {notification > 0 && (
              <div
                className={`bg-blue-600 ${
                  open ? "w-6" : "w-0"
                } overflow-hidden transition-all text-white h-6 flex justify-center items-center rounded-full`}
              >
                {notification}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
