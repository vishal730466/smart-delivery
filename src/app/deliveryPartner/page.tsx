'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './style.css';

import DeliveryPartnerComponent from '../component/deliveryPartner/deliveryPartner';

const DeliveryPartner = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPartners() {
      try {
        const res = await fetch('/api/deliverypartner');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setPartners(data);
      } catch (err) {
        console.error('Error fetching delivery partners:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPartners();
  }, []);

  if (loading) return <div className="container">Loading...</div>;

  return (
    <div >
      <DeliveryPartnerComponent partners={partners} />
    </div>
  );
};

export default DeliveryPartner;
