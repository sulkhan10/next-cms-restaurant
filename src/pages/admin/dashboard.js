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
          <div className="w-4/5 bg-gray-50 h-full ">
            <div className=" p-5 h-48 bg-[#5D5FEF] rounded-3xl flex flex-col justify-between text-white">
              <h1 className="text-3xl font-semibold mb-2">Customer</h1>
              <div className="">
                <h1 className="text-xl">
                  On this menu you will be able to create, edit, and also delete
                </h1>
                <h1 className="text-xl mb-1">
                  the customer. Also you can manage it easily.
                </h1>
              </div>
              <div className="flex gap-4 justify-between">
                <button className="bg-white bg-opacity-20  px-5 py-2 rounded-lg flex items-center w-1/5 justify-center">
                  <span className="mr-2 text-2xl">+</span>Add New Customer
                </button>
                <form className="flex flex-grow justify-between gap-2 items-center pl-4 bg-gray-50 rounded-xl p-1 w-2/5">
                  <FiSearch size={25} color="#D1D0D3" />
                  <input
                    type="text"
                    className="  bg-gray-50  w-full px-2 py-1 text-gray-800"
                    placeholder="Search Customer"
                  />
                  <button className="bg-[#5D5FEF] px-5 py-2 rounded-lg">
                    Search
                  </button>
                </form>
                <button className="bg-white bg-opacity-20 flex gap-2 items-center px-5 py-2 rounded-lg w-1/8">
                  <FiFilter size={25} />
                  Filter
                </button>
                <button className="bg-white bg-opacity-20 flex gap-2 items-center px-5 py-2 rounded-lg w-1/8">
                  <FiRefreshCw size={25} />
                  Refresh
                </button>
                <button className="bg-white bg-opacity-20  px-5 py-2 rounded-lg w-1/20">
                  <FiPrinter size={25} />
                </button>
              </div>
            </div>
            <table className="w-full border-collapse  text-gray-600 mt-4 ">
              <thead>
                <tr className="bg-gray-100 text-left border-b-2 border-gray-200 ">
                  <th className="px-4 py-2 rounded-tl-xl">
                    <div className="gap-4 flex justify-between items-center">
                      <h1>Customer Name</h1>
                      <button className="hover:bg-gray-200 p-1 rounded-xl">
                        <FaSort />
                      </button>
                    </div>
                  </th>
                  <th className="px-4 py-2 ">
                    <div className="gap-4 flex justify-between items-center">
                      <h1>Level</h1>

                      <button className="hover:bg-gray-200 p-1 rounded-xl">
                        <FaSort />
                      </button>
                    </div>
                  </th>
                  <th className="px-4 py-2 ">
                    <div className="gap-4 flex justify-between items-center">
                      <h1>Favorite Menu</h1>
                      <button className="hover:bg-gray-200 p-1 rounded-xl">
                        <FaSort />
                      </button>
                    </div>
                  </th>
                  <th className="px-4 py-2 ">
                    <div className="gap-4 flex justify-between items-center">
                      <h1>Total Transaction</h1>
                      <button className="hover:bg-gray-200 p-1 rounded-xl">
                        <FaSort />
                      </button>
                    </div>
                  </th>
                  <th className="px-4 py-2  rounded-tr-xl">Action</th>
                </tr>
              </thead>
              <tbody>
                {customerData.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-100 text-gray-900"
                    >
                      <td className="px-4 py-2 whitespace-no-wrap">
                        {item.customerName}
                      </td>
                      <td className="px-4 py-2 whitespace-no-wrap">
                        {item.level === "Warga" ? (
                          <span className="text-[#F46B45] bg-[#FEFBF6] rounded-l px-4 py-2">
                            {item.level}
                          </span>
                        ) : item.level === "Juragan" ? (
                          <span className="text-[#2F80ED] bg-[#F6FCFE] rounded-l px-4 py-2">
                            {item.level}
                          </span>
                        ) : item.level === "Konglomerat" ? (
                          <span className="text-[#7F00FF] bg-[#FEF5FF] rounded-l px-4 py-2">
                            {item.level}
                          </span>
                        ) : item.level === "Sultan" ? (
                          <span className="text-[#11998E] bg-[#F6FEF9] rounded-l px-4 py-2">
                            {item.level}
                          </span>
                        ) : (
                          item.level
                        )}
                      </td>
                      <td className="px-4 py-2 whitespace-no-wrap">
                        {item.favoriteMenu}
                      </td>
                      <td className="px-4 py-2 whitespace-no-wrap">
                        {item.totalTransaction}
                      </td>
                      <td className="px-4 py-2 whitespace-no-wrap flex justify-between">
                        <button className="">
                          <div className="flex gap-4 bg-[#FAFAFA] px-4 py-2 rounded-lg">
                            <FiEye size={25} />
                            <h1>Detail</h1>
                          </div>
                        </button>
                        <button className="">
                          <div className="flex gap-4 bg-[#FAFAFA] px-4 py-2 rounded-lg">
                            <FiEdit size={25} />
                          </div>
                        </button>
                        <button className="">
                          <div className="flex gap-4 bg-[#FEF5F6] px-4 py-2 rounded-lg">
                            <FiTrash size={25} color="#F02D3A" />
                          </div>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className=" px-5 py-2 my-2 rounded-xl bg-gray-100">
              <div className="flex justify-between items-center">
                <h1 className="text-gray-600">Showing 10 Data Customers</h1>
                <div className="flex gap-2 text-gray-600 font-semibold">
                <button className="bg-white px-5 py-1 rounded-lg text-black shadow-md transform rotate-1">
  1
</button>

                  <button className=" px-5 py-2 rounded-lg">
                    2
                  </button>
                  <button className="px-5 py-2 rounded-lg">
                    3
                  </button>
                  <button className="px-5 py-2 rounded-lg">
                    . . .
                  </button>
                  <button className="px-5 py-2 rounded-lg">
                    38
                  </button>
                  <button className="px-5 py-2 rounded-lg">
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div className="h-8">

            </div>
          </div>
          <div className="w-1/5  bg-blue-500 h-full"></div>
        </div>
      </AdminLayout>
    </div>
  );
}
