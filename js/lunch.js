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

const selectedDishes = {
    soup: null,
    main_course: null,
    drink: null
};

const orderLabels = {
    soup: document.querySelector("#selected-soup"),
    main_course: document.querySelector("#selected-main-course"),
    drink: document.querySelector("#selected-drink")
};

const emptyOrder = document.querySelector("#empty-order");
const orderItems = document.querySelector("#order-items");

document.querySelectorAll(".dish-card").forEach((card) => {
    const button = card.querySelector("button");

    button.addEventListener("click", () => {
        const dish = dishes.find((item) => {
            return item.keyword === card.dataset.dish;
        });

        selectedDishes[dish.category] = dish;

        orderLabels[dish.category].textContent =
            `${dish.name} — ${dish.price} ₽`;

        document.querySelector(`#${dish.category}`).value = dish.keyword;

        emptyOrder.hidden = true;
        orderItems.hidden = false;

        dishGrids[dish.category].querySelectorAll(".dish-card").forEach((item) => {
            item.classList.remove("selected");
            item.querySelector("button").textContent = "Добавить";
        });

        card.classList.add("selected");
        button.textContent = "Добавлено";
    });
});

const orderForm = document.querySelector(".order-section form");

orderForm.addEventListener("reset", () => {
    Object.keys(selectedDishes).forEach((category) => {
        selectedDishes[category] = null;

        document.querySelector(`#${category}`).value = "";

        orderLabels[category].textContent =
            category === "drink"
                ? "Напиток не выбран"
                : "Блюдо не выбрано";
    });

    document.querySelectorAll(".dish-card.selected").forEach((card) => {
        card.classList.remove("selected");
        card.querySelector("button").textContent = "Добавить";
    });

    emptyOrder.hidden = false;
    orderItems.hidden = true;
});