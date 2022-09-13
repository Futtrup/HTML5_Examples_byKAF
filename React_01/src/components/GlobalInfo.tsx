interface Props {
    newConfirmed: number,
    newDeaths: number,
    newRecovered: number
}

const GlobalInfo: React.FunctionComponent<Props> = ({newConfirmed, newDeaths, newRecovered}) => {
    
    return <div>
        <h1>Global Covid-19 data</h1>
        <h3>New Confirmed: {newConfirmed}</h3>
        <h3>New Deaths: {newDeaths}</h3>
        <h3>New Recovered: {newRecovered}</h3>
    </div>
}

export default GlobalInfo;