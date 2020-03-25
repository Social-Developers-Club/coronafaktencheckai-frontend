import React, { useEffect, useRef} from 'react';
import Chart from 'chart.js';

import colors from '../styles/colors'


export const PieChart = (props) => {
      const chartRef = useRef();
      const {real, fake, unknown} = props;

      const data = {
        datasets: [{
          data: [real, fake , unknown],
          backgroundColor: [colors.darkColor , colors.fakeOrange , colors.unknownColor]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ['Korrekte News', 'Fake News', 'Keine Zuordnung'],
      };

        const options = {
          cutoutPercentage: 70,
          rotation: -0.4 * Math.PI,
          aspectRatio: 2,
          //   responsive: true,
          maintainAspectRatio: true,
        }

      useEffect(()=> 
      {
       new Chart(chartRef.current, {
            type: 'doughnut',
            data: data,
            options: options        
          });
      }
      ) 
  
      return (
      <div>
        <canvas ref={el => (chartRef.current = el)} 
            style={{
                height: '300px',
            }} 
        />
      </div>
     )
}