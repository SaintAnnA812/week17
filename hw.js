const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    getInfo() {

        return `<div>Тип:${this.type}<br/> Бренд:${this.brand}</div>`;

    }
    getPrice() {
        return `<div>Цена:${this.price}</div>`;
    }
}


class Car extends Transport {
    constructor(type, price, brand, doors) {
        super(type, price, brand)
        this.doors = doors;

    }
    getDoorsCount() {
        return `<div>Двери:${this.doors}</div><br/>`;
    }
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand)
        this.maxSpeed = maxSpeed;

    }
    getMaxSpeed() {
        return `<div>Макс скорость:${this.maxSpeed}</div><br/>`;
    }
}
let transports = document.getElementById('transports');
let allTran = '';

data.forEach((item) => {
    switch (item.type) {
        case 'car':
            let car = new Car(item.type, item.price, item.brand, item.doors)
            allTran += car.getInfo() + car.getPrice() + car.getDoorsCount();
            break;
        case 'bike':
            let bike = new Bike(item.type, item.price, item.brand, item.maxSpeed)
            allTran += bike.getInfo() + bike.getPrice() + bike.getMaxSpeed();
            break;
    }
})
transports.innerHTML = allTran