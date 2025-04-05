'use client';

import { useEffect, useState } from 'react';
import "./style.css"
import Link from 'next/link';

export default function DeliveryPartnerPage() {
     type DeliveryPartner = {
        _id?: string;
        name: string;
        email: string;
        phone: string;
        status: 'active' | 'inactive';
        currentLoad: number;
        areas: string[];
        shift: {
          start: string;
          end: string;
        };
        metrics: {
          deliveriesToday: number;
          averageDeliveryTime: number;
        };
      };
      
  const [partners, setPartners] = useState<DeliveryPartner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPartners() {
      const res = await fetch('/api/deliverypartner');
      const data = await res.json();
      setPartners(data);
      setLoading(false);
    }

    fetchPartners();
  }, []);

  if (loading) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <h1 className="heading">Delivery Partners</h1>

      <div className="table-container">
        <table className="dp-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email / Phone</th>
              <th>Status</th>
              <th>Load</th>
              <th>Areas</th>
              <th>Shift</th>
              <th>Deliveries</th>
              <th>Avg. Time</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((dp) => (
              <tr key={dp._id}>
                <td>
  <Link href={`/deliveryPartner/${dp._id}`} className="link">
    {dp.name}
  </Link>
</td>
                <td>
                  {dp.email}
                  <br />
                  {dp.phone}
                </td>
                <td className={dp.status === 'active' ? 'status-active' : 'status-inactive'}>
                  {dp.status}
                </td>
                <td>{dp.currentLoad}/3</td>
                <td>{dp.areas.join(', ')}</td>
                <td>
                  {dp.shift.start} - {dp.shift.end}
                </td>
                <td>{dp.metrics.deliveriesToday}</td>
                <td>{dp.metrics.averageDeliveryTime} min</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
