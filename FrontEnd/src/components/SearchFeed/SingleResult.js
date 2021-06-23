import React from 'react';
import { Line, defaults } from "react-chartjs-2";

function changeToXY(arr) {
  return arr.map(({ key1: x, key2: y, ...rest }) => ({
    x, y, ...rest }));
}


export default function SingleResult (props) {

  let localResults = props.localResults.map((a) => a.value)
  let stateResults = props.stateResults.map((a) => a.value)
  let nationalResults = props.nationalResults.map((a) => a.value)
  let range = props.localResults.map((a) => a.date)

  return (
    <>
    <h3>eeeeeeeee</h3>
    <Line
        data={{
          labels: range,
          datasets: [
            {
              label: 'City Results',
              data: localResults,
              backgroundColor: 'blue',
              borderColor: 'blue',
              borderWidth: 1,
            },
            {
              label: 'State Results',
              data: stateResults,
              backgroundColor: 'orange',
              borderColor: 'orange',
              borderWidth: 1,
            },
            {
              label: 'National Results',
              data: nationalResults,
              backgroundColor: 'red',
              borderColor: 'red',
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: false,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </>
  )
}

