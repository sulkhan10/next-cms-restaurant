import AdminLayout from "@/components/layouts/AdminLayout";
import Header from "@/components/organisms/Header";
import {
  FiSearch,
  FiFilter,
  FiRefreshCw,
  FiPrinter,
  FiEdit,
  FiTrash,
  FiEye,
} from "react-icons/fi";
import { FaSort } from "react-icons/fa";
import Image from "next/image";
export default function Dashboard() {
  const customerData = [
    {
      customerName: "John Doe",
      level: "Sultan",
      favoriteMenu: "Burger",
      totalTransaction: "$500",
    },
    {
      customerName: "Jane Smith",
      level: "Warga",
      favoriteMenu: "Pizza",
      totalTransaction: "$250",
    },
    {
      customerName: "Michael Brown",
      level: "Juragan",
      favoriteMenu: "Sushi",
      totalTransaction: "$150",
    },
    {
      customerName: "Sarah Johnson",
      level: "Konglomerat",
      favoriteMenu: "Steak",
      totalTransaction: "$1000",
    },
    {
      customerName: "David Lee",
      level: "Sultan",
      favoriteMenu: "Fish and Chips",
      totalTransaction: "$350",
    },
    {
      customerName: "Emily Davis",
      level: "Warga",
      favoriteMenu: "Salad",
      totalTransaction: "$200",
    },
    {
      customerName: "Daniel Wilson",
      level: "Juragan",
      favoriteMenu: "Pasta",
      totalTransaction: "$100",
    },
    {
      customerName: "Olivia Smith",
      level: "Konglomerat",
      favoriteMenu: "Tacos",
      totalTransaction: "$800",
    },
    {
      customerName: "Matthew Johnson",
      level: "Sultan",
      favoriteMenu: "Sushi",
      totalTransaction: "$450",
    },
    {
      customerName: "Sophia Brown",
      level: "Warga",
      favoriteMenu: "Burger",
      totalTransaction: "$300",
    },
  ];

  return (
    <div>
      <AdminLayout>
        <Header />
        <div className="flex px-5 justify-center items-center h-[90vh] gap-4">
          <div className="w-full lg:w-4/5 bg-gray-50 h-full ">
            <div className="relative p-2 h-36 px-5  bg-[#5D5FEF] rounded-xl flex flex-col justify-between text-white">
              <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-6/12 lg:max-w-full lg:absolute xl:px-0 filter brightness-50">
                <svg
                  className="absolute left-0 hidden h-full  transform -translate-x-1/2 lg:block"
                  viewBox="0 0 100 100"
                  fill="#7D7FFF"
                  preserveAspectRatio="none slice"
                >
                  <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                  className="object-cover w-full h-56  shadow-lg  lg:shadow-none md:h-96 lg:h-full rounded-xl hidden lg:block"
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
              <div className="relative">
                <h1 className="text-lg font-semibold mb-2">Customer</h1>
                <div className="mb-4">
                  <h1 className="text-sm">
                    On this menu you will be able to create, edit, and also
                    delete
                  </h1>
                  <h1 className="text-sm mb-1">
                    the customer. Also you can manage it easily.
                  </h1>
                </div>
                <div className="flex gap-4 justify-between">
                  <button className="bg-white bg-opacity-20  px-5 py-1 rounded-lg flex items-center w-1/5 justify-center text-xs">
                    <span className="mr-2 text-xs">+</span>Add New Customer
                  </button>
                  <form className="flex flex-grow justify-between gap-2 items-center pl-4 bg-gray-50 rounded-xl p-1 w-2/5">
                    <FiSearch size={25} color="#D1D0D3" />
                    <input
                      type="text"
                      className="  bg-gray-50  w-full px-2 py-1 text-gray-800 text-xs"
                      placeholder="Search Customer"
                    />
                    <button className="bg-[#5D5FEF] px-5 py-1 rounded-lg text-xs">
                      Search
                    </button>
                  </form>
                  <button className="bg-white bg-opacity-20 backdrop-blur-sm flex gap-2 items-center px-5 py-1 rounded-lg w-1/8 text-xs">
                    <FiFilter size={25} />
                    Filter
                  </button>
                  <button className="bg-white bg-opacity-20 backdrop-blur-sm flex gap-2 items-center px-5 py-1 rounded-lg w-1/8 text-xs">
                    <FiRefreshCw size={25} />
                    Refresh
                  </button>
                  <button className="bg-white bg-opacity-20 backdrop-blur-sm px-5 py-1 rounded-lg w-1/20">
                    <FiPrinter size={25} />
                  </button>
                </div>
              </div>
            </div>
            <table className="w-full border-collapse text-sm text-gray-600 mt-4 ">
              <thead>
                <tr className="bg-gray-100 text-left border-b-2  border-gray-200 ">
                  <th className="px-4 py-1 rounded-tl-xl ">
                    <div className="gap-4 flex justify-between items-center">
                      <h1>Customer Name</h1>
                      <button className="hover:bg-gray-200 p-1 rounded-xl">
                        <FaSort />
                      </button>
                    </div>
                  </th>
                  <th className="px-4 py-1 ">
                    <div className="gap-4 flex justify-between items-center">
                      <h1>Level</h1>
                      <button className="hover:bg-gray-200 p-1 rounded-xl">
                        <FaSort />
                      </button>
                    </div>
                  </th>
                  <th className="px-4 py-1 ">
                    <div className="gap-4 flex justify-between items-center">
                      <h1>Favorite Menu</h1>
                      <button className="hover:bg-gray-200 p-1 rounded-xl">
                        <FaSort />
                      </button>
                    </div>
                  </th>
                  <th className="px-4 py-1 ">
                    <div className="gap-4 flex justify-between items-center">
                      <h1>Total Transaction</h1>
                      <button className="hover:bg-gray-200 p-1 rounded-xl">
                        <FaSort />
                      </button>
                    </div>
                  </th>
                  <th className="px-4 py-1  rounded-tr-xl">Action</th>
                </tr>
              </thead>
              <tbody>
                {customerData.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-100 text-gray-900 "
                    >
                      <td className="px-4 py-2 whitespace-no-wrap">
                        {item.customerName}
                      </td>
                      <td className="px-4 py-2 whitespace-no-wrap">
                        {item.level === "Warga" ? (
                          <span className="text-[#F46B45] bg-[#FEFBF6] rounded-l px-4 py-1">
                            {item.level}
                          </span>
                        ) : item.level === "Juragan" ? (
                          <span className="text-[#2F80ED] bg-[#F6FCFE] rounded-l px-4 py-1">
                            {item.level}
                          </span>
                        ) : item.level === "Konglomerat" ? (
                          <span className="text-[#7F00FF] bg-[#FEF5FF] rounded-l px-4 py-1">
                            {item.level}
                          </span>
                        ) : item.level === "Sultan" ? (
                          <span className="text-[#11998E] bg-[#F6FEF9] rounded-l px-4 py-1">
                            {item.level}
                          </span>
                        ) : (
                          item.level
                        )}
                      </td>
                      <td className="px-4 py-1 whitespace-no-wrap">
                        {item.favoriteMenu}
                      </td>
                      <td className="px-4 py-1 whitespace-no-wrap">
                        {item.totalTransaction}
                      </td>
                      <td className="px-4 py-1 whitespace-no-wrap flex justify-between">
                        <button className="">
                          <div className="flex gap-4 bg-[#FAFAFA] px-4 py-1 rounded-lg">
                            <FiEye size={20} />
                            <h1>Detail</h1>
                          </div>
                        </button>
                        <button className="">
                          <div className="flex gap-4 bg-[#FAFAFA] px-4 py-1 rounded-lg">
                            <FiEdit size={20} />
                          </div>
                        </button>
                        <button className="">
                          <div className="flex gap-4 bg-[#FEF5F6] px-4 py-1 rounded-lg">
                            <FiTrash size={20} color="#F02D3A" />
                          </div>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className=" px-1 py-1  my-2 rounded-xl bg-gray-100 text-sm">
              <div className="flex justify-between items-center">
                <h1 className="text-gray-600">Showing 10 Data Customers</h1>
                <div className="flex gap-2 text-gray-600 font-semibold">
                  <button className="bg-white px-5 py-1 rounded-lg text-black shadow-md transform rotate-1">
                    1
                  </button>
                  <button className=" px-1 py-1  rounded-lg">2</button>
                  <button className="px-1 py-1  rounded-lg">3</button>
                  <button className="px-1 py-1  rounded-lg">. . .</button>
                  <button className="px-1 py-1  rounded-lg">38</button>
                  <button className="px-1 py-1  rounded-lg">Next</button>
                </div>
              </div>
            </div>
            <div className="h-8"></div>
          </div>
          <div className="w-1/5  bg-gray-50 h-full pr-4  hidden lg:block">
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
          </div>
        </div>
      </AdminLayout>
    </div>
  );
}
