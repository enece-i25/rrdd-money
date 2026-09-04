import type { ReactNode } from "react";
import { PortalHeader } from "./portal-header";

export function PortalPage({ area, userName, initials, children }: { area: string; userName: string; initials: string; children: ReactNode }) {
  return <div className="min-h-screen bg-[#f6f7f3] text-[#172129]"><PortalHeader currentArea={area} userName={userName} initials={initials} />{children}</div>;
}