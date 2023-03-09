import React, { Component } from "react";
import LifeCycleClass from "./LifeCycleClass";
import LifeCycleFunction from "./LifeCycleFunction";

export default class UseEffect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHide: false,
    };
  }

  render() {
    const { isHide } = this.state;
    return (
      <div style={{ padding: "50px" }}>
        <h1>Contoh Lifecycle Component dan useEffect</h1>
        <hr />
        <button onClick={() => this.setState({ isHide: !isHide })}>
          {isHide ? "Tampilkan" : "Sembunyikan"}
        </button>
        {/* {!isHide && <LifeCycleClass />} */}
        {!isHide && <LifeCycleFunction />}
      </div>
    );
  }
}
