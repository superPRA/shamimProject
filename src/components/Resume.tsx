import React from "react";
import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";

export default function Resume() {
  return (
    <div className="col-span-3 pb-8 bg-white rounded-xl shadow-xl">
      <div className="flex justify-between items-center text-neutral-400 p-6 text-xl relative">
        <h1 className="bg-white z-10 p-2">اطلاعات شناسایی</h1>
        <TbEdit className="cursor-pointer text-3xl z-10 bg-white " />
        <div className="h-[1px] border border-dashed absolute top-1/2 left-6 right-6 "></div>
      </div>
      <div className="bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0dUl8HqvD8uWsc1iY6tFqRg2Bwivil8fxURUGiA7&s)] h-24 w-24 border-2 border-blue-600 rounded-full mx-auto bg-cover"></div>
      <h1 className="text-center text-xl text-blue-600 pt-4">مهدی ساغری</h1>
      <div className="flex justify-center items-center gap-4 mt-4">
        <div className="border-2 rounded-full flex justify-center items-center w-10 h-10 text-xl cursor-pointer">
          <BsTelegram />
        </div>
        <div className="border-2 rounded-full flex justify-center items-center w-10 h-10 text-xl cursor-pointer">
          <BsInstagram />
        </div>
        <div className="border-2 rounded-full flex justify-center items-center w-10 h-10 text-xl cursor-pointer">
          <BsFacebook />
        </div>
      </div>
      <div className="flex justify-between items-center text-neutral-400 p-6 text-xl relative">
        <h1 className="bg-white z-10 p-2">تگ لاین ها</h1>
        <TbEdit className="cursor-pointer text-3xl z-10 bg-white" />
        <div className="h-[1px] border border-dashed absolute top-1/2 left-6 right-6 "></div>
      </div>
      <div className="px-5 flex flex-wrap">
        <div className="p-3 bg-gray-200 rounded-2xl  m-2"> تجربه کابری </div>
        <div className="p-3 bg-gray-200 rounded-2xl  m-2"> طراحی سایت </div>
        <div className="p-3 bg-gray-200 rounded-2xl  m-2"> گرافیک </div>
      </div>
      <div className="flex justify-between items-center text-neutral-400 p-6 text-xl relative">
        <h1 className="bg-white z-10 p-2">درباره من</h1>
        <TbEdit className="cursor-pointer text-3xl z-10 bg-white" />
        <div className="h-[1px] border border-dashed absolute top-1/2 left-6 right-6 "></div>
      </div>
      <p className="px-8 ">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>
      <div className="flex justify-between items-center text-neutral-400 p-6 text-xl relative">
        <h1 className="bg-white z-10 p-2">مهارت ها</h1>
        <TbEdit className="cursor-pointer text-3xl z-10 bg-white" />
        <div className="h-[1px] border border-dashed absolute top-1/2 left-6 right-6 "></div>
      </div>
      <div className="px-5 flex flex-wrap">
        <div className="p-3 bg-gray-200 rounded-2xl  m-2"> تجربه کابری </div>
        <div className="p-3 bg-gray-200 rounded-2xl  m-2"> طراحی سایت </div>
        <div className="p-3 bg-gray-200 rounded-2xl  m-2"> گرافیک </div>
      </div>
      <div className="flex justify-between items-center text-neutral-400 p-6 relative">
        <h1 className="bg-white z-10 p-2">گواهینامه هاومدارک تحصیلی</h1>
        <TbEdit className="cursor-pointer text-3xl z-10 bg-white" />
        <div className="h-[1px] border border-dashed absolute top-1/2 left-6 right-6 "></div>
      </div>
      <ul className="list-disc px-8">
        <li>کارشناس کامپیوتر - دانشگاه تبریز</li>
        <li>مبانی طراحی - Udemy</li>
      </ul>
      <div className="flex justify-between items-center text-neutral-400 p-6 relative text-xl">
        <h1 className="bg-white z-10 p-2">سوابق شغلی</h1>
        <TbEdit className="cursor-pointer text-3xl z-10 bg-white" />
        <div className="h-[1px] border border-dashed absolute top-1/2 left-6 right-6 "></div>
      </div>
      <ul className="list-disc px-8">
        <li>طراح تجربه کاربری - شرکت همراه</li>
        <li>طراح گرافیک - شرکت اینده سازان</li>
      </ul>
    </div>
  );
}
