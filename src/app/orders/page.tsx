'use client';

import { useEffect, useState } from 'react';
import './style.css';

type Order = {
  _id: string;
  orderNumber: string;
  customer: {
    name: string;
    phone: string;
    address: string;
  };
  area: string;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  status: 'pending' | 'assigned' | 'picked' | 'delivered';
  scheduledFor: string;
  assignedTo?: string;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/orders')
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching orders:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="orders-table-container">
      <h1>Orders</h1>

      {loading && <p>Loading...</p>}
      {!loading && orders.length === 0 && <p>No orders found.</p>}

      {!loading && orders.length > 0 && (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order #</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Area</th>
              <th>Status</th>
              <th>Scheduled</th>
              <th>Total (₹)</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.orderNumber}</td>
                <td>{order.customer.name}</td>
                <td>{order.customer.phone}</td>
                <td>{order.customer.address}</td>
                <td>{order.area}</td>
                <td>{order.status}</td>
                <td>{new Date(order.scheduledFor).toLocaleString()}</td>
                <td>{order.totalAmount}</td>
                <td>
                  <ul>
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        {item.name} ({item.quantity} × ₹{item.price})
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
