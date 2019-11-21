import React from 'react';
import './style.css';
import ReadMoreReact from 'read-more-react';

const Isi = (props) => {
    return (
        <div className="wrapper">
            <h1>{props.news}</h1>
            <div className="bagian-kiri">
                <div className="atas-kiri">
                    <img src={props.img1} className="imageslider" />
                    <p className="tanggal">{props.tanggal1}</p>
                    <p className="judul">{props.judul1}</p>
                    <p className="deskrip"><ReadMoreReact text={props.deskrip} min={10} ideal={20} max={25}
                        readMoreText="Read More..." /></p>
                </div>
                <div className="bawahkiri">
                    <div className="bawah-kiri-kiri">
                        <img src={props.img2} className="imageslider" />
                        <p className="tanggal">{props.tanggal2}</p>
                        <p className="judul">{props.judul2}</p>
                        <p className="deskrip"><ReadMoreReact text={props.deskrip} min={10} ideal={20} max={25}
                            readMoreText="Read More..." /></p>
                    </div>
                    <div className="bawah-kiri-kanan">
                        <img src={props.img3} className="imageslider" />
                        <p className="tanggal">{props.tanggal3}</p>
                        <p className="judul">{props.judul3}</p>
                        <p className="deskrip"><ReadMoreReact text={props.deskrip} min={10} ideal={20} max={25}
                            readMoreText="Read More..." /></p>
                    </div>
                </div>
            </div>

            <div className="bagian-kanan">
                <div className="atas-kanan">
                    <img src={props.img4} className="imageslider" />
                    <p className="tanggal">{props.tanggal4}</p>
                    <p className="judul">{props.judul4}</p>
                    <p className="deskrip"><ReadMoreReact text={props.deskrip} min={10} ideal={20} max={25}
                        readMoreText="Read More..." /></p>
                </div>
                <div className="bawahkanan">
                    <div className="bawah-kanan-kiri">
                        <img src={props.img5} className="imageslider" />
                        <p className="tanggal">{props.tanggal5}</p>
                        <p className="judul">{props.judul5}</p>
                        <p className="deskrip"><ReadMoreReact text={props.deskrip} min={10} ideal={20} max={25}
                            readMoreText="Read More..." /></p>
                    </div>
                    <div className="bawah-kanan-kanan">
                        <img src={props.img6} className="imageslider" />
                        <p className="tanggal">{props.tanggal6}</p>
                        <p className="judul">{props.judul6}</p>
                        <p className="deskrip"><ReadMoreReact text={props.deskrip} min={10} ideal={20} max={25}
                            readMoreText="Read More..." /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Isi;