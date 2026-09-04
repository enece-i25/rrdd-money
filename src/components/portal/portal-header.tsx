import Link from "next/link";
import { Bell, ChevronDown, CircleHelp } from "lucide-react";

const navigation = [
  { href: "/panel", label: "Panel" },
  { href: "/proveedor", label: "Proveedor" },
  { href: "/colaborador", label: "Colaborador" },
  { href: "/admin", label: "Administración" },
];

export function PortalHeader({ currentArea, userName, initials }: { currentArea: string; userName: string; initials: string }) {
  return <header className="border-b border-[#dde2dc] bg-[#fbfcf9]"><div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 lg:px-10"><div className="flex items-center gap-6 lg:gap-10"><Link className="flex items-center gap-2.5" href="/proveedor"><span className="grid h-8 w-8 place-items-center rounded-[7px] bg-[#d9f05b] text-sm font-black">V</span><span className="font-display text-xl font-bold">Vivo</span></Link><nav className="hidden gap-1 md:flex">{navigation.map((item) => <Link key={item.href} className={`nav-link ${currentArea === item.label ? "active" : ""}`} href={item.href}>{item.label}</Link>)}</nav></div><div className="flex items-center gap-2"><button className="icon-button" aria-label="Ayuda" title="Ayuda"><CircleHelp size={19} /></button><button className="icon-button relative" aria-label="Notificaciones" title="Notificaciones"><Bell size={19} /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#f06449]" /></button><button className="ml-1 flex items-center gap-2 rounded-md py-1 pl-1 pr-2 text-sm font-semibold"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#1f655d] text-xs text-white">{initials}</span><span className="hidden sm:block">{userName}</span><ChevronDown size={15} /></button></div></div></header>;
}