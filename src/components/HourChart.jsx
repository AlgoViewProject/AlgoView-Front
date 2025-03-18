import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';

const data = [
    { hour: 0, totalViews: 544, categories: [{ name: "orange jellybean", views: 14 }, { name: "쏘플 soso playlist", views: 10 }, { name: "혜안", views: 9 }] },
    { hour: 1, totalViews: 419, categories: [{ name: "쏘플 soso playlist", views: 13 }, { name: "때잉", views: 9 }, { name: "해빈인데요?", views: 7 }] },
    { hour: 2, totalViews: 608, categories: [{ name: "빵먹다살찐떡", views: 12 }, { name: "주둥이방송", views: 10 }, { name: "TheScoreVEVO", views: 8 }] },
    { hour: 3, totalViews: 921, categories: [{ name: "오마르의 삶", views: 15 }, { name: "때잉", views: 14 }, { name: "1분순삭", views: 13 }] },
    { hour: 4, totalViews: 1125, categories: [{ name: "쏘플 soso playlist", views: 32 }, { name: "직키(Zickii)", views: 19 }, { name: "때잉", views: 18 }] },
    { hour: 5, totalViews: 1722, categories: [{ name: "GS25매거진", views: 42 }, { name: "쏘플 soso playlist", views: 33 }, { name: "orange jellybean", views: 31 }] },
    { hour: 6, totalViews: 1898, categories: [{ name: "직키(Zickii)", views: 41 }, { name: "쏘플 soso playlist", views: 38 }, { name: "때잉", views: 34 }] },
    { hour: 7, totalViews: 1918, categories: [{ name: "직키(Zickii)", views: 38 }, { name: "orange jellybean", views: 35 }, { name: "워너뮤직코리아 (Warner Music Korea)", views: 33 }] },
    { hour: 8, totalViews: 1474, categories: [{ name: "orange jellybean", views: 35 }, { name: "직키(Zickii)", views: 23 }, { name: "쏘플 soso playlist", views: 18 }] },
    { hour: 9, totalViews: 1635, categories: [{ name: "직키(Zickii)", views: 31 }, { name: "워너뮤직코리아 (Warner Music Korea)", views: 25 }, { name: "쏘플 soso playlist", views: 23 }] }
];

const LineChart = () => {
    const lineData = [
        {
            id: "Total Views",
            color: "hsl(220, 70%, 50%)",
            data: data.map(d => ({ x: d.hour, y: d.totalViews }))
        }
    ];

    return (
        <ResponsiveLine
            data={lineData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
            axisLeft={{ legend: 'Total Views', legendOffset: -40, legendPosition: 'middle' }}
            axisBottom={{ legend: 'Hour', legendOffset: 36, legendPosition: 'middle' }}
            enableGridX={false}
            enableGridY={true}
            colors={{ scheme: 'category10' }}
        />
    );
};

const BarChart = () => {
    const barData = data.map(d => {
        let obj = { hour: d.hour };
        d.categories.forEach(cat => {
            obj[cat.name] = cat.views;
        });
        return obj;
    });

    return (
        <ResponsiveBar
            data={barData}
            keys={[...new Set(data.flatMap(d => d.categories.map(c => c.name)))]}
            indexBy="hour"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            axisLeft={{ legend: 'Views', legendOffset: -40, legendPosition: 'middle' }}
            axisBottom={{ legend: 'Hour', legendOffset: 36, legendPosition: 'middle' }}
        />
    );
};

const HourChart = () => {
    return (
        <div style={{ width: '55em', height: '500px' }}>
            <h2>Hourly Total Views</h2>
            <LineChart />
            <h2>Category-wise Views per Hour</h2>
            <BarChart />
        </div>
    );
};

export default HourChart;