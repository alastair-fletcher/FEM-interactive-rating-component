const mainCard = document.querySelector('.main-card');
const thankYouCard = document.querySelector('.thank-you-card');
const ratingForm = document.querySelector('.rating-form');
const ratings = document.getElementsByName('ratings');
const ratingSpan = document.querySelector('.rating');
const thankYouImage = document.querySelector('.thank-you-image');

// toggle between rating card and thank you card
const toggleHidden = () => {
  mainCard.classList.toggle('hidden');
  thankYouCard.classList.toggle('hidden');
};

// submit rating and go to thank you card
ratingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let selected = Array.from(ratings).find((rating) => rating.checked);
  ratingSpan.textContent = `You selected ${selected.value} out of 5`;
  toggleHidden();
});

// go back to rating card
thankYouImage.addEventListener('click', () => {
  toggleHidden();
});
