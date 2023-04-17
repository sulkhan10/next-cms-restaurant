export default function AnalyticsCard (){
    return (
        <div className="bg-[#5D5FEF] px-5 py-2 rounded-xl flex flex-col justify-between relative">
              <div>
                <h1 className="text-md">See analytics of</h1>
                <h1 className="text-md">the Customer</h1>
                <h1 className="text-md mb-4">Clearly</h1>
              </div>
              <button className="bg-white text-md z-50 bg-opacity-20 backdrop-blur-sm flex gap-2 items-center justify-center py-2 rounded-lg w-32 ">
                See Analitycs
              </button>
              <div className="absolute bottom-0 right-0">
                <div className="bg-[#5D5FEF] border-[#A5A6F6] border-2 absolute bottom-0 right-0 rounded-tl-full w-32 h-32 rounded-br-3xl"></div>
              </div>
              <div className="absolute bottom-0 right-0">
                <div className="bg-[#7879F1] border-[#F2F2F2] border-2 absolute bottom-0 right-0 rounded-tl-full w-20 h-20 rounded-br-3xl"></div>
              </div>
              <div className="absolute bottom-0 right-0">
                <div className="bg-[#A5A6F6] border-[#F2F2F2] border-2 absolute bottom-0 right-0 rounded-tl-full rounded-br-3xl w-10 h-10"></div>
              </div>
            </div>
    )
}