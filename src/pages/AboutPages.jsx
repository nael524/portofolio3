import React from "react";
import photo from "../assets/images/Sukma.jpg"; // ganti dengan foto kamu
import "../assets/css/AboutPages.css";
const AboutPages = () => {
  return (
    <section className="about" id="about">
      <h2 className="about1">About</h2>
      <p className="text-center text-gray-500 mb-12">
        Hallo Perkenalkan nama saya suka mealti biasa diapnggil amel,saya
        seorang mahasiswa universitas satya terra bhinneka jurusan informatika ,
        saya memilki pengalaman konten kreator dan pernah menjalani praktek
        kerja dilapangan{" "}
      </p>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Foto */}
        <div className="w-full md:w-1/2">
          <img src={photo} alt="Profile" className="prof" />
        </div>

        {/* Detail Kanan */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-bold mb-2">
            UI/UX Designer & Web Developer.
          </h3>
          <p className="text-gray-600 italic mb-4">
          Ini beberapa tentang saya atau biodata saya
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <p>
              <span className="font-bold text-green-600">➤ Birthday:</span> 15 Januari 2006
            </p>
            <p>
              <span className="font-bold text-green-600">➤ Age:</span> 19
            </p>
             
            <p>
              <span className="font-bold text-green-600">➤ Phone:</span> 0812-6910-6029
              
            </p>
            <p>
              <span className="font-bold text-green-600">➤ Email:</span>{" "}
              sukmamelatii1501@gmail.com
            </p>
            <p>
              <span className="font-bold text-green-600">➤ Address:</span> Jl Gambir Pasar 8 Gg karya Rotan 8
            </p>
            <p>
              <span className="font-bold text-green-600">➤ Freelance:</span>{" "}
              Available
            </p>
          </div>

          <p className="text-gray-600 mt-6 text-sm leading-relaxed">
           
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPages;
