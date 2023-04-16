import '@/styles/globals.css'
import { Quicksand } from 'next/font/google'
const quicksand = Quicksand({subsets: ['latin']  })


export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${quicksand.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
