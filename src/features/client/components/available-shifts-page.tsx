import { ModuleWorkspace } from "@/components/portal/module-workspace";
import { PortalPage } from "@/components/portal/portal-page";

export function AvailableShiftsPage() {
  return <PortalPage area="Colaborador" userName="Sofía Díaz" initials="SD"><ModuleWorkspace eyebrow="COLABORADOR / TURNOS" title="Turnos disponibles" description="Postulate a sesiones con cupo disponible y condiciones claras." actionLabel="Postularme al turno" confirmation="Postulación registrada. Recibirás la confirmación al asignarse el cupo." columns={["Sesión", "Horario", "Ganancia estimada", "Cupos"]} rows={[["Lanzamiento colección", "Hoy, 19:00 · TikTok", "USD 3,52", "2 de 5"], ["Vivo preguntas y respuestas", "Mañana, 18:30 · Instagram", "USD 2,20", "1 de 3"], ["Novedades de temporada", "Vie, 20:00 · TikTok", "USD 6,60", "6 de 10"]]} /></PortalPage>;
}