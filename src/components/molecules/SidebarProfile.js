import { IoLogOut } from "react-icons/io5";
import Link from "next/link";
function SidebarProfile() {
  return (
    <div className=" border-t-2">
      <div className="flex px-4 py-2 gap-2">
        <img
          className="w-12 h-12 bg-slate-300 rounded-full"
          alt="Naruto"
          src="https://cdn1-production-images-kly.akamaized.net/7FrqQNl7apjVHr8VZzP7mt15o_c=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg"
        />
        <div className="flex flex-col justify-center text-[#110D17]">
          <h1 className="font-bold text-lg">Naruto</h1>
          <h4 className="text-xs">Food Quality Manager</h4>
        </div>
      </div>
      <Link href="/">
      <div className="flex px-4 mt-2 text-[#8F0A13]">
        <div
          className="font-semibold py-1 flex justify-center rounded-xl items-center capitalize gap-4 cursor-pointer hover:bg-red-100 w-full bg-[#FEF5F6] text-md"
          //   onClick={logout}
        >
          <IoLogOut size={20} />
          Logout
        </div>
      </div>
      </Link>
    </div>
  );
}

export default SidebarProfile;
