import Image from "next/image";

export default function TopMenuCard(){
    return (
        <div className=" bg-gray-100 mt-2 rounded-xl  text-gray-800">
              <div className="py-2 px-4">
                <div className="text-lg font-semibold">Top Menu</div>
                <div className="text-lg font-semibold text-[#F17300]">
                  This Week
                </div>
                <div className="text-sm py-2">10 - 12 Agustus 2023</div>
                <div className="relative">
                  <div className="px-4 py-2 bg-white shadow-md font-semibold text-sm rounded-lg  transform rotate-1">
                    Nasi Goreng Jamur Special Resto Pak Min
                  </div>
                  <div className="absolute -top-2 -right-3 mt-1 mr-1 bg-gray-700 text-gray-50 font-semibold text-xs  w-6 h-6 flex items-center justify-center rotate-12">
                    1
                  </div>
                  <div className="absolute -top-3 -right-2 mt-1 mr-1 bg-[#F17300] text-gray-50 font-semibold text-xs  w-6 h-6 flex items-center justify-center rotate-12">
                    1
                  </div>
                </div>
                <div className="text-sm py-2">2. Tongseng Sapi Gurih</div>
                <div className="text-sm py-2">3. Nasi Gudeg Telur Ceker</div>
                <div className="text-sm py-2">4. Nasi Ayam serundeng</div>
                <div className="text-sm py-2">5. Nasi Goreng Seafood</div>
              </div>
                <Image
                  src="/graph.png"
                  className="w-full"
                width={500}
                
                height={500}
                />
            </div>
    )
}