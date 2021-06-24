import React from 'react';
import { Line, defaults } from "react-chartjs-2";



export default function SingleResult (props) {

  let localResults = props.localResults.map((a) => a.value)
  let stateResults = props.stateResults.map((a) => a.value)
  let nationalResults = props.nationalResults.map((a) => a.value)
  let range = props.localResults.map((a) => a.date)

  return (
    <>
    <div className = "chartCard">
      <h4>{props.term}</h4>
      <h4>{props.city}</h4>
      <h4>{props.searchDate}</h4>
      <Line
          data={{
            labels: range,
            datasets: [
              {
                label: 'City Results',
                data: localResults,
                backgroundColor: 'blue',
                borderColor: 'blue',
              },
              {
                label: 'State Results',
                data: stateResults,
                backgroundColor: 'orange',
                borderColor: 'orange',
              },
              {
                label: 'National Results',
                data: nationalResults,
                backgroundColor: 'red',
                borderColor: 'red',
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: true,
            scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false,
                  drawOnChartArea: false,
                  drawTicks: false,
                }
              },
              y: {
                grid: {
                  display: false,
                  drawBorder: false,
                  drawOnChartArea: false,
                  drawTicks: false,
                },
              },
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}

        />
    </div>
    </>
  )
}

