import type { ProviderDashboardData } from "@/lib/domain/types";

// Temporary data gateway. Replace with a database-backed repository in the API phase.
export async function getProviderDashboard(): Promise<ProviderDashboardData> {
  return {
    provider: { businessName: "Mercado Andino", initials: "MA", availableCreditUsd: 12.5 },
    metrics: { activeParticipants: 24, activeBroadcasts: 4, averageCompliancePct: 92.4, nextSession: "Hoy, 18:30", nextSessionParticipants: 5 },
    activeSession: { title: "Novedades de temporada", platform: "TikTok", startTime: "17:30", endTime: "18:30", elapsedMinutes: 37, totalMinutes: 60, confirmedParticipants: 5, requiredParticipants: 5, lastHeartbeatMinutesAgo: 2, nextHeartbeatAt: "18:10" },
    recentRequests: [
      { id: "request-1", title: "Lanzamiento colección", platform: "TikTok", participants: 5, scheduledAt: "28 ago, 19:00", compliancePct: 96, status: "completed" },
      { id: "request-2", title: "Preguntas frecuentes", platform: "Instagram", participants: 3, scheduledAt: "26 ago, 18:00", compliancePct: 83, status: "completed" },
      { id: "request-3", title: "Promo fin de semana", platform: "TikTok", participants: 5, scheduledAt: "24 ago, 20:00", compliancePct: 64, status: "credit_issued" },
    ],
  };
}