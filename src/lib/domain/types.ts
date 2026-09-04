export type LivePlatform = "TikTok" | "Instagram";

export type ProviderDashboardData = {
  provider: { businessName: string; initials: string; availableCreditUsd: number };
  metrics: { activeParticipants: number; activeBroadcasts: number; averageCompliancePct: number; nextSession: string; nextSessionParticipants: number };
  activeSession: { title: string; platform: LivePlatform; startTime: string; endTime: string; elapsedMinutes: number; totalMinutes: number; confirmedParticipants: number; requiredParticipants: number; lastHeartbeatMinutesAgo: number; nextHeartbeatAt: string };
  recentRequests: Array<{ id: string; title: string; platform: LivePlatform; participants: number; scheduledAt: string; compliancePct: number; status: "completed" | "credit_issued" }>;
};