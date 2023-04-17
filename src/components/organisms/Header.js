export default function Header() {
  return (
    <div className=" px-8 pt-2 flex mb-2 justify-between">
      <div className="w-1/2 border-b-2 pb-2">
        <h1 className="text-xl font-semibold text-gray-800">Customer</h1>
        <h1 className="text-sm py-2  text-gray-800">
          You can manage and organize your customer and other things here
        </h1>
      </div>
      <div className="w-1/2 flex justify-around items-end text-center" >
        <h1 className="text-sm t text-[#5D5FEF] border-b-4 border-[#5D5FEF] w-1/3 pb-2 font-semibold">Customer</h1>
        <h1 className="text-sm  text-gray-800 border-b-4 w-1/3 pb-2 font-semibold">Promo</h1>
        <h1 className="text-sm  text-gray-800 border-b-4 w-1/3 pb-2 font-semibold">Voucher</h1>
      </div>
    </div>
  );
}
