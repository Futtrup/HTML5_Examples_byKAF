import type { Country } from '../types';

interface Props {
    countries: Country[];
}

const CountryList: React.FunctionComponent<Props> = ({ countries}) => {

    return (
        <ul>
            {countries.map(c => 
            <li key={c.ID}>{c.Country}</li>
            )}
        </ul>
    )
}

export default CountryList;