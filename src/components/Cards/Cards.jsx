import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate }}) => {

    // const cardData = [{
    //     'label': 'Infected',
    //     'value': confirmed.value,
    //     'description': 'Number of Active Cases of Covid-19',
    // },
    // {
    //     'label': 'Recovered',
    //     'value': recovered.value,
    //     'description': 'Number of Recoveries from  Covid-19',
    // },
    // {
    //     'label': 'Deaths',
    //     'value': deaths.value,
    //     'description': 'Number of Deaths by Covid-19',
    // }]
    if(!confirmed) {
        return 'Loading... '
    }
    return (
        // Create a map object and loop through them
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {/* {cardData.map((cardInfo, i) => */}
                <Grid  item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp 
                            start = {0}
                            end= {confirmed.value}
                            duration={2.5}
                            separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of Active Cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                {/* )}  */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                    <CountUp 
                            start = {0}
                            end= {recovered.value}
                            duration={2.5}
                            separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                    <CountUp 
                            start = {0}
                            end= {deaths.value}
                            duration={2.5}
                            separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Deaths by Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;