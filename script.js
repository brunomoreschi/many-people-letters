const form = document.getElementById('wordForm');
const input = document.getElementById('wordInput');
const storyDiv = document.getElementById('story');

let storyWords = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const word = input.value.trim();
    if (word) {
        storyWords.push(word);
storyDiv.textContent = storyWords.join('');
        input.value = '';
    }
});
