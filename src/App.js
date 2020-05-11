import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';


class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({ data, country: country });
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src='https://cdn.icon-icons.com/icons2/2239/PNG/512/virus_coronavirus_covid_covid_icon_134829.png' alt="COVID-19" />
                <div className={styles.text}>COVID-19<br></br>Daily Stats</div>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Cards data={data} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;