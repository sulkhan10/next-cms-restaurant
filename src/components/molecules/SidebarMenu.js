import Link from "next/link";
import {
 
  IoPeople,
  IoPersonCircleOutline,
} from "react-icons/io5";
import {RiDashboardLine, RiBarcodeBoxLine} from "react-icons/ri";
import {MdFastfood} from "react-icons/md";
import {HiOutlineClipboard, HiOutlineTruck} from "react-icons/hi";
import {BsPersonBadge, BsCart3} from "react-icons/bs";
import {TbPhotoEdit} from "react-icons/tb";
import {VscSettings} from "react-icons/vsc";
import Image from "next/image";
const SidebarMenu = () => {
  return (
    <div className="p-5 text-[#98949E]">
      <div className="py-1 pl-2">
        <Image src="/logo.png" width={150} height={100} />
      </div>
      <h2 className="font-bold py-1 pl-2 pr-6 mt-6">Menu</h2>
      <div>
        <Link href="Naruto">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-xl">
            <div className="flex gap-2">
              <RiDashboardLine size={30} />
              Dashboard
            </div>
            <div>4</div>
          </div>
        </Link>
        <Link href="Naruto">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-xl">
            <div className="flex gap-2">
              <RiBarcodeBoxLine size={30} />
              Stock
            </div>
            <div>4</div>
          </div>
        </Link>
        <Link href="Naruto">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-xl">
            <div className="flex gap-2">
              <IoPeople size={30} />
              Customer
            </div>
            <div>4</div>
          </div>
        </Link>
        <Link href="Naruto">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-xl">
            <div className="flex gap-2">
              <MdFastfood size={30} />
              Restaurant
            </div>
            <div>4</div>
          </div>
        </Link>
        <Link href="Naruto">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-xl">
            <div className="flex gap-2">
              <TbPhotoEdit size={30} />
              Design
            </div>
            <div>4</div>
          </div>
        </Link>
        <Link href="Naruto">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-xl">
            <div className="flex gap-2">
              <HiOutlineClipboard size={30} />
              Report
            </div>
            <div>4</div>
          </div>
        </Link>
        <Link href="Naruto">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-xl">
            <div className="flex gap-2">
              <BsPersonBadge size={30} />
              Role & Admin
            </div>
            <div>4</div>
          </div>
        </Link>
        <Link href="Naruto">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-xl">
            <div className="flex gap-2">
              <VscSettings size={30} />
              Settings
            </div>
            <div>4</div>
          </div>
        </Link>
      </div>
      <h2 className="font-bold py-1 pl-2 pr-6 mt-8">Integration</h2>
<div>
<Link href="Naruto">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-xl">
            <div className="flex gap-2">
              <BsCart3 size={30} />
              Stock
            </div>
            <div>4</div>
          </div>
        </Link><Link href="Naruto">
          <div className="font-semibold py-1 pl-2 my-2 pr-6 flex justify-between rounded-lg items-center  gap-4  hover:bg-blue-50 w-full text-xl">
            <div className="flex gap-2">
              <HiOutlineTruck size={30} />
              Supply
            </div>
            <div>4</div>
          </div>
        </Link>
</div>
    </div>
  );
};

export default SidebarMenu;
