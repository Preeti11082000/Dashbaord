import React, { useMemo } from "react";
import Chart from "react-apexcharts";



function BarchartComponent({
  errorHandle = false,
  chartname,
  data = [],
  colors = [],
  categories = [],
  loading = false,
  Chartheight,
  toolbar = false,
  plotOptions = "top",
  dataLabelsFormatter,
  fontSize = "10px",
  fontColors = ["#304758"],
  dataLabels = false,
  axisTicks = false,
  xaxisLabelFontSize = "12px",
  hideOverlappingLabels = false,
  Xaxisrotate,
  datalabelRotate = -20,
  Chartwidth,
  tooltip = false,
}) {
  const handleClick = (event, chartContext, config) => {
    if (config.dataPointIndex >= 0) {
      const url = categories[config.dataPointIndex]; // Assuming the URLs are provided in the categories array

      // Redirect to the URL
      window.open(url, "_blank"); // Opens the URL in a new tab
    }
  };
  const interval = Math.ceil(categories.length); // Adjust the number of labels to show as needed
  const BarChart = useMemo(() => {
    return {
      series: [
        {
          name: chartname,
          data: data,
        },
      ],
      options: {
        // grid: { show: false },
        colors: colors,
        chart: {
          type: "bar",
          toolbar: {
            show: toolbar,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "30px",
            horizontal: false,
            dataLabels: {
              position: plotOptions, // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: dataLabels,
          formatter: function(val, index) {
            return val.toFixed(0);
          },
          offsetY: datalabelRotate,
          style: {
            fontSize: fontSize,
            colors: fontColors,
          },
        },
        tooltip: {
          enabled: tooltip,
          x: {
            show: true,
            formatter: (v) => v,
          },
          y: {
            show: true,
            formatter: (v) => v,
          },
        },
        xaxis: {
          show: true,
          categories: categories,
          axisTicks: {
            show: axisTicks,
          },
          axisBorder: { show: false },
          labels: {
            style: {
              fontSize: xaxisLabelFontSize,
            },
            hideOverlappingLabels: hideOverlappingLabels,
            formatter: dataLabelsFormatter,
            rotate: Xaxisrotate,
          },
        },
        yaxis: {
          show: true,
          axisBorder: { show: false },
         
          labels: {
            show: false, // Hide y-axis labels
          },
          tooltip: {
            formatter: function(val) {
              // Return the original value without formatting
              return val;
            },
          },
        },
        grid: {
            show: false, // Hide grid lines
          },
        
      },
    };
  }, [data]);



  if (data.length <= 0 || errorHandle) {
    return (
      <div className="text-center no-data">
        <h6 style={{ color: "#babfc8" }} className="no-data">
          No Data Found.
        </h6>
      </div>
    );
  }

  return (
    <Chart
      options={BarChart.options}
      series={BarChart.series}
      type="bar"
      height={Chartheight}
      width={Chartwidth}
    />
  );
}

export default BarchartComponent;
