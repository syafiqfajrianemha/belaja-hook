import React, { Component } from "react";
import Hitung from "../Components/Hitung";

export default class Home extends Component {
  render() {
    return (
      <div style={{ padding: "50px" }}>
        <h1>Aplikasi Penghitung Jumlah Pengunjung Mall Matahari</h1>
        <hr />
        <Hitung />
        <hr />
        <footer>
          <p>Syafiq Fajrian Emha 2023</p>
        </footer>
      </div>
    );
  }
}
