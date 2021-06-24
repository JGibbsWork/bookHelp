import React from 'react';
import { Line, defaults } from "react-chartjs-2";



export default function SingleResult (props) {

  let localResults = props.localResults.map((a) => a.value)
  let stateResults = props.stateResults.map((a) => a.value)
  let nationalResults = props.nationalResults.map((a) => a.value)
  let range = props.localResults.map((a) => a.date)

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [mnth, day, date.getFullYear()].join(" ");
  }

  let date = convert(props.searchDate);

  return (
    <>
    <div className = "chartCard">
      <a className="date">{date}</a>
      <div className="cardTitle">
        <a>RESULTS FOR: </a>
        <a className="term">{props.term}</a>
        <a> IN: </a>
        <a className="city">{props.city}</a>
      </div>
      <Line
          data={{
            labels: range,
            datasets: [
              {
                label: 'City Results',
                data: localResults,
                backgroundColor: '#CF6766',
                borderColor: '#CF6766',
              },
              {
                label: 'State Results',
                data: stateResults,
                backgroundColor: '#30415D',
                borderColor: '#30415D',
              },
              {
                label: 'National Results',
                data: nationalResults,
                backgroundColor: '#8EAEBD',
                borderColor: '#8EAEBD',
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

