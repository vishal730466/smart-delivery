import { NextResponse } from 'next/server';

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
  // ... rest of the data
];

export async function GET(
  req: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const partner = data.find((p) => p._id === id);

  if (!partner) {
    return NextResponse.json({ message: 'Partner not found' }, { status: 404 });
  }

  return NextResponse.json(partner);
}
