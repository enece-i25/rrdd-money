import { ModuleWorkspace } from "@/components/portal/module-workspace";
import { PortalPage } from "@/components/portal/portal-page";

export function ProviderCreditPage() {
  return <PortalPage area="Proveedor" userName="Mercado Andino" initials="MA"><ModuleWorkspace eyebrow="PROVEEDOR / CRÉDITO" title="Crédito a favor" description="El crédito se aplica automáticamente antes de cobrar una nueva solicitud." actionLabel="Aplicar a solicitud" confirmation="Crédito reservado para la próxima solicitud." columns={["Origen", "Monto", "Vencimiento", "Estado"]} rows={[["Promo fin de semana", "USD 12,50", "22 nov, 2026", "Disponible"], ["Sesión cancelada", "USD 5,00", "18 oct, 2026", "Disponible"]]} /></PortalPage>;
}