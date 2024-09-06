function initMenu(content) {
    const main = document.createElement('main');
    main.classList.add('menu');

    const section = document.createElement('section');
    section.classList.add('menu-section', 'section');

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-title', 'section-title');
    menuTitle.textContent = 'Our Menu';

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    const items = [
        { name: 'Spaghetti Carbonara', price: '$12' },
        { name: 'Margherita Pizza', price: '$10' },
        { name: 'Caesar Salad', price: '$8' },
        { name: 'Grilled Salmon', price: '$15' },
        { name: 'Beef Tacos', price: '$9' },
        { name: 'Chicken Alfredo', price: '$13' },
        { name: 'Veggie Burger', price: '$11' },
        { name: 'Lobster Bisque', price: '$14' },
        { name: 'Chocolate Cake', price: '$6' },
        { name: 'Apple Pie', price: '$5' },
    ];

    items.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('span');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = item.price;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuList.appendChild(menuItem);
    });

    section.appendChild(menuTitle);
    section.appendChild(menuList);
    main.appendChild(section);

    content.appendChild(main);
}

export default initMenu;
