import { ModuleWorkspace } from "@/components/portal/module-workspace";
import { PortalPage } from "@/components/portal/portal-page";

export function AdminDisputesPage() {
  return <PortalPage area="Administración" userName="Equipo de operaciones" initials="OP"><ModuleWorkspace eyebrow="ADMIN / DISPUTAS" title="Cola de disputas" description="Revisá evidencia de heartbeats y resolvé antes del vencimiento de la ventana." actionLabel="Resolver disputa" confirmation="Resolución registrada. Los saldos se recalcularán en el cierre de la sesión." columns={["Sesión", "Reclamo", "Vence", "Estado"]} rows={[["Promo fin de semana", "Proveedor: asistencia incompleta", "18 h", "Pendiente"], ["Lanzamiento colección", "Colaborador: check-in inválido", "32 h", "Pendiente"]]} /></PortalPage>;
}