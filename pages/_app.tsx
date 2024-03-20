import { useEffect, useState } from 'react';
import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from "next/head";
import Header from '../components/header';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../components/footer";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Shr3wd Blog</title>
        <meta name="description" content="Trang web chứa những bài viết xàm xí của Shr3wd - Minh Trí" />
        <meta name="description" content="Writeup, Blog" />
        <meta name="description" content=" CTF Player, CTF Warrior, CTF VKU, CTF VSL, Cyber Security, Web, RE, PWN, Reverse Engineering, Binary Exploitation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/avatar.png" />
      </Head>
      <Header />
      <QueryClientProvider client={queryClient}>
        <div className={"dark:bg-[#171717]"}>
          {isMobile && (
            <div className="bg-yellow-500 p-4 text-center text-red-700">
              Vui lòng sử dụng máy tính để có trải nghiệm tốt nhất, lười làm responsive quá :v
            </div>
          )}
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
      <Footer />
    </div>
  )
}
