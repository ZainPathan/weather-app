import { makeStyles } from "@material-ui/core";

const useTemperatureSelectionStyles = makeStyles({
    temperatureSelection: {
        display: 'inline-flex',
        justifyContent: 'center',
        '& .MuiFormControl-root': {
            width: '100%',
            '& .MuiFormGroup-root': {
                justifyContent: 'space-around'
            }
        }
    }
});

export default useTemperatureSelectionStyles;