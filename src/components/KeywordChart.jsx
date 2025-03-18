import { ResponsiveRadar } from '@nivo/radar';

const KeywordChart = () => {
    const data = [
        { keyword: "Music", frequency: 150 },
        { keyword: "Gaming", frequency: 100 },
        { keyword: "Entertainment", frequency: 80 },
        { keyword: "Education", frequency: 60 },
        { keyword: "Sports", frequency: 40 }
    ];

    return (
        <div style={{ width: '40em', height: '40em', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Keyword Frequency</h2>
            <ResponsiveRadar
                data={data}
                keys={['frequency']}
                indexBy='keyword'
                margin={{ top: 50, right: 80, bottom: 50, left: 80 }}
                borderWidth={2}
                borderColor={{ from: 'color' }}
                gridLabelOffset={36}
                dotSize={10}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={2}
                colors={{ scheme: 'set2' }}
                blendMode='multiply'
                motionConfig='wobbly'
            />
        </div>
    );
};

export default KeywordChart;