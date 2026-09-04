import { ModuleWorkspace } from "@/components/portal/module-workspace";
import { PortalPage } from "@/components/portal/portal-page";

export function AdminSessionsPage() {
  return <PortalPage area="Administración" userName="Equipo de operaciones" initials="OP"><ModuleWorkspace eyebrow="ADMIN / SESIONES" title="Sesiones activas" description="Monitoreo de presencia verificada y cumplimiento en tiempo real." actionLabel="Actualizar estado" confirmation="El estado de las sesiones se actualizó correctamente." columns={["Proveedor", "Horario", "Participantes", "Heartbeat"]} rows={[["Mercado Andino", "17:30 - 18:30", "5/5", "Confirmado hace 2 min"], ["Casa Norte", "17:00 - 18:00", "4/5", "Pendiente"], ["Taller Sur", "18:00 - 19:00", "6/6", "Confirmado hace 1 min"]]} /></PortalPage>;
}