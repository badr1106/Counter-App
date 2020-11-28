import React, { Component } from "react";
import Counter from "./containers/Counter";
import MaterialSlider from "./components/MaterialSlider";
import Toggle from "./components/Toggle";
import CollapsableControls from "./components/CollapsableControls";
import Controls from "./containers/Controls";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Counter counterType={"counter"} />
          </div>
          <div className="col-6">
            <Counter counterType={"reverseCounter"} isDisabled={true} />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-6">
            <CollapsableControls>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4"></div>
                  <div className="col-4">
                    <Controls counterType={"counter"} isDisabled={false} />
                  </div>
                  <div className="col-4"></div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <MaterialSlider />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Toggle />
                  </div>
                </div>
              </div>
            </CollapsableControls>
          </div>
          <div className="col-6">
            <CollapsableControls>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4"></div>
                  <div className="col-4">
                    <Controls
                      counterType={"reverseCounter"}
                      isDisabled={true}
                      {...this.props}
                    />
                  </div>
                  <div className="col-4"></div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <MaterialSlider />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Toggle />
                  </div>
                </div>
              </div>
            </CollapsableControls>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
