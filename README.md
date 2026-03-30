# Carbon Pod Website

A modern, glassmorphism-styled marketing website for Carbon Pod, a platform designed to help businesses manage their carbon footprint and achieve net-zero goals.

## Features

- **Modern Design**: Utilizes glassmorphism with vibrant teal and green accents.
- **Responsive Layout**: Fully adaptive for desktop, tablet, and mobile devices.
- **Smooth Animations**: Scroll-triggered reveal animations and hover effects.
- **Interactive Elements**:
  - Navbar with scroll effects.
  - Mobile menu toggle.
  - Mock contact form submission.
  - Hover-to-glow effects on cards.

## Tech Stack

- **HTML5**
- **CSS3** (Custom Properties, Flexbox, Grid)
- **JavaScript (Vanilla)**

## Getting Started

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Open `index.html` in your web browser.

## Project Structure

- `index.html`: Main application entry point.
- `style.css`: Global styles, components, and animations.
- `script.js`: Client-side logic and interactivity.
- `assets/`: Contains all images and media assets.

## Development

### Adding New Features

- **CSS**: Add new styles to `style.css`. Use the existing CSS custom properties for colors and spacing.
- **JavaScript**: Add event listeners or logic to `script.js`.

### Animation System

The site uses a simple scroll-based animation system:
1.  Elements with the class `reveal` are initially hidden (`opacity: 0`).
2.  When an element enters the viewport (within 100px of the bottom), it gains the `active` class, triggering the fade-in and slide-up animation.
3.  `delay-1`, `delay-2`, etc., can be added to stagger animations.