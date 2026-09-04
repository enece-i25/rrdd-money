export type SessionDuration = 30 | 60 | 120;

const ratePerParticipant: Record<SessionDuration, number> = { 30: 1.75, 60: 3.2, 120: 6 };

export function calculateRequestQuote({ durationMinutes, participants, availableCreditUsd, applyCredit }: { durationMinutes: SessionDuration; participants: number; availableCreditUsd: number; applyCredit: boolean }) {
  const subtotalUsd = ratePerParticipant[durationMinutes] * participants;
  const creditAppliedUsd = applyCredit ? Math.min(availableCreditUsd, subtotalUsd) : 0;
  return { subtotalUsd, creditAppliedUsd, totalUsd: subtotalUsd - creditAppliedUsd };
}