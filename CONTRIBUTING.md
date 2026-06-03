# Contributing to Virtual Pixel Pet

Thank you for your interest in contributing to Virtual Pixel Pet! We welcome contributions from everyone. This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and inclusive in all interactions. We are committed to providing a welcoming and inspiring community for all.

## How to Contribute

### Reporting Bugs

Before creating a bug report, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots if possible**
- **Include your browser and OS information**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and expected behavior**
- **Explain why this enhancement would be useful**

### Pull Requests

- Fill in the required template
- Follow the JavaScript and CSS styleguides
- Include appropriate test cases
- Update documentation as needed
- End all files with a newline

## Development Setup

1. **Fork** the repository
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/github-practical.git
   cd github-practical
   ```
3. **Create** a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make** your changes
5. **Test** your changes in your browser
6. **Commit** your changes:
   ```bash
   git commit -m "Add your commit message"
   ```
7. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Open** a Pull Request

## Styleguides

### JavaScript Style Guide

- Use ES6+ features
- Use meaningful variable and function names
- Add comments for complex logic
- Follow the existing code style
- Use `const` by default, `let` when needed, avoid `var`
- Use arrow functions where appropriate

Example:
```javascript
// Good
const calculatePetMood = (happiness, hunger) => {
    if (hunger < 20) return 'Starving';
    if (happiness > 80) return 'Very Happy';
    return 'Okay';
};

// Avoid
var mood = function(h, hu) {
    if (hu < 20) return 'Starving';
    if (h > 80) return 'Very Happy';
    return 'Okay';
};
```

### CSS Style Guide

- Use meaningful class names
- Organize styles logically (layout, components, utilities)
- Use CSS variables for colors and common values
- Keep selectors simple and specific
- Use flexbox and grid for layouts
- Mobile-first responsive design

Example:
```css
/* Good */
.pet-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

/* Avoid */
#pet-container div {
    display: flex;
    justify-content: center;
}
```

### HTML Style Guide

- Use semantic HTML5 elements
- Use meaningful IDs and classes
- Maintain proper indentation
- Keep HTML clean and organized
- Use data attributes for JavaScript hooks

## Commit Message Guidelines

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Example:
```
Add pet leveling system

- Implement experience points tracking
- Add level-up animations
- Update UI to display current level

Fixes #123
```

## Testing

Before submitting a pull request:

1. Test in multiple browsers (Chrome, Firefox, Safari, Edge)
2. Test on mobile devices or use browser dev tools
3. Verify all buttons and interactions work correctly
4. Check that the game state persists after page reload
5. Ensure no console errors appear

## Documentation

- Update README.md if you add new features
- Add comments to complex functions
- Update CONTRIBUTING.md if you change the contribution process
- Keep documentation clear and concise

## Feature Ideas

Here are some features we'd love to see contributed:

- **New Pet Skins**: Add different pet designs
- **Sound Effects**: Add audio feedback for actions
- **Achievements**: Create an achievement/badge system
- **Pet Leveling**: Implement experience and leveling
- **Mini-games**: Create games to earn rewards
- **Themes**: Add dark mode or different color themes
- **Multiplayer**: Add features for multiple pets
- **Analytics**: Track player statistics

## Questions?

Feel free to open an issue with the label `question` if you have any questions about contributing.

## License

By contributing to Virtual Pixel Pet, you agree that your contributions will be licensed under its MIT License.

---

Thank you for contributing! 🎉
