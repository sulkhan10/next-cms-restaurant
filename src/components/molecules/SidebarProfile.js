import {
  IoLogOut,

} from 'react-icons/io5'
function SidebarProfile() {
 
  return (
    <div className=" border-t-2">
      <div className="flex px-8 py-4 gap-4">
        <img
          className="w-16 h-16 bg-slate-300 rounded-full"
          alt='Naruto'
          src='https://cdn1-production-images-kly.akamaized.net/7FrqQNl7apjVHr8VZzP7mt15o_c=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg'
        />
      <div className="flex flex-col justify-center text-[#110D17]">
        <h1 className="font-bold text-xl">Naruto</h1>
        <h4>Food Quality Manager</h4>
        
      </div>
      </div>
      <div className="flex px-8 text-[#8F0A13]">
        <div
          className="font-semibold py-2 flex justify-center rounded-2xl items-center capitalize gap-4 cursor-pointer hover:bg-red-100 w-full bg-[#FEF5F6] text-xl"
        //   onClick={logout}
        >
          <IoLogOut size={30} />
          Logout
        </div>
      </div>
    </div>
  )
}

export default SidebarProfile
