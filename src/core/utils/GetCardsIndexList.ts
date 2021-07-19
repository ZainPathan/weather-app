export const GetCardsIndexList = (width: number, currentCardIndex: number, maxCardsLength: number = 0) => {
    let cardsIndexList: Array<number> = [];

    if(width < 600) {
        cardsIndexList = [currentCardIndex];
    } else if(width < 960) {
        if(currentCardIndex === 0) {
            cardsIndexList = [currentCardIndex, currentCardIndex + 1];
        } else if(currentCardIndex === maxCardsLength - 1) {
            cardsIndexList = [currentCardIndex - 1, currentCardIndex];
        } else {
            cardsIndexList = [currentCardIndex, currentCardIndex + 1];
        }
    } else {
        if(currentCardIndex === 0) {
            cardsIndexList = [currentCardIndex, currentCardIndex + 1, currentCardIndex + 2];
        } else if(currentCardIndex === maxCardsLength - 1) {
            cardsIndexList = [currentCardIndex - 2, currentCardIndex - 1, currentCardIndex];
        } else {
            cardsIndexList = [currentCardIndex - 1, currentCardIndex, currentCardIndex + 1];
        }
    }
    return cardsIndexList;
}