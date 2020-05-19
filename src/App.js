import React, {Component} from 'react';
import {Chart, CountryPicker, Cards} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import covidImg from './images/covid_19.png';

class App extends Component {
    state= {
        data: {},
        country: ''
    }
    async componentDidMount() {
        const covidData = await fetchData();
        this.setState({ data: covidData }); 
    }

    handleCountryChange = async(country) => {
        const covidData = await fetchData(country);
        this.setState({ data: covidData, country}); 
    }

    render() {
        const {data, country} = this.state;
        return (
            <div className = {styles.container}>
            <img className={styles.image} src={covidImg} alt="COVID_19" />
               <Cards data= {data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Chart data= {data} country={country}/>
            </div>
        )
    }
}

export default App;