import './style.css';

type Metrics = {
  totalOrders: number;
  activeOrders: number;
  partnerAvailable: number;
  partnerUnavailable: number;
};

const DashboardPage = () => {
  const metrics: Metrics = {
    totalOrders: 324,
    activeOrders: 87,
    partnerAvailable: 12,
    partnerUnavailable: 8,
  };


  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Delivery Management Dashboard</h1>

      <div className="metrics-grid">
        <div className="metric-card">
          <h2>Total Orders</h2>
          <p>{metrics.totalOrders}</p>
        </div>

        <div className="metric-card">
          <h2>Active Orders</h2>
          <p>{metrics.activeOrders}</p>
        </div>

        <div className="metric-card">
          <h2>Partners Available</h2>
          <p>{metrics.partnerAvailable}</p>
        </div>

        <div className="metric-card unavailable">
          <h2>Partners Unavailable</h2>
          <p>{metrics.partnerUnavailable}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
