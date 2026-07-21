/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import InscolsstLogo from "./InscolsstLogo";
import SiecLogo from "./SiecLogo";

export default function Header() {
  return (
    <header className="bg-[#032363] border-b border-blue-900/60 px-4 py-3 flex items-center justify-between gap-2 w-full shrink-0 shadow-md print:hidden">
      <div className="flex items-center gap-2">
        {/* Co-Branding INSCOLSST - Compact size */}
        <InscolsstLogo size="sm" variant="light" className="shrink-0" />
        <div className="h-5 w-[1px] bg-blue-800/80"></div>
        {/* SIEC Logo */}
        <SiecLogo size="sm" variant="light-blue" align="left" className="shrink-0" />
      </div>

      <div className="flex items-center gap-1.5 px-2 py-0.5 bg-blue-900/60 rounded-full border border-blue-700/50 text-[10px] text-blue-200 font-bold shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-[10px]">En Línea</span>
      </div>
    </header>
  );
}

