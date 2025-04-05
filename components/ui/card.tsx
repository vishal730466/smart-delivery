// components/ui/card.tsx

import { ReactNode } from "react";
import "./style.css";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return <div className={`custom-card ${className}`}>{children}</div>;
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="custom-card-content">{children}</div>;
}
