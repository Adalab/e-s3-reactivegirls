const cardUrl = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';

const cardSend = (card)=> fetch(cardUrl,{
    method: 'POST',
    body: JSON.stringify(card),
    headers: {
        'content-type': 'application/json'
    }
})

.then(response => response.json())

export {cardSend};