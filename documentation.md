# Himali Gold House - Project Documentation

## Overview

Himali Gold House is a static front-end jewelry shop website built for a Nepali gold jewelry business. It showcases products, displays gold rates, accepts customer inquiries, and provides a live search feature.

---

## Project Structure

```
jewelry-shop/
│
├── index.html        # Main HTML page
├── style.css         # Custom styles
├── script.js         # JavaScript functionality
├── README.md         # Project readme
├── documentation.md  # This file
└── images/           # Local images (optional)
```

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and content |
| CSS3 | Styling and animations |
| JavaScript (ES6) | Interactivity and DOM manipulation |
| Bootstrap 5.3.3 | Responsive layout and components |

---

## Pages / Sections

### 1. Navbar
- Sticky top navigation bar
- Collapses into a hamburger menu on mobile
- Links: Home, Products, About, Contact

### 2. Hero Section
- Full-screen background with dark overlay
- Shop tagline and description
- Live search box to filter products

### 3. Gold Rate Banner
- Displays today's gold rate (Rs. 1,45,000 per Tola)
- Gold-colored background for visual emphasis

### 4. Products Section
- 3 product cards: Gold Necklace, Gold Ring, Gold Earrings
- Each card shows image, name, description, price, and Add to Cart button

### 5. About Section
- Dark background section describing the shop

### 6. Customer Reviews
- 3 review boxes with customer quotes and names

### 7. Contact Form
- Fields: Name, Email, Message
- Submit button to send inquiry

### 8. Footer
- Copyright notice

---

## JavaScript Features

### Add to Cart
```js
let buttons = document.querySelectorAll(".addCart");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Item Added to Cart!");
    });
});
```
- Selects all "Add to Cart" buttons using `querySelectorAll`
- Attaches a click event listener to each button
- Shows an alert when clicked

### Live Search Filter
```js
searchBox.addEventListener("keyup", function(){
    let searchValue = searchBox.value.toLowerCase();
    let products = document.querySelectorAll(".product-card");
    products.forEach(product => {
        let text = product.innerText.toLowerCase();
        product.style.display = text.includes(searchValue) ? "block" : "none";
    });
});
```
- Listens for `keyup` event on the search box
- Filters product cards by matching inner text with search input
- Hides non-matching cards using `display: none`

---

## CSS Highlights

### Responsive Design
```css
@media(max-width:768px){
    .hero-section h1 { font-size: 2.5rem; }
    #searchBox { width: 100% !important; }
}
```

### Card Hover Effect
```css
.card:hover {
    transform: scale(1.05);
}
```

### Hero Background Overlay
```css
background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
url('...');
```

---

## How to Run

1. Clone or download the project
2. Open `index.html` in any modern browser
3. No server or build tools required — it's fully static

```bash
git clone https://github.com/senihangkedem/gold_project.git
cd gold_project
# Open index.html in browser
```

---

## Future Improvements

- Add a real cart system with localStorage
- Connect contact form to a backend or email service
- Fetch live gold rates from an API
- Add more product categories (bangles, chains, pendants)
- Implement user login and order history

---

## Author

Developed as a front-end web development project for Himali Gold House, Nepal.

© 2026 Himali Gold House | Nepal
