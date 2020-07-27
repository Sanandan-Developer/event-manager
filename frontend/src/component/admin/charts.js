import React from 'react';
import {Chart} from 'react-charts'

export default function MyChart() {
    const data = React.useMemo(
        ()=>[
            {
                label: "Series 1",
                data: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]
            },
        ]
    )
    const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
    )
     
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        return <div
          style={{
            padding: "1rem",
            paddingLeft: "10rem",
            width: '50vw',
            height: '60vh'
          }}
        >
           <Chart data={data} axes={axes} />
        </div>
}