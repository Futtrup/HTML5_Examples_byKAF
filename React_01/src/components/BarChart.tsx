import { BarOptions, ChartData, Chart, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";


Chart.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChart: React.FunctionComponent = () => {

const data: ChartData<'bar'> =  {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'MyData', 
            data: [10, 20, 30, 40, 50, 60]
        }
    ]
}

const options: BarOptions = {
    base: 0,
    borderSkipped: false,
    borderRadius: 0,
    inflateAmount: 0,
    borderWidth: 0,
    backgroundColor: "",
    borderColor: ""
}

return <Bar data={data} options={ options } />
}

export default BarChart;