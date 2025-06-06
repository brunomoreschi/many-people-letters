const form = document.getElementById('wordForm');
const input = document.getElementById('wordInput');
const storyDiv = document.getElementById('story');

let storyWords = [];
console.log('Loaded saved story:', savedStory);

// Load story from localStorage if it exists
const savedStory = localStorage.getItem('collaborativeStory');
if (savedStory) {
    storyWords = savedStory.split('');
    storyDiv.textContent = storyWords.join('');
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const char = input.value;
    if (char !== '') {
        storyWords.push(char === '_' ? ' ' : char);
        storyDiv.textContent = storyWords.join('');
        localStorage.setItem('collaborativeStory', storyWords.join(''));
    }

    input.value = '';
});
