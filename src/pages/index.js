import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
     
    <div className="relative h-screen bg-gray-50 flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-gray-50 transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#5D5FEF] text-gray-50">
            Admin only
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Welcome to{' '}
            <br className="hidden md:block" />
            Square{' '}
            <span className="inline-block text-[#5D5FEF]">
              Admin Dashboard
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Untuk mengakses halaman ini, anda harus login terlebih dahulu.
            Tekan tombol Login dibawah ini
          </p>
          <div className="flex items-center">
            <Link
              href="/admin/dashboard"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-gray-50 transition duration-200 rounded shadow-md bg-[#5D5FEF] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </Link>   

          
          </div>
        </div>
      </div>
    </div>

  );
}
