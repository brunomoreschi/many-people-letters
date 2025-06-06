const form = document.getElementById('wordForm');
const input = document.getElementById('wordInput');
const storyDiv = document.getElementById('story');

let storyText = '';

// Load saved story from localStorage when page loads
if (localStorage.getItem('collaborativeStory')) {
    storyText = localStorage.getItem('collaborativeStory');
    storyDiv.textContent = storyText;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let char = input.value;

    if (char !== '') {
        if (char === '_') char = ' '; // convert underscore to space
        storyText += char;
        storyDiv.textContent = storyText;
        localStorage.setItem('collaborativeStory', storyText);
    }

    input.value = '';
});
