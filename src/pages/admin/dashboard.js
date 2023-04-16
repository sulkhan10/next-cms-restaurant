import AdminLayout from "@/components/layouts/AdminLayout";
import Header from "@/components/organisms/Header";
import { FiSearch,FiFilter,FiRefreshCw,FiPrinter ,FiEdit,FiTrash,FiEye} from "react-icons/fi";
export default function Dashboard() {
  return (
    <div>
      <AdminLayout>
        <Header />
        <div className="flex px-5 justify-center items-center h-[90vh] gap-4">
          <div className="w-4/5 bg-gray-50 h-full">
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
                  <FiFilter size={25}  />
                  Filter
                </button>
                <button className="bg-white bg-opacity-20 flex gap-2 items-center px-5 py-2 rounded-lg w-1/8">
                  <FiRefreshCw size={25}  />
                  Refresh
                </button>
                <button className="bg-white bg-opacity-20  px-5 py-2 rounded-lg w-1/20">
                  <FiPrinter size={25}  />
                </button>
              </div>
            </div>
            <table className="w-full border-collapse  text-gray-600">
  <thead>
    <tr className="bg-gray-100 text-left border-b-2 border-gray-200">
      <th className="px-4 py-2   ">Customer Name</th>
      <th className="px-4 py-2   ">Level</th>
      <th className="px-4 py-2   ">Favorite Menu</th>
      <th className="px-4 py-2  ">Total Transaction</th>
      <th className="px-4 py-2  ">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="px-4 py-2 whitespace-no-wrap">John Doe</td>
      <td className="px-4 py-2 whitespace-no-wrap">Gold</td>
      <td className="px-4 py-2 whitespace-no-wrap">Burger</td>
      <td className="px-4 py-2 whitespace-no-wrap">$500</td>
    </tr>
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="px-4 py-2 whitespace-no-wrap">Jane Smith</td>
      <td className="px-4 py-2 whitespace-no-wrap">Silver</td>
      <td className="px-4 py-2 whitespace-no-wrap">Pizza</td>
      <td className="px-4 py-2 whitespace-no-wrap">$250</td>
      <td className="px-4 py-2 whitespace-no-wrap">
        <button>
            <FiEdit size={25} />
        </button>
        <button>
            <FiTrash size={25} />
        </button>
        <button>
            <FiEye size={25} />
        </button>
        </td>
    </tr>
    {/* Add more rows as needed */}
  </tbody>
</table>

          </div>
          <div className="w-1/5  bg-blue-500 h-full"></div>
        </div>
      </AdminLayout>
    </div>
  );
}
