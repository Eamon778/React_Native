import Deck from './deck'
import { ICard } from './types'
import { getBet, getDecision, getHandValue, getStrHand } from './utils'

function playerTurn(playerHand: ICard[], deck: Deck): number {
    let handleValue = getHandValue(playerHand)

    while (true) {
        const action = getDecision()
        if (action !== 'hit') return handleValue

        playerHand.push(deck.deal(1)[0])
        handleValue = getHandValue(playerHand)
        console.log(`Your hand: ${getStrHand(playerHand)} (total: ${handleValue})`);
        
        if (handleValue > 21) {
            return handleValue
        }
    }
}

function dealerTurn(dealerHand: ICard[], deck: Deck): number {
    let handleValue = getHandValue(dealerHand)

    while (true) {
        console.log(`Dealer's hand: ${getStrHand(dealerHand)} (total: ${handleValue})`);
        if (handleValue >= 17) return handleValue

        dealerHand.push(deck.deal(1)[0])
        handleValue = getHandValue(dealerHand)
    }
}

let  dealerHand: ICard[] = []
let playerHand: ICard[] = []
const deck: Deck = new Deck();
let balance = 100;

while (balance > 0) {
    console.log(`\nPlayer funds $${balance}`)
    const bet = getBet(balance)

    balance -= bet;

    deck.reset();

    playerHand = deck.deal(2)
    dealerHand = deck.deal(2)

    const playerValue = getHandValue(playerHand)
    const dealerValue = getHandValue(dealerHand)

    console.log(`Your hand: ${getStrHand(playerHand)} (total: ${playerHand})`)
    console.log(`Dealer's hand: ${getStrHand(dealerHand, true)}`);
    if (playerValue === 21) {
        balance += bet * 2.5;
        console.log(`Blackjack! You won $${bet * 2.5}`);
        continue
    } else if (dealerValue === 21){
        console.log(`Dealer's hand: ${getStrHand(dealerHand)} (total: 21)`);
        console.log('Dealer has Blackjack, you lost...');
        continue
    }

    const finalPlayerValue = playerTurn(playerHand, deck);
    if (finalPlayerValue > 21) {
        console.log('You bust and lost ...');
        continue
    }
    const finalDealerValue = dealerTurn(dealerHand, deck);
    if (finalDealerValue > 21 || finalPlayerValue > finalDealerValue) {
        balance += bet * 2;
        console.log(`You won $${bet * 2}`)
    } else if (finalDealerValue === finalPlayerValue) {
        balance += bet
        console.log('Push (tile)')
    } else {
        console.log('You lost to the dealer');
    }
}

console.log('You ran out of money')