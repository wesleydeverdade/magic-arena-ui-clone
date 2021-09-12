// let mtgo_deck = "4 Absorb\n1 Breeding Pool\n4 Compulsion\n2 Decree of Justice\n2 Exalted Angel\n4 Forest\n6 Island\n4 Life Burst\n2 Mana Leak\n4 Meddling Mage\n1 Mirari\n3 Mirari's Wake\n4 Moment's Peace\n5 Plains\n4 Rampant Growth\n1 Temple Garden\n4 Windswept Heath\n2 Wing Shards\n4 Wrath of God";
let mtgo_deck = "2 Bloodstained Mire\n4 Gempalm Incinerator\n1 Goblin Chieftain\n2 Goblin Grenade\n4 Goblin Lackey\n4 Goblin Matron\n4 Goblin Piledriver\n4 Goblin Ringleader\n2 Goblin Sharpshooter\n4 Goblin Warchief\n4 Mogg Fanatic\n18 Mountain\n3 Siege-Gang Commander\n4 Skirk Prospector"
let player_deck = [];
let player_hand = [];
let player_grave = [];
let player_exile = [];

// loading player deck
(async () => {
    player_deck = await deckMount(mtgo_deck);
    player_deck = shuffle(player_deck);

    // initial seven cards hand
    for (let i = 0; i < 7; i++) {
        // add to hand the last element of deck
        player_hand.push(player_deck[player_deck.length-1]);
        // remove the last element of deck after
        player_deck.pop();
        // show card on hand
        showCardOnHand(player_hand[i].name, player_hand[i].image_uris.border_crop);
    }
})();
