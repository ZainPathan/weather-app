import moment from 'moment';

export const GetUpdatedDateInString = (currentDateInString: string, isAdd: boolean) => {
    const momentDate = moment(currentDateInString, 'DD-MM-YYYY');
    if(isAdd) {
        return momentDate.add(1, 'd').format('DD-MM-YYYY');
    } else {
        return momentDate.subtract(1, 'd').format('DD-MM-YYYY');
    }
}