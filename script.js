import shoes from './shoes.js';

const itemsContainer = document.querySelector(".items");
const itemTemplate = document.querySelector(".item");

itemTemplate.remove();

shoes.forEach((shoe) => {
    const item = itemTemplate.cloneNode(true);

    item.querySelector(".item-name").innerHTML = shoe.name;
    item.querySelector(".item-type").innerHTML = shoe.type;
    item.querySelector(".item-price").innerHTML = shoe.price;
    item.querySelector(".item-image img").src = shoe.image;

    itemsContainer.appendChild(item);
});