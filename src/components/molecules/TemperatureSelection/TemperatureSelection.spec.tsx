import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import TemperatureSelection from './TemperatureSelection';

describe('TemperatureSelection component tests', () => {
    const mockHandleTemperatureUnitChange = jest.fn();
    const mockTemperatureUnit = 'fahrenheit';

    it('renders properly', () => {
        const tree = renderer
            .create(
                <TemperatureSelection
                    temperatureUnit={mockTemperatureUnit}
                    handleTemperatureUnitChange={mockHandleTemperatureUnitChange}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('selection of radio button causes handleTemperatureUnitChange event handler to be called', () => {
        const { getByTestId } = render(
            <TemperatureSelection
                temperatureUnit={mockTemperatureUnit}
                handleTemperatureUnitChange={mockHandleTemperatureUnitChange}
            />
        );
        fireEvent.click(getByTestId('celsius-radio-button'));
        expect(mockHandleTemperatureUnitChange).toHaveBeenCalled();
    });
})
