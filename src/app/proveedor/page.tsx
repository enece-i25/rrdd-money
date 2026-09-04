import { ProviderDashboard } from "@/features/provider/components/provider-dashboard";
import { getProviderDashboard } from "@/features/provider/provider-dashboard-data";

export default async function ProviderPage() {
  const dashboard = await getProviderDashboard();

  return <ProviderDashboard dashboard={dashboard} />;
}