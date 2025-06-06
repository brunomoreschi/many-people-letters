const form = document.getElementById('wordForm');
const input = document.getElementById('wordInput');
const storyDiv = document.getElementById('story');

const db = firebase.database();
const storyRef = db.ref('story');

// Listen for changes
storyRef.on('value', (snapshot) => {
    const story = snapshot.val();
    storyDiv.textContent = story || '';
});

// Submit new character
form.addEventListener('submit', function (event) {
    event.preventDefault();

    let char = input.value;
    if (char === '_') char = ' ';
    if (char !== '') {
        storyRef.once('value').then(snapshot => {
            const current = snapshot.val() || '';
            const updated = current + char;
            storyRef.set(updated);
        });
    }

    input.value = '';
});
