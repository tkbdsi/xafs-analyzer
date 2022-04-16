import React from 'react';

// Third Party Components
import Plot from 'react-plotly.js';

const MakePlot = ({xData, yData, title, xText, yText}) => {
  return (
    <Plot
        data={[
          {
            x: xData,
            y: yData,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={ 
          { width: 540, 
            height: 400, 
            title: title, 
            xaxis: {
              title: {
                text: xText
              }
            },
            yaxis: {
              title: {
                text: yText
              }
            }
          } 
        }
      />
  )
}

export default MakePlot;