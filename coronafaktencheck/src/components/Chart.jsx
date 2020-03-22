import React, { useState , useEffect, useRef} from 'react';
import Chart from 'chart.js';

import colors from '../styles/colors'


export const PieChart = (props) => {
      const chartRef = useRef();
      console.log(props);
      const {real, fake, unknown} = props;
    //   const percentage = props.percentage;

      const [canvasSeizes] = useState({
        height: '250px',
        width: '250px'
      })

      const data = {
        datasets: [{
          data: [real, fake , unknown],
          backgroundColor: [colors.darkColor , '#ff9f31' , '#b9a89b']
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ['Korrekte News', 'Fake News', 'Keine Zuordnung'],
         };

         const options = {
          cutoutPercentage: 70,
          rotation: -0.4 * Math.PI
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
        <canvas 
        ref={el => (chartRef.current = el)} 
				style={{
					width: '100%',
					height: '100%',
				}} />
      </div>
     )
}