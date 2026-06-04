// ===== Pixel Pet Pro - Enhanced Game Logic =====

// Pet State Object
const petState = {
    name: 'Pixel',
    hunger: 100,
    happiness: 100,
    energy: 100,
    health: 100,
    age: 0,
    level: 1,
    xp: 0,
    coins: 0,
    isSleeping: false,
    currentSkin: 'classic',
    ownedSkins: ['classic'],
    inventory: {}
};

// Game Variables
let gameLoopInterval;
let miniGameActive = false;
let miniGameScore = 0;
let miniGameTime = 30;

// Initialize the game
function initGame() {
    loadGameState();
    updateDisplay();
    startGameLoop();
}

// Game Loop - Updates pet stats every second
function startGameLoop() {
    gameLoopInterval = setInterval(() => {
        if (!petState.isSleeping) {
            // Decrease hunger over time
            petState.hunger = Math.max(0, petState.hunger - 0.3);
            
            // Decrease happiness if hungry or unhealthy
            if (petState.hunger < 30) {
                petState.happiness = Math.max(0, petState.happiness - 0.5);
            }
            
            if (petState.health < 50) {
                petState.happiness = Math.max(0, petState.happiness - 0.2);
            }
            
            // Decrease health slightly over time
            petState.health = Math.max(0, petState.health - 0.1);
            
            // Increase age
            petState.age += 1;
        } else {
            // While sleeping, restore energy and happiness
            petState.energy = Math.min(100, petState.energy + 1.5);
            petState.happiness = Math.min(100, petState.happiness + 0.5);
            petState.health = Math.min(100, petState.health + 0.3);
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
    
    petState.hunger = Math.min(100, petState.hunger + 25);
    petState.happiness = Math.min(100, petState.happiness + 5);
    petState.health = Math.min(100, petState.health + 3);
    addXP(5);
    
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
    
    petState.happiness = Math.min(100, petState.happiness + 30);
    petState.energy = Math.max(0, petState.energy - 25);
    petState.hunger = Math.max(0, petState.hunger - 15);
    addXP(10);
    
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
    
    petState.happiness = Math.min(100, petState.happiness + 12);
    addXP(3);
    
    triggerAnimation('happy');
    showNotification('That feels nice! 🥰');
    saveGameState();
}

function healPet() {
    if (petState.isSleeping) {
        alert('Your pet is sleeping! Let it rest.');
        return;
    }
    
    petState.health = Math.min(100, petState.health + 40);
    petState.happiness = Math.min(100, petState.happiness + 10);
    addXP(8);
    
    triggerAnimation('happy');
    showNotification('All better! 💊');
    saveGameState();
}

function trainPet() {
    if (petState.isSleeping) {
        alert('Your pet is sleeping! Let it rest.');
        return;
    }
    
    if (petState.energy < 30) {
        alert('Your pet is too tired to train!');
        return;
    }
    
    petState.energy = Math.max(0, petState.energy - 30);
    petState.hunger = Math.max(0, petState.hunger - 20);
    addXP(20);
    
    triggerAnimation('happy');
    showNotification('Great training! 💪');
    saveGameState();
}

// ===== XP and Leveling System =====

function addXP(amount) {
    petState.xp += amount;
    
    if (petState.xp >= 100) {
        levelUp();
    }
}

function levelUp() {
    petState.level += 1;
    petState.xp = 0;
    petState.coins += 50;
    
    showNotification(`Level Up! 🎉 You're now level ${petState.level}!`);
    triggerAnimation('happy');
}

// ===== Shop System =====

function buyItem(itemName, cost) {
    if (petState.coins < cost) {
        alert(`You need ${cost - petState.coins} more coins!`);
        return;
    }
    
    petState.coins -= cost;
    
    // Use the item immediately
    useItem(itemName);
    
    showNotification(`Bought ${itemName}! 🛍️`);
    updateDisplay();
    saveGameState();
}

function useItem(itemName) {
    switch(itemName) {
        case 'pizza':
        case 'cake':
        case 'sushi':
            petState.hunger = Math.min(100, petState.hunger + 30);
            petState.happiness = Math.min(100, petState.happiness + 10);
            addXP(5);
            break;
        case 'ball':
        case 'frisbee':
        case 'rocket':
            petState.happiness = Math.min(100, petState.happiness + 35);
            petState.energy = Math.max(0, petState.energy - 20);
            addXP(15);
            break;
    }
}

function buySkin(skinName) {
    if (petState.currentSkin === skinName) {
        showNotification(`You already have the ${skinName} skin!`);
        return;
    }
    
    if (petState.ownedSkins.includes(skinName)) {
        // Switch to owned skin
        petState.currentSkin = skinName;
        applySkin(skinName);
        showNotification(`Switched to ${skinName} skin! 🎨`);
    } else {
        // Buy new skin
        const skinCosts = {
            'fire': 100,
            'ice': 100,
            'galaxy': 150
        };
        
        const cost = skinCosts[skinName];
        
        if (petState.coins < cost) {
            alert(`You need ${cost - petState.coins} more coins!`);
            return;
        }
        
        petState.coins -= cost;
        petState.ownedSkins.push(skinName);
        petState.currentSkin = skinName;
        applySkin(skinName);
        showNotification(`Unlocked ${skinName} skin! 🎨`);
    }
    
    updateDisplay();
    saveGameState();
}

function applySkin(skinName) {
    const petBody = document.querySelector('.pet-body');
    petBody.classList.remove('fire', 'ice', 'galaxy');
    
    if (skinName !== 'classic') {
        petBody.classList.add(skinName);
    }
}

// ===== Mini-Game: Catch the Treats =====

function startMiniGame() {
    miniGameActive = true;
    miniGameScore = 0;
    miniGameTime = 30;
    
    document.getElementById('startGameBtn').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    document.getElementById('gameResult').style.display = 'none';
    
    updateGameDisplay();
    spawnTreats();
    
    const gameTimer = setInterval(() => {
        miniGameTime--;
        document.getElementById('gameTimer').textContent = miniGameTime;
        
        if (miniGameTime <= 0) {
            clearInterval(gameTimer);
            endMiniGame();
        }
    }, 1000);
}

function spawnTreats() {
    if (!miniGameActive) return;
    
    const gameArea = document.getElementById('gameArea');
    const treats = ['🍕', '🍰', '🍣', '🍪', '🍩'];
    const randomTreat = treats[Math.floor(Math.random() * treats.length)];
    
    const treat = document.createElement('div');
    treat.className = 'treat';
    treat.textContent = randomTreat;
    
    const x = Math.random() * (gameArea.clientWidth - 50);
    const y = Math.random() * (gameArea.clientHeight - 50);
    
    treat.style.left = x + 'px';
    treat.style.top = y + 'px';
    
    treat.onclick = (e) => {
        e.stopPropagation();
        miniGameScore++;
        updateGameDisplay();
        treat.remove();
        spawnTreats();
    };
    
    gameArea.appendChild(treat);
    
    setTimeout(() => {
        if (treat.parentNode) {
            treat.remove();
            if (miniGameActive) {
                spawnTreats();
            }
        }
    }, 2000);
}

function updateGameDisplay() {
    document.getElementById('gameScore').textContent = miniGameScore;
}

function endMiniGame() {
    miniGameActive = false;
    
    const earnedCoins = miniGameScore * 5;
    petState.coins += earnedCoins;
    addXP(miniGameScore * 2);
    
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('gameResult').style.display = 'block';
    document.getElementById('finalScore').textContent = miniGameScore;
    document.getElementById('earnedCoins').textContent = earnedCoins;
    
    saveGameState();
}

function resetMiniGame() {
    document.getElementById('gameArea').innerHTML = '';
    document.getElementById('startGameBtn').style.display = 'block';
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('gameResult').style.display = 'none';
}

// ===== Display Update Function =====

function updateDisplay() {
    // Update stats
    document.getElementById('hungerValue').textContent = Math.round(petState.hunger) + '%';
    document.getElementById('happinessValue').textContent = Math.round(petState.happiness) + '%';
    document.getElementById('energyValue').textContent = Math.round(petState.energy) + '%';
    document.getElementById('healthValue').textContent = Math.round(petState.health) + '%';
    document.getElementById('ageValue').textContent = Math.round(petState.age / 60) + ' mins';
    document.getElementById('levelValue').textContent = petState.level;
    document.getElementById('levelDisplay').textContent = petState.level;
    document.getElementById('coinCount').textContent = petState.coins;
    document.getElementById('shopCoins').textContent = petState.coins;
    document.getElementById('skinValue').textContent = petState.currentSkin.charAt(0).toUpperCase() + petState.currentSkin.slice(1);
    
    // Update stat bars
    document.getElementById('hungerBar').style.width = petState.hunger + '%';
    document.getElementById('happinessBar').style.width = petState.happiness + '%';
    document.getElementById('energyBar').style.width = petState.energy + '%';
    document.getElementById('healthBar').style.width = petState.health + '%';
    
    // Update XP bar
    const xpPercentage = (petState.xp / 100) * 100;
    const xpBar = document.getElementById('xpBar');
    xpBar.style.setProperty('--xp-width', xpPercentage + '%');
    document.getElementById('xpText').textContent = petState.xp + '/100 XP';
    
    // Update mood display
    updateMood();
    
    // Update pet name
    document.getElementById('petName').value = petState.name;
    
    // Apply current skin
    applySkin(petState.currentSkin);
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
    } else if (petState.health < 30) {
        mood = 'Sick';
        emoji = '🤒';
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

// ===== Tab Navigation =====

function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
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
            opacity: 0;
            transform: translateX(400px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }
    
    #xpBar::after {
        content: '';
        display: block;
        height: 100%;
        background: linear-gradient(90deg, #667eea, #764ba2);
        width: var(--xp-width, 0%);
        transition: width 0.3s ease;
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
        petState.health = 100;
        petState.age = 0;
        petState.level = 1;
        petState.xp = 0;
        petState.coins = 0;
        petState.isSleeping = false;
        petState.currentSkin = 'classic';
        petState.ownedSkins = ['classic'];
        petState.inventory = {};
        
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
