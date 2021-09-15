
async function resizeCards(){
    let hand_player_cards = document.getElementsByClassName('card');
    let rotate = (Math.floor(hand_player_cards.length/2)*5 * -1);
    // just in case
    // let center_card = Math.round(hand_player_cards.length/2)-1; 
    
    for (let index = 0; index < hand_player_cards.length; index++) {
        let img_hover_deg = rotate * -1;
        hand_player_cards[index].style.transform = `rotate(${rotate}deg)`;
        
        hand_player_cards[index].firstElementChild.addEventListener('mouseenter', e => {
            hand_player_cards[index].firstElementChild.style.transform = `rotate(${img_hover_deg}deg)`;
            //hand_player_cards[index].firstElementChild.style.position = 'absolute';
            //hand_player_cards[index].firstElementChild.style.bottom = '0';
        });     
        hand_player_cards[index].firstElementChild.addEventListener('mouseleave', e => {
            hand_player_cards[index].firstElementChild.style.transform = `none`;
            //hand_player_cards[index].firstElementChild.style.position = 'initial';
            //hand_player_cards[index].firstElementChild.style.bottom = 'unset';
        }); 

        rotate+=5;
    }
}

// create an observer instance
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        resizeCards();
    });    
});

// pass in the target node, as well as the observer options
observer.observe(document.getElementById('player-hand'), { childList: true });

resizeCards();