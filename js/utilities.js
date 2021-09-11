
async function deckMount(player_cards) {
    let deck = [];
    player_cards = player_cards.split("\n");

    for (let i = 0; i < player_cards.length; i++) {
        // divide string by space
        let card = player_cards[i].split(" ");
        // from first space, forward
        let card_name = player_cards[i].substring(player_cards[i].indexOf(" ") + 1);
        // from first space, back
        let qtd = parseInt(card[0]);

        // add to decklist
        await loadCard(card_name).then(card_info => {
            for (let j = 0; j < qtd; j++) {
                deck.push(card_info);
            }
        });
    }

    return deck;
}

// req on external api
async function loadCard(card_name) {
    const response = await fetch("https://api.scryfall.com/cards/named?exact=" + card_name)
    const card_info = response.json();
    return card_info;
}

// randomizer
function shuffle(array) {
    var currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function showCardOnHand(name, src){
    insert = document.createElement( 'div' );
    insert.className="card";
    insert.innerHTML = '<img alt='+name+' src="'+src+'">' 
    document.getElementById( 'player-hand' ).appendChild(insert);
}