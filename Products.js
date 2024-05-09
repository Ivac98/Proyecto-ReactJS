const Products = [
    {
        id: "1",
        image: "src/assets/images/Products/Jean.png",
        name: 'Jean Azul Vermunt',
        price: 12000,
        description: "Jean Azul de excelente calidad. 90% fibra de carbono, 15% jean",
        category: "pantalones",
        stock: 14
    },
    {
        id: "2",
        image: "src/assets/images/Products/ChombaRosa.png",
        name: 'Chomba Penguin Rosa Salmon',
        price: 35000,
        description: "Remerita top, para gente top. 100% plastico",
        category: "remeras",
        stock: 20
    },
    {
        id: "3",
        image: "src/assets/images/Products/Nike-Adidas.png",
        name: 'Nike Adidas Original',
        price: 80000,
        description: "Para que elegir Nike o Adidas, si se puede tener ambas. Original importadas con caja sellada",
        category: "calzados",
        stock: 8
    },
    {
        id: "4",
        image: "src/assets/images/Products/Yogin.png",
        name: 'Yogin Hombre XS',
        price: 4000,
        description: "Pantalones comunes y corrientes, comoditos",
        category: "pantalones",
        stock: 32
    },
    {
        id: "5",
        image: "src/assets/images/Products/Messi.png",
        name: 'Remera Messi',
        price: 181222,
        description: "Una remera del campeon para la mejor hinchada de todas",
        category: "remeras",
        stock: 36
    },
    {
        id: "6",
        image: "src/assets/images/Products/Jordan.png",
        name: 'Yordan Orijinales',
        price: 800000,
        description: "SON VERDADERAS, para nada una imitacion",
        category: "calzados",
        stock: 2
    },
]

export const fetchItems = () => {
    return new Promise((resolve) => {
            resolve(Products)
    })
}

export const fetchItemsById = (productId) => {
    return new Promise((resolve) => {
            resolve(Products.find(Products => Products.id === productId))
    })
}

export const fetchItemsByCategory = (categoryId) => {
    return new Promise((resolve) => {
            resolve(Products.filter(Products => Products.category === categoryId))
    })
}