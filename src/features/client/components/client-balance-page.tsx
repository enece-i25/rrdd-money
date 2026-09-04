import { ModuleWorkspace } from "@/components/portal/module-workspace";
import { PortalPage } from "@/components/portal/portal-page";

export function ClientBalancePage() {
  return <PortalPage area="Colaborador" userName="Sofía Díaz" initials="SD"><ModuleWorkspace eyebrow="COLABORADOR / SALDO" title="Saldo y retiros" description="Los pagos permanecen en revisión durante la ventana de disputa de 48 horas." actionLabel="Solicitar retiro" confirmation="La solicitud fue creada y quedará pendiente para el próximo lote de pagos." columns={["Sesión", "Monto", "Disponible desde", "Estado"]} rows={[["Lanzamiento colección", "USD 3,52", "Disponible", "Disponible"], ["Preguntas frecuentes", "USD 2,20", "Disponible", "Disponible"], ["Novedades de temporada", "USD 3,52", "05 sep, 18:30", "En revisión"]]} /></PortalPage>;
}