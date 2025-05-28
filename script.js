const form = document.getElementById('wordForm');
const input = document.getElementById('wordInput');
const storyDiv = document.getElementById('story');

let storyWords = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const char = input.value;  // DO NOT trim!

    if (char !== '') {  // Allow space but prevent empty input
        storyWords.push(char);
        storyDiv.textContent = storyWords.join('');
    }

    input.value = '';  // Clear input after submission
});
