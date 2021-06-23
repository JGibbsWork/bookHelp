import React from 'react';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from "@progress/kendo-react-charts";


export default function SingleResult (props) {
  let localData = props.localResults.map((a) => a.value)
  let stateResults = props.stateResults.map((a) => a.value)
  let nationalResults = props.nationalResults.map((a) => a.value)
  let range = props.localResults.map((a) => a.date)

  let series = [
    {
      name: "Local",
      data: localData,
      color: "red",
    },
    {
      name: "State",
      data: stateResults,
      color: "blue",
    },
    {
      name: "National",
      data: nationalResults,
      color: "orange",
    },
  ];

  return (
    <>
    <h3>eeeeeeeee</h3>
    <Chart pannable zoomable style={{ height: 1000 }}>
      <ChartTitle text="Application status - last 3 months" />
      <ChartLegend position="top" orientation="horizontal" />
      <ChartValueAxis>
        <ChartValueAxisItem title={{ text: "Job Positions" }} min={0} max={100} />
      </ChartValueAxis>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={range} />
      </ChartCategoryAxis>
      <ChartSeries>
        {series.map((item, idx) => (
          <ChartSeriesItem
            key={idx}
            type="line"
            tooltip={{ visible: true }}
            data={item.data}
            name={item.name}
          />
        ))}
      </ChartSeries>
    </Chart>
    </>
  )
}

