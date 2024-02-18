import React, {useState} from 'react';
import {Cars} from "./components/Cars";
import {CarForm} from "./components/CarForm";
import {ICar} from "./interfaces/car.interface";

const App = () => {

    return (
        <div>
          <Cars/>
        </div>
    );
};

export default App;