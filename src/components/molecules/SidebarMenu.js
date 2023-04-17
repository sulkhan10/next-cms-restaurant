import Link from "next/link";
import { IoPeople } from "react-icons/io5";
import { RiDashboardLine, RiBarcodeBoxLine } from "react-icons/ri";
import { MdFastfood } from "react-icons/md";
import { HiOutlineClipboard, HiOutlineTruck } from "react-icons/hi";
import { BsPersonBadge, BsCart3 } from "react-icons/bs";
import { TbPhotoEdit } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";
import Logo from "../atoms/Logo";
const SidebarMenu = () => {
  return (
    <div className="p-2 text-[#98949E]">
      <div className="py-1 pl-2">
        <Logo />
      </div>
      <h2 className="font-bold py-1 pl-2 pr-6 mt-6 text-sm">Menu</h2>
      <div>
        <Link href="">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-md">
            <div className="flex gap-2">
              <RiDashboardLine size={22} />
              Dashboard
            </div>
            <div className="w-6 h-6 rounded-full bg-[#F46B45] text-gray-50 flex justify-center items-center">
              4
            </div>
          </div>
        </Link>
        <Link href="">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-md">
            <div className="flex gap-2">
              <RiBarcodeBoxLine size={22} />
              Stock
            </div>
            <div> </div>
          </div>
        </Link>
        <Link href="">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-md text-[#5D5FEF]">
            <div className="flex gap-2">
              <IoPeople size={22} color="#5D5FEF" />
              Customer
            </div>
            <div> </div>
          </div>
        </Link>
        <Link href="">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-md">
            <div className="flex gap-2">
              <MdFastfood size={22} />
              Restaurant
            </div>
            <div> </div>
          </div>
        </Link>
        <Link href="">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-md">
            <div className="flex gap-2">
              <TbPhotoEdit size={22} />
              Design
            </div>
            <div> </div>
          </div>
        </Link>
        <Link href="">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-md">
            <div className="flex gap-2">
              <HiOutlineClipboard size={22} />
              Report
            </div>
            <div> </div>
          </div>
        </Link>
        <Link href="">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-md">
            <div className="flex gap-2">
              <BsPersonBadge size={22} />
              Role & Admin
            </div>
            <div> </div>
          </div>
        </Link>
        <Link href="">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-md">
            <div className="flex gap-2">
              <VscSettings size={22} />
              Settings
            </div>
            <div> </div>
          </div>
        </Link>
      </div>
      <h2 className="font-bold py-1 pl-2 pr-6 mt-8 text-sm">Integration</h2>
      <div>
        <Link href="">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-md">
            <div className="flex gap-2">
              <BsCart3 size={22} />
              Stock
            </div>
            <div> </div>
          </div>
        </Link>
        <Link href="">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-md">
            <div className="flex gap-2">
              <HiOutlineTruck size={22} />
              Supply
            </div>
            <div> </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarMenu;
