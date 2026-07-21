/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import InscolsstLogo from "./InscolsstLogo";
import SiecLogo from "./SiecLogo";

export default function Header() {
  return (
    <header className="bg-black border-b border-neutral-900 px-6 sm:px-12 py-7 sm:py-9 flex flex-col lg:flex-row items-center justify-between gap-6 w-full print:hidden shadow-lg shadow-black/30 transition-all">
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center lg:justify-start w-full lg:w-auto">
        {/* Co-Branding INSCOLSST - Prominent, double-sized, and light variant */}
        <InscolsstLogo size="lg" variant="light" className="flex shrink-0" />

        {/* Vertical divider visible on sm and up */}
        <div className="h-10 w-[1px] bg-neutral-800 hidden sm:block"></div>

        {/* SIEC Logo - Light Blue, on the same line */}
        <SiecLogo size="md" variant="light-blue" align="left" className="shrink-0" />
      </div>

      <div className="flex items-center justify-between lg:justify-end w-full lg:w-auto gap-4 text-xs sm:text-sm font-medium text-slate-300 border-t border-neutral-900 pt-4 lg:pt-0 lg:border-t-0">
        <div className="flex items-center gap-3 ml-auto shrink-0">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> 
            <span className="text-[11px] font-bold text-slate-200">Sistema en Línea</span>
          </span>
          <span className="px-2.5 py-0.5 bg-neutral-900 text-slate-300 rounded-full text-[9px] font-bold border border-neutral-800">v1.0.4</span>
        </div>
      </div>
    </header>
  );
}
