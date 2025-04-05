import { NextRequest, NextResponse } from 'next/server';

const data = [
  {
    _id: 'dp001',
    name: 'Arjun Rao',
    email: 'arjun@fastdeliver.in',
    phone: '9876543210',
    status: 'active',
    currentLoad: 2,
    areas: ['Zone A', 'Zone B'],
    shift: { start: '09:00', end: '18:00' },
    metrics: { deliveriesToday: 5, averageDeliveryTime: 22 },
  },
  {
    _id: 'dp002',
    name: 'Nisha Verma',
    email: 'nisha@fastdeliver.in',
    phone: '9123456789',
    status: 'inactive',
    currentLoad: 0,
    areas: ['Zone C'],
    shift: { start: '10:00', end: '19:00' },
    metrics: { deliveriesToday: 5, averageDeliveryTime: 10 },
  },
  {
    _id: 'dp003',
    name: 'Rahul Mehta',
    email: 'rahul@fastdeliver.in',
    phone: '9812345678',
    status: 'active',
    currentLoad: 3,
    areas: ['Zone D'],
    shift: { start: '08:00', end: '17:00' },
    metrics: { deliveriesToday: 8, averageDeliveryTime: 18 },
  },
  {
    _id: 'dp004',
    name: 'Pooja Shah',
    email: 'pooja@fastdeliver.in',
    phone: '9898989898',
    status: 'active',
    currentLoad: 1,
    areas: ['Zone A', 'Zone E'],
    shift: { start: '11:00', end: '20:00' },
    metrics: { deliveriesToday: 3, averageDeliveryTime: 25 },
  },
  {
    _id: 'dp005',
    name: 'Dev Patel',
    email: 'dev@fastdeliver.in',
    phone: '9000000000',
    status: 'inactive',
    currentLoad: 0,
    areas: ['Zone F'],
    shift: { start: '07:00', end: '16:00' },
    metrics: { deliveriesToday: 13, averageDeliveryTime: 20 },
  },
];

export async function GET(
  req: NextRequest,
  context // 👈 this is the trick: use `any` or don't type this at all
) {
  const { id } = context.params;

  const partner = data.find((p) => p._id === id);

  if (!partner) {
    return NextResponse.json({ message: 'Partner not found' }, { status: 404 });
  }

  return NextResponse.json(partner);
}
