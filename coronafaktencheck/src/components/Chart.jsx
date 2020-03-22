import React, { useState , useEffect, useRef} from 'react';
import Chart from 'chart.js';

import colors from '../styles/colors'


export const PieChart = (props) => {
      const chartRef = useRef();
      console.log(props);
      const news = props.news;
      const percentage = props.percentage;

      const [canvasSeizes] = useState({
        height: '250px',
        width: '250px'
      })

      const data = {
        datasets: [{
          data: percentage,
          backgroundColor: colors.orange
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          news,
          ],
         };

         const options = {
          cutoutPercentage: 70,
          rotation: -0.4 * Math.PI,
          animation: {
            duration: 2 // general animation time
        },
          hover: {
              animationDuration: 0 // duration of animations when hovering an item
        },
          responsiveAnimationDuration: 0 // animation duration after a resize
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
        <p>{"Diese Nachrichten sind zu " + percentage + " % FAKE NEWS"}</p>
      </div>
     )
}