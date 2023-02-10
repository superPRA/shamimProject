import React,{useState} from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsClock, BsHddStack, BsTrash } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { FiFolderPlus } from "react-icons/fi";

const cola =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdp4nNlwFvxjyCDTCBgpfEc2oO1dactEgYw&usqp=CAU";
const book =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/450px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg";
const design =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/330px-Eq_it-na_pizza-margherita_sep2005_sml.jpg";
const lst = [
  {
    title: "تدوین و صداگذاری",
    box: [
      {
        img: cola,
        describe: "تدوین تیزر تبلیغاتی نوشیدنی انرژی زا",
      },
      {
        img: cola,
        describe: "تدوین تیزر تبلیغاتی نوشیدنی انرژی زا",
      },
      {
        img: cola,
        describe: "تدوین تیزر تبلیغاتی نوشیدنی انرژی زا",
      },
    ],
  },
  {
    title: "طراحی و گرافیک",
    box: [
      {
        img: design,
        describe: "تدوین تیزر تبلیغاتی نوشیدنی انرژی زا",
      },
      {
        img: design,
        describe: "تدوین تیزر تبلیغاتی نوشیدنی انرژی زا",
      },
    ],
  },
  {
    title: "گویندگی و خانندگی",
    box: [
      {
        img: book,
        describe: "تدوین تیزر تبلیغاتی نوشیدنی انرژی زا",
      },
      {
        img: book,
        describe: "تدوین تیزر تبلیغاتی نوشیدنی انرژی زا",
      },
      {
        img: book,
        describe: "تدوین تیزر تبلیغاتی نوشیدنی انرژی زا",
      },
    ],
  },
];

export default function Legasy() {
  const [orderBy, setOrderBy] = useState<"stack" | "clock">("stack")
  return (
    <div className="col-span-9">
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-neutral-500">اثار من :</h1>
        <div className="flex items-center gap-2">
          <h2 className="text-neutral-500 ">نوع نمایش:</h2>
          <div className="w-24 h-10 bg-gray-400 rounded-full flex justify-between items-center px-3 text-xl relative cursor-pointer" >
            <BsHddStack className="z-20 text-neutral-600" onClick={()=>{setOrderBy("stack")}}/>
            <BsClock className="z-20 text-neutral-600" onClick={()=>{setOrderBy("clock")}}/>
            {orderBy === "stack" && <span className="absolute top-1 right-1 w-10 h-8 bg-white rounded-r-full"></span>}
            {orderBy === "clock" && <span className="absolute top-1 left-1 w-10 h-8 bg-white rounded-l-full "></span>}
          </div>
        </div>
      </div>
      {lst.map(({ title, box }) => {
        return (
          <div className="bg-white mt-4 w-min p-4 rounded-xl">
            <div className="flex justify-start items-center text-3xl gap-2 p-4 pt-0 pr-0">
              <h1 className="text-xl text-blue-600">{title}</h1>
              <TbEdit className="text-neutral-500 cursor-pointer" />
              <BsTrash className="text-red-500 cursor-pointer" />
            </div>
            <div className="flex">
              <div className="flex gap-2 ">
                {box.map(({ img, describe }) => {
                  return (
                    <div className="border rounded-2xl w-60 overflow-hidden">
                      <div
                        className="aspect-[6/4] relative"
                        style={{ backgroundImage: "url(" + img + ")" }}
                      >
                        <span className="absolute top-3 right-3 bg-white rounded-lg p-3 flex flex-col gap-1 cursor-pointer">
                          <span className="h-1 w-1 bg-black rounded-full"></span>
                          <span className="h-1 w-1 bg-black rounded-full"></span>
                          <span className="h-1 w-1 bg-black rounded-full"></span>
                        </span>
                      </div>
                      <div className="aspect-[6/2] p-2">
                        <h1 className="text-lg text-neutral-500">{describe}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col justify-end w-20 py-5 gap-10 px-2">
                <div className="text-center text-blue-600 cursor-pointer">
                  <AiOutlinePlusCircle className="mx-auto text-xl" />
                  <h1>افزودن اثر</h1>
                </div>
                <div className="text-neutral-500 cursor-pointer">نمایش بیشتر ...</div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="px-4 py-2 w-fit flex gap-2 mt-4 text-blue-600 cursor-pointer bg-white rounded-full">
        <FiFolderPlus className="text-xl" />
        <h1>افزودن دسته های بیشتر</h1>
      </div>
    </div>
  );
}
