// app/page.tsx

import Link from "next/link";
import { Card, CardContent } from "../../components/ui/card";

export default function HomePage() {
  return (
    <main className="home-main">
      <h1 className="home-title">Smart Delivery Management System</h1>
      <p className="home-subtitle">
        Efficiently manage your delivery partners, orders, and performance — all in one place.
      </p>

      <div className="card-grid">
        <Link href="/dashboard" className="card-link">
          <Card className="card">
            <CardContent>
              <h2 className="card-title">Dashboard</h2>
              <p className="card-description">Overview of system performance and key metrics.</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/deliveryPartner" className="card-link">
          <Card className="card">
            <CardContent>
              <h2 className="card-title">Partners</h2>
              <p className="card-description">Manage your delivery partners across different zones.</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/orders" className="card-link">
          <Card className="card">
            <CardContent>
              <h2 className="card-title">Orders</h2>
              <p className="card-description">Track and assign orders in real-time.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </main>
  );
}
