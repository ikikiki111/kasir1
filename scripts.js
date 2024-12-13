const database = "../shared/database.json";

function loadOrders() {
    const orders = localStorage.getItem("orders");
    return orders ? JSON.parse(orders) : [];
}

function saveOrder(order) {
    const orders = loadOrders();
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
}

function removeOrder(index) {
    const orders = loadOrders();
    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    location.reload();
}