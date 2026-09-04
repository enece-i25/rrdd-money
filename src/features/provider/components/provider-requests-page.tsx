import { ModuleWorkspace } from "@/components/portal/module-workspace";
import { PortalPage } from "@/components/portal/portal-page";

export function ProviderRequestsPage() {
  return <PortalPage area="Proveedor" userName="Mercado Andino" initials="MA"><ModuleWorkspace eyebrow="PROVEEDOR / SOLICITUDES" title="Solicitudes de sesión" description="Una sesión se habilita únicamente cuando el pago es aprobado." actionLabel="Crear solicitud" confirmation="Solicitud creada como borrador. Pendiente de confirmación de pago." columns={["Sesión", "Fecha", "Participantes", "Estado"]} rows={[["Novedades de temporada", "Hoy, 17:30", "5", "En curso"], ["Lanzamiento colección", "28 ago, 19:00", "5", "Completada"], ["Promo fin de semana", "24 ago, 20:00", "5", "Crédito emitido"]]} /></PortalPage>;
}