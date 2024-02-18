import React from 'react';
import {Cars} from "./components/Cars";
import {CarForm} from "./components/CarForm";

const App = () => {
    return (
        <div>
            <CarForm/>
          <Cars/>
        </div>
    );
};

export default App;