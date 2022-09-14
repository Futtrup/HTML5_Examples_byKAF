import styled from "@emotion/styled";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ChartData,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
  } from 'chart.js';
import { Bar } from "react-chartjs-2";
import { Country } from "../types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

interface Props {
    limit: number,
    countries: Country[];
}

const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
};

const generateChartDate = (countries: Country[], limit: number): ChartData<'bar', number[] > => {
    const data: number[] = [];
    const labels: string[] = [];
    const colors: string[] = [];

    countries.forEach(c => {
        data.push(c.NewConfirmed);
        labels.push(c.Country);
        colors.push(c.NewConfirmed > limit ? "red" : "green")
    })

    return {
        labels: labels,
        datasets: [
            {
                label: 'New Confirmed', 
                data: data,
                backgroundColor: colors,
            }
        ]
    }
}

const ChartWrapper = styled.div`
    max-width: 700px;
    margin: 0 auto;
`

const BarChart: React.FunctionComponent<Props> = ({ countries, limit }) => {
    return <ChartWrapper>
        <Bar data={ generateChartDate(countries, limit) } options={ options } />
    </ChartWrapper>     
}

export default BarChart;