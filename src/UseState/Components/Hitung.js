import React, { useState } from "react";

export default function Hitung() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <div>
      <p>Jumlah Pengunjung : {jumlah} pengunjung</p>
      <button onClick={() => setJumlah(jumlah + 1)}>Tambah Pengunjung</button>
    </div>
  );
}

// import React, { Component } from "react";

// export default class Hitung extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       jumlah: 0,
//     };
//   }

//   render() {
//     const { jumlah } = this.state;
//     return (
//       <div>
//         <p>Jumlah Pengunjung : {jumlah} pengunjung</p>
//         <button onClick={() => this.setState({ jumlah: jumlah + 1 })}>
//           Tambah Pengunjung
//         </button>
//       </div>
//     );
//   }
// }
