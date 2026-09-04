"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

type ModuleWorkspaceProps = {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  confirmation: string;
  columns: string[];
  rows: Array<string[]>;
};

export function ModuleWorkspace({ eyebrow, title, description, actionLabel, confirmation, columns, rows }: ModuleWorkspaceProps) {
  const [message, setMessage] = useState("");
  return <main className="mx-auto max-w-[1440px] px-5 py-8 lg:px-10 lg:py-10"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">{eyebrow}</p><h1 className="font-display mt-1 text-3xl font-bold sm:text-4xl">{title}</h1><p className="mt-2 text-sm text-[#66716e]">{description}</p></div><button onClick={() => setMessage(confirmation)} className="command-button">{actionLabel}</button></div>{message && <p className="mt-5 flex items-center gap-2 rounded-md bg-[#e8f2dc] p-3 text-sm text-[#355a2c]"><CheckCircle2 size={17} />{message}</p>}<section className="surface mt-7 overflow-x-auto"><table><thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={`${row[0]}-${index}`}>{row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cellIndex === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></section></main>;
}