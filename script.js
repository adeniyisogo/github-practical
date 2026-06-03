// ===== Virtual Pixel Pet Game Logic =====

// Pet State Object
const petState = {
    name: 'Pixel',
    hunger: 100,
    happiness: 100,
    energy: 100,
    age: 0,
    isSleeping: false,
    lastAction: null
};

// Initialize the game
function initGame() {
    loadGameState();
    updateDisplay();
    startGameLoop();
}

// Game Loop - Updates pet stats every second
function startGameLoop() {
    setInterval(() => {
        if (!petState.isSleeping) {
            // Decrease hunger over time
            petState.hunger = Math.max(0, petState.hunger - 0.5);
            
            // Decrease happiness if hungry
            if (petState.hunger < 30) {
                petState.happiness = Math.max(0, petState.happiness - 0.3);
            }
            
            // Increase age
            petState.age += 1;
        } else {
            // While sleeping, restore energy and happiness
            petState.energy = Math.min(100, petState.energy + 1);
            petState.happiness = Math.min(100, petState.happiness + 0.5);
        }
        
        updateDisplay();
        saveGameState();
    }, 1000);
}

// ===== Action Functions =====

function feedPet() {
    if (petState.isSleeping) {
        alert('Your pet is sleeping! Let it rest.');
        return;
    }
    
    petState.hunger = Math.min(100, petState.hunger + 30);
    petState.happiness = Math.min(100, petState.happiness + 5);
    
    triggerAnimation('happy');
    showNotification('Yum! 😋');
    saveGameState();
}

function playWithPet() {
    if (petState.isSleeping) {
        alert('Your pet is sleeping! Let it rest.');
        return;
    }
    
    if (petState.energy < 20) {
        alert('Your pet is too tired to play! Let it sleep.');
        return;
    }
    
    petState.happiness = Math.min(100, petState.happiness + 25);
    petState.energy = Math.max(0, petState.energy - 20);
    petState.hunger = Math.max(0, petState.hunger - 10);
    
    triggerAnimation('happy');
    showNotification('Wheee! 🎾');
    saveGameState();
}

function putToSleep() {
    petState.isSleeping = !petState.isSleeping;
    
    if (petState.isSleeping) {
        showNotification('Zzz... 😴');
        document.getElementById('pet').classList.add('sleeping');
    } else {
        showNotification('Wake up! 👀');
        document.getElementById('pet').classList.remove('sleeping');
    }
    
    saveGameState();
}

function petPet() {
    if (petState.isSleeping) {
        alert('Your pet is sleeping! Let it rest.');
        return;
    }
    
    petState.happiness = Math.min(100, petState.happiness + 10);
    
    triggerAnimation('happy');
    showNotification('That feels nice! 🥰');
    saveGameState();
}

// ===== Display Update Function =====

function updateDisplay() {
    // Update stats
    document.getElementById('hungerValue').textContent = Math.round(petState.hunger) + '%';
    document.getElementById('happinessValue').textContent = Math.round(petState.happiness) + '%';
    document.getElementById('energyValue').textContent = Math.round(petState.energy) + '%';
    document.getElementById('ageValue').textContent = Math.round(petState.age / 60) + ' mins';
    
    // Update stat bars
    document.getElementById('hungerBar').style.width = petState.hunger + '%';
    document.getElementById('happinessBar').style.width = petState.happiness + '%';
    document.getElementById('energyBar').style.width = petState.energy + '%';
    
    // Update mood display
    updateMood();
    
    // Update pet name
    document.getElementById('petName').value = petState.name;
}

function updateMood() {
    const moodDisplay = document.getElementById('moodDisplay');
    let mood = '';
    let emoji = '';
    
    if (petState.isSleeping) {
        mood = 'Sleeping';
        emoji = '😴';
    } else if (petState.hunger < 20) {
        mood = 'Starving';
        emoji = '😫';
    } else if (petState.happiness < 30) {
        mood = 'Sad';
        emoji = '😢';
    } else if (petState.energy < 20) {
        mood = 'Tired';
        emoji = '😩';
    } else if (petState.happiness > 80) {
        mood = 'Very Happy';
        emoji = '😄';
    } else if (petState.happiness > 60) {
        mood = 'Happy';
        emoji = '😊';
    } else {
        mood = 'Okay';
        emoji = '😐';
    }
    
    moodDisplay.textContent = emoji + ' ' + mood;
}

// ===== Animation Triggers =====

function triggerAnimation(animationType) {
    const pet = document.getElementById('pet');
    pet.classList.remove('happy', 'sad', 'sleeping');
    
    if (animationType === 'happy') {
        pet.classList.add('happy');
        setTimeout(() => pet.classList.remove('happy'), 500);
    } else if (animationType === 'sad') {
        pet.classList.add('sad');
        setTimeout(() => pet.classList.remove('sad'), 500);
    }
}

// ===== Notification System =====

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-size: 1.1em;
        font-weight: bold;
        z-index: 1000;
        animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
}

// Add animation styles for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Pet Name Management =====

function updatePetName() {
    const newName = document.getElementById('petName').value.trim();
    
    if (newName === '') {
        alert('Please enter a name!');
        return;
    }
    
    petState.name = newName;
    showNotification(`Name changed to ${newName}! 🏷️`);
    saveGameState();
}

// ===== Game Reset =====

function resetGame() {
    if (confirm('Are you sure you want to reset the game? This cannot be undone.')) {
        petState.name = 'Pixel';
        petState.hunger = 100;
        petState.happiness = 100;
        petState.energy = 100;
        petState.age = 0;
        petState.isSleeping = false;
        
        localStorage.removeItem('pixelPetGameState');
        updateDisplay();
        showNotification('Game reset! 🔄');
    }
}

// ===== Local Storage Management =====

function saveGameState() {
    localStorage.setItem('pixelPetGameState', JSON.stringify(petState));
}

function loadGameState() {
    const savedState = localStorage.getItem('pixelPetGameState');
    
    if (savedState) {
        const loadedState = JSON.parse(savedState);
        Object.assign(petState, loadedState);
    }
}

// ===== Initialize Game on Page Load =====

document.addEventListener('DOMContentLoaded', initGame);
