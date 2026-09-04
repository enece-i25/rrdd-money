"use client";

import { CheckCircle2, Timer } from "lucide-react";
import { useState } from "react";
import { PortalPage } from "@/components/portal/portal-page";

export function ActiveSessionPage() {
  const [confirmed, setConfirmed] = useState(false);
  return <PortalPage area="Colaborador" userName="Sofía Díaz" initials="SD"><main className="mx-auto max-w-[960px] px-5 py-8 lg:py-10"><p className="eyebrow">SESIÓN ACTIVA</p><h1 className="font-display mt-1 text-3xl font-bold">Novedades de temporada</h1><p className="mt-2 text-sm text-[#66716e]">TikTok · Mercado Andino · 17:30 a 18:30</p><section className="surface mt-7 p-6 sm:p-8"><div className="flex items-center justify-between"><div><p className="eyebrow">TIEMPO RESTANTE</p><strong className="font-display mt-2 block text-5xl">23:00</strong></div><Timer className="text-[#527e43]" size={34} /></div><div className="mt-7 h-2 overflow-hidden rounded-full bg-[#e7ebe5]"><div className="h-full w-[62%] rounded-full bg-[#75a744]" /></div><div className="mt-8 rounded-md bg-[#f1f6e8] p-5"><p className="font-bold">Check-in de presencia</p><p className="mt-1 text-sm text-[#5d6e61]">Confirmá que seguís participando activamente en la transmisión.</p><button onClick={() => setConfirmed(true)} disabled={confirmed} className="command-button mt-5 disabled:cursor-default disabled:bg-[#71907b]">{confirmed ? <><CheckCircle2 size={18} />Presencia confirmada</> : "Confirmar presencia"}</button></div><div className="mt-7 grid gap-4 sm:grid-cols-2"><div><p className="eyebrow">CHECK-INS</p><p className="mt-1 font-bold">4 de 4 respondidos</p></div><div><p className="eyebrow">GANANCIA ACUMULADA</p><p className="mt-1 font-bold">USD 2,18</p></div></div></section></main></PortalPage>;
}