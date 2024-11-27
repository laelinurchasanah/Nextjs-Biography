import React from "react";
import Head from "next/head";
import {FaLaptopCode} from 'react-icons/fa';

const Biography: React.FC = () => {
  return (
    <>
      <Head>
        <title>Biografi - Laeli Nurchasanah</title>
        <meta name="description" content="Halaman biografi Laeli Nurchasanah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center min-h-screen  bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg text-center border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Biography</h1>
          <div className="flex items-center justify-center mb-4">
            <FaLaptopCode className="h-12 w-12 text-gray-700" />
          </div>
          <p className="text-gray-700 mt-2">
            <strong>Laeli Nurchasanah</strong> is an individual currently
            exploring the world of programming. With a strong passion for
            learning, Laeli is continuously acquiring knowledge and skills in
            coding to pursue a career in technology.
          </p>
          <p className="text-gray-700 mt-2">
            In addition to programming, Laeli enjoys watching movies, series,
            and other captivating content. This hobby serves not only as a form
            of entertainment but also as a source of inspiration and relaxation
            amid the busy process of learning.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Laeli</strong> believes that with consistent effort and unwavering
            determination, any dream can be realized. She is a true example of
            someone who is growing and progressing towards becoming the best
            version of herself.
          </p>
          <p className="text-gray-400 text-[12px] mt-10">
          &copy; 2023 Laeli Nurchasanah. All rights reserved.
        </p>
        </div>
      </main>
    </>
  );
};

export default Biography;
