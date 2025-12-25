# 🚀 Ankit Raj - Portfolio Website

A modern, futuristic portfolio website showcasing my skills, projects, and experience in AI/ML and web development. Built with cutting-edge design principles and smooth animations for an immersive user experience.

![Portfolio Preview](img/hologram.svg)

## ✨ Features

- **Futuristic Design**: Sky-blue themed UI with neon effects, glowing elements, and holographic animations
- **Responsive Layout**: Fully optimized for mobile, tablet, laptop, and desktop devices
- **Interactive Elements**: 
  - Custom cursor with hover effects
  - Touch ripple animations
  - Smooth scrolling navigation
  - Dynamic typing effect
  - Animated background with particle system
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Project Filtering**: Filter projects by technology tags
- **Loading Screen**: Engaging starfield animation during page load
- **Performance Optimized**: Reduced motion support and mobile-specific optimizations

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Advanced animations, gradients, and responsive design
- **JavaScript (ES6+)** - Interactive features and dynamic content

### Design & Animation
- **Custom CSS Animations** - Glitch effects, holographic elements, particle systems
- **Canvas API** - Starfield and animated backgrounds
- **Font Awesome** - Icon library
- **Google Fonts** - Orbitron, Rajdhani, Exo 2, Quantico, Quicksand, Fira Code

## 📂 Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet with animations and responsive design
├── js/
│   └── script.js       # JavaScript for interactivity
├── img/                # Images and assets
│   ├── favicon.svg
│   ├── hologram.svg
│   ├── profile.jpg
│   └── project*.svg    # Project thumbnails
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JS (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ankit2006Raj/Portfolio.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Portfolio
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

4. **View the website**
   - Open `http://localhost:8000` in your browser

## 🎨 Customization

### Update Personal Information

1. **Edit `index.html`**:
   - Update name, bio, and contact information
   - Modify project details and links
   - Change skill percentages

2. **Replace Images**:
   - Add your profile photo to `img/profile.jpg`
   - Update project thumbnails in the `img/` folder

3. **Customize Colors** in `css/style.css`:
   ```css
   :root {
     --primary-color: #00aaff;    /* Main sky blue */
     --secondary-color: #0077cc;  /* Deeper sky */
     --accent-color: #7be8ff;     /* Light cyan accent */
     --bg-color: #071028;         /* Deep navy background */
   }
   ```

### Add New Projects

Add a new project card in the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <img src="img/your-project.svg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description goes here.</p>
        <div class="project-tags">
            <span>Tech1</span>
            <span>Tech2</span>
        </div>
    </div>
</div>
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Key Sections

1. **Home** - Hero section with animated typing effect
2. **About** - Personal introduction and background
3. **Skills** - Technical abilities with progress bars
4. **Projects** - Portfolio of work with filtering
5. **Contact** - Get in touch section

## 🔧 Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet, laptop, and desktop
- Touch-optimized interactions
- Safe area insets for modern devices

### Performance
- Lazy loading for images
- Optimized animations
- Reduced motion support
- Efficient canvas rendering

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast mode support

## 📈 Future Enhancements

- [ ] Add blog section
- [ ] Integrate contact form backend
- [ ] Add more project case studies
- [ ] Implement PWA features
- [ ] Add multilingual support
- [ ] Include testimonials section

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Ankit2006Raj/Portfolio/issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ankit Raj**

- GitHub: [@Ankit2006Raj](https://github.com/Ankit2006Raj)
- Email: ankit9905163014@gmail.com

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

## 📸 Screenshots

### Desktop View
![Desktop View](img/hologram.png)

### Mobile View
Fully responsive design optimized for all screen sizes.

---

**Built with ❤️ by Ankit Raj**
