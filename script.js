// Sample speakers data
const speakers = [
    {
        id: 1,
        name: 'John Doe',
        title: 'Chief Marketing Officer',
        company: 'Acme Corp',
        image: 'Images/Ellipse21.png',
        bio: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.',
        social: {
            discord: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        id: 2,
        name: 'John Doe',
        title: 'Chief Engagement Officer',
        company: 'Acquia',
        image: 'Images/Ellipse22.png',
        bio: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage.',
        social: {
            discord: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        id: 3,
        name: 'John Doe',
        title: 'Chief Technical Developer',
        company: 'Pantheon',
        image: 'Images/Ellipse23.png',
        bio: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage.',
        social: {
            discord: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        id: 4,
        name: 'John Doe',
        title: 'Chief Marketing Officer',
        company: 'Specbee',
        image: 'Images/Ellipse24.png',
        bio: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage.',
        social: {
            discord: '#',
            twitter: '#',
            linkedin: '#'
        }
    }
];

// Elements
const speakersSlider = document.getElementById('speakersSlider');
const featuredSpeaker = document.getElementById('featuredSpeaker');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Create speaker card
function createSpeakerCard(speaker) {
    const card = document.createElement('div');
    card.className = 'speaker-card';
    card.innerHTML = `
        <img src="${speaker.image}" alt="${speaker.name}" class="speaker-img">
        <h3 class="speaker-name">${speaker.name}</h3>
        <p class="speaker-title">${speaker.title}</p>
        <p class="speaker-company">${speaker.company}</p>
    `;

    card.addEventListener('click', () => showSpeakerDetails(speaker));
    return card;
}

// Show speaker details
function showSpeakerDetails(speaker) {
    featuredSpeaker.querySelector('.featured-speaker-img').src = speaker.image;
    featuredSpeaker.querySelector('.featured-speaker-img').alt = speaker.name;
    featuredSpeaker.querySelector('.featured-speaker-name').textContent = speaker.name;
    featuredSpeaker.querySelector('.featured-speaker-title').textContent = speaker.title;
    featuredSpeaker.querySelector('.featured-speaker-company').textContent = speaker.company;
    featuredSpeaker.querySelector('.featured-speaker-bio').textContent = speaker.bio;

    // Update social links
    const socialLinks = featuredSpeaker.querySelectorAll('.social-link');
    socialLinks[0].href = speaker.social.discord;
    socialLinks[1].href = speaker.social.twitter;
    socialLinks[2].href = speaker.social.linkedin;

    featuredSpeaker.classList.add('active');
}

// Initialize speakers
function initializeSpeakers() {
    speakers.forEach(speaker => {
        const speakerCard = createSpeakerCard(speaker);
        speakersSlider.appendChild(speakerCard);
    });
}

// Slider 
function slideNext() {
    console.log("Moved to Next");

}

function slidePrev() {
    console.log("Moved to Prev");
}

// Event Listeners
document.querySelector('.close-btn').addEventListener('click', () => {
    featuredSpeaker.classList.remove('active');
});

nextBtn.addEventListener('click', () => {
    console.log("Next button clicked");
    slideNext();
});

prevBtn.addEventListener('click', () => {
    console.log("Prev button clicked");
    slidePrev();
});


// Initialize
document.addEventListener('DOMContentLoaded', initializeSpeakers);

