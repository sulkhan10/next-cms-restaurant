export default function Header() {
  return (
    <div className=" p-5 flex justify-between">
      <div className="w-1/2 border-b-2 pb-4">
        <h1 className="text-3xl font-semibold text-gray-800">Customer</h1>
        <h1 className="text-xl  text-gray-800">
          You can manage and organize your customer and other things here
        </h1>
      </div>
      <div className="w-1/2 flex justify-around items-end text-center" >
        <h1 className="text-xl  text-gray-800 border-b-4 border-blue-400 w-1/3 pb-2">Customer</h1>
        <h1 className="text-xl  text-gray-800 border-b-4 w-1/3 pb-2">Promo</h1>
        <h1 className="text-xl  text-gray-800 border-b-4 w-1/3 pb-2">Voucher</h1>
      </div>
    </div>
  );
}
