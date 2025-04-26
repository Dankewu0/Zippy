// app/_components/CardMain.tsx
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface CardMainProps {
  children?: ReactNode;
  className?: string;
}

export default function CardMain({ children, className }: CardMainProps) {
  return (
    <Card className={`bg-gradient-to-b from-white to-[#F4F4F4] p-6 rounded-lg shadow-sm ${className}`}>
      <div className="space-y-2">
        {children}
      </div>
    </Card>
  );
}