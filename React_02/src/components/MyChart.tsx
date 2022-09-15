import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const MyChart: React.FunctionComponent = () => {

    const data = [
        {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 500, pv: 2400, amt: 2400},
        {name: 'Page C', uv: 100, pv: 400, amt: 1400}
    ];

    return (
        <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    );
}

export default MyChart;