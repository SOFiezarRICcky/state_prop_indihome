import React from 'react';
import Navbar from './state/State';
import Isi from './props/Prop';
import './style/styles.css';



function App() {
  return (
    <div className="wrapperapp">
      <Navbar />
      <Isi img1={require('./props/slider1.jpg')} img2={require('./props/slider3.jpg')} img3={require('./props/slider2.jpg')}
      img4={require('./props/slider3.jpg')} img5={require('./props/slider2.jpg')} img6={require('./props/slider1.jpg')}
      news="News" tanggal1="20 Oktober 2019" tanggal2="02 Oktober 2019" tanggal3="21 June 2019"
        tanggal4="19 September 2019" tanggal5="13 May 2019" tanggal6="03 March 2019"
        judul1="Pengumuman Pemenang Undian Indihome" judul2="Pemenang Undian Indihome Miliarder Paket Semerbak" judul3="Ini Dia Daftar Pemenang Undian 30 Paket Umroh"
        judul4="Kini Indihome Hadir di Pulau Rote" judul5="Pemenang Undian Indihome Miliarder Paket Fantastic" judul6="Pemenang Indihome Family Vaganza"
        deskrip="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora incidunt accusamus nostrum ducimus!"/>
    </div>
  );
}

export default App;
