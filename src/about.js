function initAbout(content) {
    const main = document.createElement('main');
    main.classList.add('about');

    const section = document.createElement('section');
    section.classList.add('about-section', 'section');

    const aboutTitle = document.createElement('h1');
    aboutTitle.classList.add('about-title', 'section-title');
    aboutTitle.textContent = 'About Us';

    const paragraphs = [
        "Gourmet Haven is a family-owned restaurant that has been serving delicious food since 1990. We pride ourselves on our friendly atmosphere and high-quality ingredients. Our chefs are passionate about creating dishes that delight the senses and bring people together.",
        "Our restaurant features a cozy dining area, perfect for family gatherings, romantic dinners, and casual outings with friends. We also offer a private dining room for special occasions and events.",
        "We believe in using locally sourced ingredients to support our community and provide the freshest flavors in every dish. Our menu is carefully crafted to offer a variety of options to suit all tastes, including vegetarian and gluten-free choices.",
        "Thank you for choosing Gourmet Haven. We look forward to serving you and making your dining experience unforgettable."
    ];

    const aboutText = document.createElement('div');
    aboutText.classList.add('about-text');
    paragraphs.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        aboutText.appendChild(p);
    });

    section.appendChild(aboutTitle);
    section.appendChild(aboutText);
    main.appendChild(section);

    content.appendChild(main);
}

export default initAbout;
