"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./style.css";

type DeliveryPartner = {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  status: "active" | "inactive";
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

const PartnerProfile: React.FC = () => {
  const { id } = useParams();
  const [partner, setPartner] = useState<DeliveryPartner | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPartner() {
      try {
        const res = await fetch(`/api/deliverypartner/${id}`, {
          cache: "no-store",
        });
        if (!res.ok) {
          setPartner(null);
        } else {
          const data = await res.json();
          setPartner(data);
        }
      } catch (error) {
        console.error("Failed to fetch partner:", error);
        setPartner(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchPartner();
  }, [id]);

  if (loading) return <div className="container">Loading...</div>;
  if (!partner) return <div className="container">Partner not found.</div>;

  return (
    <div className="container">
      <h1 className="heading">Partner Profile: {partner.name}</h1>

      <div className="profile-card">
        <p><strong>Email:</strong> {partner.email}</p>
        <p><strong>Phone:</strong> {partner.phone}</p>
        <p><strong>Status:</strong> {partner.status}</p>
        <p><strong>Current Load:</strong> {partner.currentLoad} / 3</p>
        <p><strong>Areas:</strong> {partner.areas.join(", ")}</p>
        <p><strong>Shift:</strong> {partner.shift.start} - {partner.shift.end}</p>
        <p><strong>Deliveries Today:</strong> {partner.metrics.deliveriesToday}</p>
        <p><strong>Avg Delivery Time:</strong> {partner.metrics.averageDeliveryTime} min</p>
      </div>
    </div>
  );
};

export default PartnerProfile;
