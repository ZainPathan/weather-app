import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ReducerState } from '../../redux/modules';
import { actions as Weather } from '../../redux/modules/weather';
import { actions as Temperature } from '../../redux/modules/temperature';
import { actions as Navigation } from '../../redux/modules/navigation';
import {
    Grid,
    withStyles,
    WithStyles
} from '@material-ui/core';
import MainContainerStyles from './styles/MainContainer.style';
import Loader from '../../components/molecules/Loader';
import TemperatureSelection from '../../components/molecules/TemperatureSelection';
import WeatherDetailsSection from '../../components/organisms/WeatherDetailsSection';
import ArrowNavigation from '../../components/atoms/ArrowNavigation';
import BarGraph from '../../components/organisms/BarGraph';
import { GetUpdatedDateInString } from '../../core/utils/DateTimeConversions';


interface MainContainerProps extends WithStyles<typeof MainContainerStyles> {
    loadingState: string,
    weatherData: any,
    temperatureUnit: string
    getWeatherData: Function,
    updateTemperatureUnit: Function,
    currentCardDate: string,
    currentCardIndex: number,
    maxCardCount: number,
    updateCurrentCard: Function
}

class MainContainer extends Component<MainContainerProps, {}> {

    constructor(props: MainContainerProps) {
        super(props);

        this.handleTemperatureUnitChange = this.handleTemperatureUnitChange.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    componentDidMount() {
        const {
            getWeatherData
        } = this.props;

        getWeatherData().then(() => {
            console.log('Obtained Weather data');
        });
    }

    handleTemperatureUnitChange(value: string) {
        const {
            updateTemperatureUnit
        } = this.props;
        updateTemperatureUnit(value);
    }

    handleNavigation(direction: string) {
        const {
            currentCardIndex,
            currentCardDate,
            updateCurrentCard
        } = this.props;

        const updatedCardDetails = direction === 'forward' ?
                ({
                    currentCardIndex: currentCardIndex + 1,
                    currentCardDate: GetUpdatedDateInString(currentCardDate, true)
                }) : (direction === 'back' ?
                    ({
                        currentCardIndex: (currentCardIndex - 1),
                        currentCardDate: GetUpdatedDateInString(currentCardDate, false)
                    }) : null);

        updatedCardDetails && updateCurrentCard(updatedCardDetails);
    }

    render() {

        const {
            classes,
            weatherData,
            loadingState,
            temperatureUnit,
            currentCardDate,
            currentCardIndex,
            maxCardCount
        } = this.props;
        return (
            <>
                {loadingState === 'LOADING' ?
                    (<Loader showLoader={true} />) :
                        (loadingState === 'ERROR') ?
                            (<h3 className={classes.errorMessage}>Error Loading Data. Try again.</h3>) :
                                (<div className={classes.mainContainer}>
                                    <h2 className={classes.header}>Weather App - Munich</h2>
                                    <Grid
                                        container
                                        spacing={2}
                                        direction="row"
                                        justify="center"
                                        alignItems="flex-start"
                                    >
                                        <TemperatureSelection
                                            temperatureUnit={temperatureUnit}
                                            handleTemperatureUnitChange={this.handleTemperatureUnitChange}
                                        />
                                        <ArrowNavigation
                                            handleNavigation={this.handleNavigation}
                                            currentCardIndex={currentCardIndex}
                                            maxCardCount={maxCardCount}
                                        />
                                        <WeatherDetailsSection
                                            weatherData={weatherData}
                                            temperatureUnit={temperatureUnit}
                                            // currentCardDate={currentCardDate}
                                            currentCardIndex={currentCardIndex}
                                        />
                                        <Grid
                                            item
                                            xs={12}
                                            className={classes.barGraph}
                                        >
                                            <BarGraph
                                                weatherData={weatherData}
                                                currentCardDate={currentCardDate}
                                                temperatureUnit={temperatureUnit}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>)
                }
            </>
        )
    }
}

const mapStateToProps = (state: ReducerState) => ({
    loadingState: state.weather.loadingState,
    weatherData: state.weather.weatherData,
    temperatureUnit: state.temperature.temperatureUnit,
    currentCardDate: state.navigation.currentCardDate,
    currentCardIndex: state.navigation.currentCardIndex,
    maxCardCount: state.navigation.maxCardCount
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    getWeatherData: Weather.getWeatherData,
    updateTemperatureUnit: Temperature.updateTemperatureUnit,
    updateCurrentCard: Navigation.updateCurrentCard
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(MainContainerStyles)(MainContainer));
