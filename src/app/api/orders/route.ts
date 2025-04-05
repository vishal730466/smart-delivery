import { NextResponse } from 'next/server';

export async function GET() {
  const orders = [
    {
      _id: '1',
      orderNumber: 'ORD-1001',
      customer: {
        name: 'Alice Johnson',
        phone: '9876543210',
        address: '123 Main Street, City',
      },
      area: 'North',
      items: [
        { name: 'Item A', quantity: 2, price: 100 },
        { name: 'Item B', quantity: 1, price: 200 },
      ],
      status: 'pending',
      scheduledFor: '2025-04-10',
      assignedTo: 'John',
      totalAmount: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: '2',
      orderNumber: 'ORD-1002',
      customer: {
        name: 'Bob Smith',
        phone: '9876543211',
        address: '456 Market Lane, City',
      },
      area: 'South',
      items: [
        { name: 'Item C', quantity: 1, price: 300 },
        { name: 'Item D', quantity: 3, price: 150 },
      ],
      status: 'assigned',
      scheduledFor: '2025-04-11',
      totalAmount: 750,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: '3',
      orderNumber: 'ORD-1003',
      customer: {
        name: 'Charlie Brown',
        phone: '9876543212',
        address: '789 Sunset Blvd, City',
      },
      area: 'East',
      items: [
        { name: 'Item E', quantity: 2, price: 250 },
      ],
      status: 'picked',
      scheduledFor: '2025-04-12',
      assignedTo: 'Eva',
      totalAmount: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: '4',
      orderNumber: 'ORD-1004',
      customer: {
        name: 'Diana Prince',
        phone: '9876543213',
        address: '987 Hero Ave, City',
      },
      area: 'West',
      items: [
        { name: 'Item F', quantity: 1, price: 400 },
        { name: 'Item G', quantity: 2, price: 120 },
      ],
      status: 'delivered',
      scheduledFor: '2025-04-09',
      totalAmount: 640,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: '5',
      orderNumber: 'ORD-1005',
      customer: {
        name: 'Ethan Hunt',
        phone: '9876543214',
        address: 'Mission HQ, City',
      },
      area: 'Central',
      items: [
        { name: 'Item H', quantity: 4, price: 80 },
      ],
      status: 'pending',
      scheduledFor: '2025-04-13',
      assignedTo: 'Sarah',
      totalAmount: 320,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return NextResponse.json(orders);
}
