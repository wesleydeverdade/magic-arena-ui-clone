
async function resizeCards(){
    let hand_player_cards = document.getElementsByClassName('card')
    let rotate = Math.round(((hand_player_cards.length) + (hand_player_cards.length/2)) * -1) ;
    // just in case
    // let center_card = Math.round(hand_player_cards.length/2)-1; 
    
    for (let index = 0; index < hand_player_cards.length; index++) {
        let top = (Math.abs(rotate))*4;
        hand_player_cards[index].style.transform = 'translateY(0px) rotate('+rotate+'deg)';     
        hand_player_cards[index].style.top = top+'px';            
        rotate+=3; 
        // for balacing even hand, both sides of hand with the same size 
        if(hand_player_cards.length % 2 === 0){
            if(rotate===0) rotate+=3;          
        }
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