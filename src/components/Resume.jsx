import React from "react";
import "../assets/css/Resume.css";

const Resume = () => {
  return (
    <section className="resume-section-main">
      <h2 className="resume-heading">Resume</h2>
      <p className="resume-sub">Perjalanan karir dan pendidikan saya sejauh ini</p>

      <div className="resume-wrapper">
        {/* KIRI */}
        <div className="resume-left">
          <div className="resume-item">
            <h3 className="section-title">Summary</h3>
            <div className="timeline">
              <div className="dot" />
              <div className="content">
                <h4 className="name">Sukma Melati</h4>
                <p className="italic">
                  Mahasiswa Informatika, berpengalaman dalam konten kreator, desain UI/UX, dan pengembangan web.
                </p>
                <ul>
                  <li>Jl Gambir Pasar 8 Gg Karya Rotan 8</li>
                  <li>0812-6910-6029</li>
                  <li>sukmamelatii1501@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="resume-item">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              <div className="dot" />
              <div className="content">
                <p>SDN 107405</p>
                <p>SMPN 2</p>
                <p>SMK Tritech Informatika Medan</p>
                <p>S1 Informatika – Universitas Satya Terra Bhinneka</p>
              </div>
            </div>
          </div>
        </div>

        {/* KANAN */}
        <div className="resume-right">
          <div className="resume-item">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              <div className="dot" />
              <div className="content">
                <h4 className="name">UI/UX & Content Creator</h4>
                <span><strong>2022 - Sekarang</strong></span>
                <p className="italic">Freelance & Kampus</p>
                <ul>
                  <li>Mendesain tampilan aplikasi menggunakan Figma</li>
                  <li>Membuat konten edukatif seputar teknologi & coding</li>
                  <li>Berperan dalam tim project UX research</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="resume-item">
            <h3 className="section-title">Projects</h3>
            <div className="timeline">
              <div className="dot" />
              <div className="content">
                <p><strong>Telegram UX Analysis</strong><br />Analisis pengalaman pengguna Telegram dalam konteks HCI.</p>
                <p><strong>Canva User Sentiment</strong><br />Penelitian berbasis TAM dan analisis sentimen pengguna.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
