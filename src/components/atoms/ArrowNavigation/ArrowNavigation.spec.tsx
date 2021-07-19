import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import ArrowNavigation from "./ArrowNavigation";

describe('ArrowNavigation component tests', () => {

    const mockHandleNavigation = jest.fn();
    const mockCurrentCardIndex = 1;
    const mockMaxCardCount = 6;

    it('renders properly', () => {
        const tree = renderer
            .create(
                <ArrowNavigation
                    handleNavigation={mockHandleNavigation}
                    currentCardIndex={mockCurrentCardIndex}
                    maxCardCount={mockMaxCardCount}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without Back Arrow when on first card', () => {
        const mockCurrentCardIndexFirst = 0;
        const { container, getByTestId, debug } = render(
            <ArrowNavigation
                handleNavigation={mockHandleNavigation}
                currentCardIndex={mockCurrentCardIndexFirst}
                maxCardCount={mockMaxCardCount}
            />
        );
        // debug();
        // expect(container.querySelector('.MuiSvgIcon-root')).toHaveClass('makeStyles-hideIcon-4');
        expect(getByTestId('back-arrow')).toHaveClass('makeStyles-hideIcon-4');
    });

    it('renders without Forward Arrow when on last card', () => {
        const mockCurrentCardIndexLast = mockMaxCardCount - 1;
        const { container, getByTestId } = render(
            <ArrowNavigation
                handleNavigation={mockHandleNavigation}
                currentCardIndex={mockCurrentCardIndexLast}
                maxCardCount={mockMaxCardCount}
            />
        );
        expect(getByTestId('forward-arrow')).toHaveClass('makeStyles-hideIcon-4');
    });

    it('handleNavigation() is called', () => {
        const { container, getByTestId, debug } = render(
            <ArrowNavigation
                handleNavigation={mockHandleNavigation}
                currentCardIndex={mockCurrentCardIndex}
                maxCardCount={mockMaxCardCount}
            />
        );
        fireEvent.click(getByTestId('back-arrow'));
        expect(mockHandleNavigation).toHaveBeenCalled();
    });
});