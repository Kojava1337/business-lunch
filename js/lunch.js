const dishGrids = {
    soup: document.querySelector("#soups .dish-grid"),
    main_course: document.querySelector("#main-courses .dish-grid"),
    drink: document.querySelector("#drinks .dish-grid")
};

dishes.sort((a, b) => a.name.localeCompare(b.name, "ru"));

dishes.forEach((dish) => {
    const card = document.createElement("div");

    card.classList.add("dish-card");
    card.dataset.dish = dish.keyword;

    card.innerHTML = `
        <img src="${dish.image}" alt="${dish.alt}">
        <p class="dish-price">${dish.price} ₽</p>
        <p class="dish-name">${dish.name}</p>
        <p class="dish-portion">${dish.count}</p>
        <button type="button">Добавить</button>
    `;

    dishGrids[dish.category].append(card);
});