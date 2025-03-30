import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";

const HourChart = ({ data }) => {
  if (!data || data.length === 0) return <p>데이터 없음</p>;

  const lineData = [
    {
      id: "Total Views",
      data: data.map(d => ({ x: d.hour.toString(), y: d.totalViews })),
    },
  ];

  const barData = data.map(d => {
    const obj = { hour: d.hour.toString() };
    d.categories.forEach(cat => {
      obj[cat.name] = cat.views;
    });
    return obj;
  });

  const keys = [...new Set(data.flatMap(d => d.categories.map(c => c.name)))];

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <h2>Hourly Total Views</h2>
      <div style={{ height: 300 }}>
        <ResponsiveLine
          data={lineData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear", min: "auto", max: "auto", stacked: false }}
          axisLeft={{
            legend: "Views",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          axisBottom={{
            legend: "Hour",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          colors={{ scheme: "category10" }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          enableSlices="x"
        />
      </div>

      <h2>Category-wise Views per Hour</h2>
      <div style={{ height: 300 }}>
        <ResponsiveBar
          data={barData}
          keys={keys}
          indexBy="hour"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          axisLeft={{
            legend: "Views",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          axisBottom={{
            legend: "Hour",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          legends={[
            {
              dataFrom: "keys",
              anchor: "right",
              direction: "column",
              justify: false,
              translateX: 120,
              itemWidth: 100,
              itemHeight: 20,
              itemsSpacing: 2,
              symbolSize: 20,
            },
          ]}
          role="application"
          ariaLabel="Bar chart of category views by hour"
        />
      </div>
    </div>
  );
};

export default HourChart;
