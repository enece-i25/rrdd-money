import { ModuleWorkspace } from "@/components/portal/module-workspace";
import { PortalPage } from "@/components/portal/portal-page";

export function AdminWithdrawalsPage() {
  return <PortalPage area="Administración" userName="Equipo de operaciones" initials="OP"><ModuleWorkspace eyebrow="ADMIN / FINANZAS" title="Retiros pendientes" description="Validá la caja disponible antes de procesar cada lote de retiros." actionLabel="Preparar lote" confirmation="Lote preparado para revisión financiera. No se procesarán saldos negativos." columns={["Colaborador", "Monto", "Solicitado", "Estado"]} rows={[["Sofía Díaz", "USD 28,40", "02 sep, 11:20", "Solicitado"], ["Bruno López", "USD 41,60", "02 sep, 15:40", "Solicitado"]]} /></PortalPage>;
}