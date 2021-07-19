import React from 'react';
import {
    Grid,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup
} from '@material-ui/core';

import useTemperatureSelectionStyles from './styles/TemperatureSelection.style';

interface TemperatureSelectionProps {
    temperatureUnit: string,
    handleTemperatureUnitChange: Function
}

const TemperatureSelection = (props: TemperatureSelectionProps) => {

    const classes = useTemperatureSelectionStyles(props);
    const {
        temperatureUnit,
        handleTemperatureUnitChange
    } = props;

    const onChange = (event: React.ChangeEvent, value: string) => {
        // console.log('onChange event: ', event);
        // console.log('onChange value: ', value);
        handleTemperatureUnitChange(value);
    }

    return (
        <Grid
            item
            xs={12}
            className={classes.temperatureSelection}
        >
            <FormControl>
                <RadioGroup
                    row
                    aria-label="temperature-selection"
                    name="temperature-selection"
                    defaultValue="celsius"
                    value={temperatureUnit}
                    onChange={onChange}
                >
                    <FormControlLabel
                        value="celsius"
                        control={
                            <Radio
                                data-testid="celsius-radio-button"
                                color="primary"
                            />
                        }
                        label="Celsius"
                    />
                    <FormControlLabel
                        value="fahrenheit"
                        control={
                            <Radio
                                data-testid="fahrenheit-radio-button"
                                color="secondary"
                            />
                        }
                        label="Fahrenheit"
                    />
                </RadioGroup>
            </FormControl>
        </Grid>
    )
};

export default TemperatureSelection;