import { ModuleWorkspace } from "@/components/portal/module-workspace";
import { PortalPage } from "@/components/portal/portal-page";

export function AdminUsersPage() {
  return <PortalPage area="Administración" userName="Equipo de operaciones" initials="OP"><ModuleWorkspace eyebrow="ADMIN / USUARIOS" title="Gestión de usuarios" description="Consultá estados, verificaciones y medidas de cuenta." actionLabel="Registrar revisión" confirmation="La revisión de usuario quedó registrada en el historial de operaciones." columns={["Usuario", "Rol", "Verificación", "Estado"]} rows={[["Mercado Andino", "Proveedor", "Email y teléfono", "Activo"], ["Sofía Díaz", "Colaborador", "Email y teléfono", "Activo"], ["Tomás Ruiz", "Colaborador", "Teléfono pendiente", "Pendiente"]]} /></PortalPage>;
}