// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const orderId = generateUniqueId();
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const newOrder = {
    id: orderId,
    customerName,
    items,
    totalPrice,
    status: 'Menunggu',
  };

  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find(o => o.id === orderId);

  if (order) {
    order.status = status;
  } else {
    console.log(`Pesanan dengan ID ${orderId} tidak ditemukan.`);
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const index = orders.findIndex(order => order.id === id);

  if (index !== -1) {
    orders.splice(index, 1);
  } else {
    console.log(`Pesanan dengan ID ${id} tidak ditemukan.`);
  }
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
