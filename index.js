const click = document.querySelector('.click');
const gift = document.querySelector('.gift');
const btnGift = document.querySelector('.btn-gift');

let selectedCard = null;

click.addEventListener("click", () => {
  if(click.className === "click"){
    click.classList.add("active");
    gift.classList.add("active");
    btnGift.classList.add("active");
  }
  else{
    click.classList.remove('active');
    gift.classList.remove('active');
  }
});

// function toggleCardEffect(giftCard, title,text) {
//   giftCard.classList.toggle('clicked');
//   var actionButton = document.getElementById('actionButton');
//   if (actionButton !== null) {
//     actionButton.style.display = actionButton.style.display === 'none' ? 'block' : 'none';
//   }
// };

function toggleCardEffect(card, title, text) {
  if (selectedCard !== null) {
    selectedCard.classList.remove('selected');
  }
  selectedCard = card;
  selectedCard.classList.add('selected');

  var actionButton = document.getElementById('actionButton');
  if (actionButton !== null) {
    actionButton.style.display = 'block';
  }
}

function sendEmail() {
  if (selectedCard === null) {
    return; // No card selected, do nothing
  }

  const recipientEmail = 'tonjenisiya@gmail.com';
  const cardTitle = selectedCard.querySelector('.title').textContent;
  const cardText = selectedCard.querySelector('.text').textContent;

  const subject = encodeURIComponent('Chosen Gift Card');
  const body = encodeURIComponent(`You have chosen the following card: \nTitle: ${cardTitle}\nText: ${cardText}`);
  const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
}
