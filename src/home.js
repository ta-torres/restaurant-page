import heroImg from './assets/img/hero-img-1.jpeg';

function initHome(content) {
    const main = document.createElement('main');
    main.classList.add('home');

    const section = document.createElement('section');
    section.classList.add('home-section');

    const heroContainer = document.createElement('div');
    heroContainer.classList.add('hero-container');

    const heroRow = document.createElement('div');
    heroRow.classList.add('hero-row');

    const heroDescription = document.createElement('div');
    heroDescription.classList.add('hero-description');

    const heroPretitle = document.createElement('h2');
    heroPretitle.classList.add('hero-pretitle');
    heroPretitle.textContent = 'Welcome to';

    const heroTitle = document.createElement('h1');
    heroTitle.classList.add('hero-title');
    heroTitle.textContent = 'Gourmet Haven';

    const heroText = document.createElement('p');
    heroText.classList.add('hero-text');
    heroText.textContent = 'We are a family-owned restaurant that has been serving delicious food since 1990.';

    const heroCallToAction = document.createElement('div');
    heroCallToAction.classList.add('hero-call-to-action');

    const heroMoreLink = document.createElement('a');
    heroMoreLink.classList.add('link');
    heroMoreLink.classList.add('hero-more-link');
    heroMoreLink.textContent = 'Learn More';
    heroMoreLink.href = '#';

    const heroOrderLink = document.createElement('a');
    heroOrderLink.classList.add('link');
    heroOrderLink.classList.add('hero-order-link');
    heroOrderLink.textContent = 'Order Now';
    heroOrderLink.href = '#';

    heroCallToAction.appendChild(heroMoreLink);
    heroCallToAction.appendChild(heroOrderLink);

    heroDescription.appendChild(heroPretitle);
    heroDescription.appendChild(heroTitle);
    heroDescription.appendChild(heroText);
    heroDescription.appendChild(heroCallToAction);

    const heroImageContainer = document.createElement('div');
    heroImageContainer.classList.add('hero-image-container');

    const heroImage = document.createElement('img');
    heroImage.classList.add('hero-image');
    heroImage.src = heroImg;
    heroImage.alt = 'An image of the restaurant';

    heroImageContainer.appendChild(heroImage);

    heroRow.appendChild(heroDescription);
    heroRow.appendChild(heroImageContainer);

    heroContainer.appendChild(heroRow);
    section.appendChild(heroContainer);

    main.appendChild(section);

    content.appendChild(main);

    return content;
}

export default initHome;