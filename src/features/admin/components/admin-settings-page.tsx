import { ModuleWorkspace } from "@/components/portal/module-workspace";
import { PortalPage } from "@/components/portal/portal-page";

export function AdminSettingsPage() {
  return <PortalPage area="Administración" userName="Equipo de operaciones" initials="OP"><ModuleWorkspace eyebrow="ADMIN / REGLAS" title="Configuración de negocio" description="Parámetros configurables que aplican a nuevas sesiones y retiros." actionLabel="Guardar configuración" confirmation="Configuración guardada. Los cambios aplicarán a las nuevas operaciones." columns={["Regla", "Valor actual", "Aplicación", "Estado"]} rows={[["Intervalo de heartbeat", "5 min", "Sesiones trusted", "Activo"], ["Ventana de disputa", "48 h", "Saldos de colaborador", "Activo"], ["Umbral de retiro", "USD 25,00", "Retiros", "Activo"], ["Crédito a favor", "90 días", "Proveedores", "Activo"]]} /></PortalPage>;
}