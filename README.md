# 🎮 Virtual Pixel Pet

A fun, interactive, and open-source **Virtual Pixel Pet** game built with vanilla HTML, CSS, and JavaScript. Take care of your digital companion by feeding it, playing with it, and helping it rest!

![Virtual Pixel Pet](https://img.shields.io/badge/Status-Active-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## ✨ Features

- **Interactive Pet**: A cute pixel pet that responds to your actions with animations and mood changes.
- **Pet Stats System**: Monitor and manage your pet's hunger, happiness, and energy levels.
- **Multiple Actions**: Feed, play, pet, and put your pet to sleep.
- **Persistent Game State**: Your pet's progress is saved in the browser's local storage.
- **Custom Pet Names**: Name your pet and watch it respond!
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices.
- **Beautiful UI**: Modern gradient design with smooth animations.
- **Mood System**: Your pet's mood changes based on its stats and actions.

## 🚀 Quick Start

### Option 1: Play Online
Simply open `index.html` in your web browser to start playing!

### Option 2: Clone and Run Locally
```bash
git clone https://github.com/adeniyisogo/github-practical.git
cd github-practical
# Open index.html in your browser
```

### Option 3: Use with a Local Server
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Then visit http://localhost:8000
```

## 🎮 How to Play

1. **Feed Your Pet**: Click the 🍖 Feed button to reduce hunger.
2. **Play with Your Pet**: Click the 🎾 Play button to increase happiness (uses energy).
3. **Pet Your Pet**: Click the 🤚 Pet button to show affection.
4. **Let It Sleep**: Click the 😴 Sleep button to restore energy and happiness.
5. **Rename Your Pet**: Enter a custom name and click "Update Name".
6. **Reset Game**: Click 🔄 Reset Game to start fresh.

## 📊 Pet Stats

| Stat | Description | Effect |
|------|-------------|--------|
| **Hunger** | Decreases over time | Low hunger reduces happiness |
| **Happiness** | Affected by actions | Determines pet's mood |
| **Energy** | Consumed by playing | Restored by sleeping |
| **Age** | Increases over time | Tracks how long you've had your pet |

## 🧬 Pet Moods

- 😴 **Sleeping**: Pet is resting and restoring energy
- 😫 **Starving**: Hunger is critically low
- 😢 **Sad**: Happiness is low
- 😩 **Tired**: Energy is low
- 😄 **Very Happy**: Happiness is very high
- 😊 **Happy**: Normal happy state
- 😐 **Okay**: Neutral mood

## 📁 Project Structure

```
github-practical/
├── index.html          # Main HTML file with game UI
├── style.css           # Styling and animations
├── script.js           # Game logic and state management
├── README.md           # Project documentation
└── LICENSE             # MIT License
```

## 💻 Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Flexbox, Grid, Gradients, and Animations
- **JavaScript (ES6)**: Game logic, state management, and DOM manipulation
- **Local Storage API**: Persistent game state

### Key Functions

| Function | Purpose |
|----------|---------|
| `feedPet()` | Increases hunger satisfaction |
| `playWithPet()` | Increases happiness, uses energy |
| `putToSleep()` | Toggles sleep mode |
| `petPet()` | Shows affection to pet |
| `updateDisplay()` | Refreshes all UI elements |
| `saveGameState()` | Saves progress to local storage |
| `loadGameState()` | Loads saved progress |

## 🎨 Customization

### Change Pet Color
Edit `style.css` and modify the `.pet-body` gradient:
```css
.pet-body {
    background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

### Adjust Game Speed
Edit `script.js` and change the interval in `startGameLoop()`:
```javascript
setInterval(() => {
    // Game logic here
}, 1000); // Change 1000 to speed up/slow down
```

### Add New Actions
1. Add a button in `index.html`
2. Create a function in `script.js`
3. Update pet stats and call `triggerAnimation()` and `showNotification()`

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

1. **Fork** the repository
2. **Create** a new branch: `git checkout -b feature/your-feature`
3. **Make** your changes
4. **Commit**: `git commit -m 'Add your feature'`
5. **Push**: `git push origin feature/your-feature`
6. **Open** a Pull Request

### Ideas for Contributions
- Add new pet types/skins
- Create different pet animations
- Add sound effects
- Implement pet leveling system
- Add achievements/badges
- Create multiplayer features
- Add different environments/themes
- Implement pet breeding system

## 🐛 Bug Reports

Found a bug? Please open an issue on GitHub with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS information

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by classic Tamagotchi games
- Built with ❤️ for the open-source community
- Special thanks to all contributors

## 📞 Contact & Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/adeniyisogo/github-practical/issues)
- **Discussions**: [Join our community discussions](https://github.com/adeniyisogo/github-practical/discussions)

## 🎯 Roadmap

- [ ] Add sound effects and background music
- [ ] Implement pet leveling and evolution
- [ ] Create achievement system
- [ ] Add mini-games
- [ ] Implement pet marketplace
- [ ] Add multiplayer features
- [ ] Create mobile app version
- [ ] Add dark mode theme

---

**Made with ❤️ by the Virtual Pixel Pet Community**

⭐ If you enjoy this project, please consider giving it a star! ⭐
