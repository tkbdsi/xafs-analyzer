import React, {useState, useEffect} from 'react';
//var nj = require('numjs');

// My Utility Functions
import transpose from './mathUtils/transpose';
import copy from './mathUtils/copy';
import GJE from './mathUtils/GJE';

// Third Party Components
import MakePlot from './components/MakePlot/MakePlot';

// Example Data Files
let cumetal = require('./referenceData/cu_metal.json');

let mat = [[1, -1], [0, 3], [1, 2.5], [2, 5], [3, 4], [5, 2], [7, 5], [9, 4]];
GJE(copy(mat),4);


function App() {
  const [energy, setEnergy] = useState([]);
  const [i0, setI0] = useState([]);
  const [itrans, setItrans] = useState([]);
  const [uE, setUE] = useState([]);

  useEffect( () => {

    setEnergy(cumetal.data.map( (entry) => entry.energy ));
    setI0(cumetal.data.map( (entry) => entry.i0 ));
    setItrans(cumetal.data.map( (entry) => entry.itrans ));
    //console.log(transpose(copy(mat)));
  
  },[])

  useEffect( () => {
    let val = [];
    for (let i = 0; i < i0.length; i++) {
      let temp = i0[i]/itrans[i];
      val.push(Math.log(temp));
    }
    setUE(val);
  }, [i0, itrans])

  useEffect( () => {
    //makeXMat(copy(energy,1));
  }, [energy])

  return (
    <div>
      <MakePlot xData={energy} yData={i0} title="Incident Intensity" xText="Energy (eV)" yText="i0" />
      <MakePlot xData={energy} yData={itrans} title="Transmitted Intensity" xText="Energy (eV)" yText="itrans" />
      <MakePlot xData={energy} yData={uE} title="Absorption Coefficient" xText="Energy (eV)" yText="uE" />
    </div>
  );
}

export default App;
