// Dữ liệu mẫu cho các món cà phê
const coffeeItems = [
    { id: 1, name: "Cà Phê Đen", price: 30000, imageUrl: "1.jpg" },
    { id: 2, name: "Cà Phê Sữa", price: 35000, imageUrl: "3.jpg" },
    { id: 3, name: "Cà Phê Muối", price: 45000, imageUrl: "2.jpg" },
    { id: 2, name: "Capuchino", price: 50000, imageUrl: "4.jpg" },

    // Thêm dữ liệu cho các món cà phê khác tại đây
];

// Biến để theo dõi đơn hàng và tổng giá trị
let orderItems = [];
let totalPrice = 0;

// Hàm hiển thị thực đơn cà phê
function populateCoffeeMenu() {
    const coffeeList = document.querySelector(".coffee-items");
    coffeeItems.forEach((item) => {
        const coffeeItem = document.createElement("div");
        coffeeItem.classList.add("coffee-item");

        const image = document.createElement("img");
        image.src = item.imageUrl;
        image.alt = item.name;

        const name = document.createElement("h3");
        name.textContent = item.name;

        const price = document.createElement("p");
        price.textContent = `${item.price.toLocaleString('vi-VN')} VND`;

        const addButton = document.createElement("button");
        addButton.textContent = "Thêm";
        addButton.addEventListener("click", () => addToOrder(item));

        coffeeItem.appendChild(image);
        coffeeItem.appendChild(name);
        coffeeItem.appendChild(price);
        coffeeItem.appendChild(addButton);

        coffeeList.appendChild(coffeeItem);
    });
}

// Hàm thêm món vào đơn hàng
function addToOrder(item) {
    orderItems.push(item);
    const orderList = document.querySelector(".order-items");
    const orderItem = document.createElement("li");

    const itemName = document.createElement("span");
    itemName.textContent = item.name;

    const itemPrice = document.createElement("span");
    itemPrice.textContent = `${item.price.toLocaleString('vi-VN')} VND`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Xóa";
    removeButton.addEventListener("click", () => removeFromOrder(item));

    orderItem.appendChild(itemName);
    orderItem.appendChild(itemPrice);
    orderItem.appendChild(removeButton);

    orderList.appendChild(orderItem);

    // Cập nhật tổng giá trị khi thêm món
    totalPrice += item.price;
    document.getElementById("total-price").textContent = 
        totalPrice.toLocaleString('vi-VN') + " VND";
}

// Hàm xóa món khỏi đơn hàng
function removeFromOrder(item) {
    orderItems = orderItems.filter(orderItem => orderItem.id !== item.id);
    const orderList = document.querySelector(".order-items");
    const orderItemsToRemove = orderList.querySelectorAll(`li:nth-child(${orderItems.indexOf(item) + 1})`);
    orderItemsToRemove.forEach(orderItem => orderList.removeChild(orderItem));

    // Cập nhật tổng giá trị khi xóa món
    totalPrice -= item.price;
    document.getElementById("total-price").textContent = 
        totalPrice.toLocaleString('vi-VN') + " VND";
}

// Hiển thị thực đơn cà phê khi trang tải
populateCoffeeMenu();
