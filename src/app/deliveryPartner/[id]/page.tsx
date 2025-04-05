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

async function getPartner(id: string): Promise<DeliveryPartner | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/deliverypartner/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch partner");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching partner:", error);
    return null;
  }
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function PartnerProfile({ params }: PageProps) {
  const partner = await getPartner(params.id);

  if (!partner) {
    return <div className="container">Partner not found.</div>;
  }

  return (
    <div className="container">
      <h1 className="heading">Partner Profile: {partner.name}</h1>

      <div className="profile-card">
        <p>
          <strong>Email:</strong> {partner.email}
        </p>
        <p>
          <strong>Phone:</strong> {partner.phone}
        </p>
        <p>
          <strong>Status:</strong> {partner.status}
        </p>
        <p>
          <strong>Current Load:</strong> {partner.currentLoad} / 3
        </p>
        <p>
          <strong>Areas:</strong> {partner.areas.join(", ")}
        </p>
        <p>
          <strong>Shift:</strong> {partner.shift.start} - {partner.shift.end}
        </p>
        <p>
          <strong>Deliveries Today:</strong> {partner.metrics.deliveriesToday}
        </p>
        <p>
          <strong>Avg Delivery Time:</strong> {partner.metrics.averageDeliveryTime} min
        </p>
      </div>
    </div>
  );
}
