document.getElementById('recommendation-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const newRecommendation = document.getElementById('new-recommendation').value;
  if (newRecommendation) {
      const recommendationList = document.getElementById('recommendation-list');
      const newListItem = document.createElement('li');
      newListItem.classList.add('recommendation-box');
      newListItem.textContent = newRecommendation;
      recommendationList.appendChild(newListItem);

      alert('Thank you for your recommendation!');

      document.getElementById('new-recommendation').value = '';
  }
});