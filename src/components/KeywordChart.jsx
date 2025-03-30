import { ResponsiveRadar } from "@nivo/radar";

const KeywordChart = ({ data }) => {
  if (!data || data.length === 0) return <p>데이터 없음</p>;

  return (
    <div style={{ width: "40em", height: "40em", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Keyword Frequency</h2>
      <ResponsiveRadar
        data={data}
        keys={["frequency"]}
        indexBy="keyword"
        margin={{ top: 50, right: 80, bottom: 50, left: 80 }}
        borderWidth={2}
        borderColor={{ from: "color" }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        colors={{ scheme: "set2" }}
        blendMode="multiply"
        motionConfig="wobbly"
      />
    </div>
  );
};

export default KeywordChart;
