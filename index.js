// dynamically load set of image urls (data) into cards
// change width, height, and number of cards displayed based on data (there should be a max #)
// close up spaces between cards based on position
// hovering over a card permanently (?) shifts that card to the center, and all other cards to the -direction of the hovered card (e.g. if card is on the left, it shifts the whole carousel right)
// clicking on a card (a second time?) goes to the page with that portfolio item (or flips card, in full npm version)

const URLS = [
  "https://www.wga.hu/art/a/angelico/13/00adorati.jpg",
  "https://www.wga.hu/art/a/angelico/13/00humil1.jpg",
  "https://www.wga.hu/art/a/angelico/13/01crucif.jpg",
  "https://www.wga.hu/art/a/angelico/13/01jerome.jpg",
  "https://www.wga.hu/art/a/angelico/13/01reliqu.jpg",
  "https://www.wga.hu/art/a/angelico/13/021annun.jpg",
  "https://www.wga.hu/art/a/angelico/13/03prede2.jpg",
  "https://www.wga.hu/art/a/angelico/13/03prede4.jpg",
  "https://www.wga.hu/art/a/angelico/13/05humili.jpg"
]


document.addEventListener('DOMContentLoaded', event => {
  loadImages(URLS);
});

const loadImages = (urls) => {
  let cards = document.getElementById('cards');
  urls.forEach((url, idx) => {
    let card = document.createElement('span');
    card.id = idx;
    idx === 4 ? card.className = 'card' : (idx < 4 ? card.className = 'card left' : card.className = 'card right');
    let image = document.createElement('img');
    image.src = url;
    cards.appendChild(card);
    card.appendChild(image);
  });
}
