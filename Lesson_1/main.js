const products = [
    { id: 1, title: 'Товар № 1', price: 10 },
    { id: 2, title: 'Товар № 2', price: 20 },
    { id: 3, title: 'Товар № 3', price: 30 },
    { id: 4, title: 'Товар № 4', price: 40 },
    { id: 5, title: 'Товар № 5', price: 50 },
    { id: 6, title: 'Товар № 6', price: 60 },
    { id: 7, title: 'Товар № 7', price: 70 },
    { id: 8, title: 'Товар № 8', price: 80 },
    { id: 9, title: 'Товар № 9', price: 90 },
    { id: 10, title: 'Товар № 10', price: 100 },
];

const renderProduct = ({title, price }, img ='https://placehold.it/200x150') =>
             `<div class="product-item">
                <img src="${img}" alt="image" class="product-img">
                <h3 class="product-title">${title}</h3>
                <p class="product-price">${price} руб</p>
                <button class="my-cart">В корзину</button>
            </div>`;

const renderProducts = list => {
    document.querySelector('.catalog').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
};  /* Если в метод join в качестве необязательного параметра разделителя мы указываем любой символ 
(либо не указываем вообще), то между элементами будет выводится символ/запятая (по умолчанию). 
В данном случае сепаратор указан пустым, ничего не выводится.*/

renderProducts(products); 