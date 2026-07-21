/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface InscolsstLogoProps {
  className?: string;
  variant?: "full" | "icon-only" | "light";
  size?: "sm" | "md" | "lg";
}

export default function InscolsstLogo({ className = "", variant = "full", size = "md" }: InscolsstLogoProps) {
  const iconSizeClass = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  }[size];

  const textSizeClass = {
    sm: {
      title: "text-[12px] tracking-tight font-extrabold",
      subtitle: "text-[7px] tracking-widest font-medium leading-[1.1]"
    },
    md: {
      title: "text-lg sm:text-xl font-black tracking-tight",
      subtitle: "text-[9px] sm:text-[10px] tracking-wider sm:tracking-widest font-bold leading-[1.2]"
    },
    lg: {
      title: "text-xl sm:text-2xl font-black tracking-tight",
      subtitle: "text-[11px] sm:text-[12px] tracking-widest font-bold leading-[1.3]"
    }
  }[size];

  // Colors based on the real INSCOLSST brand image:
  // Blue: #002366 or deep navy blue
  // Yellow: #FFA500 or bright amber gold
  
  const primaryColor = variant === "light" ? "#FFFFFF" : "#001F54";
  
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Precision Interlocking Crescent SVG Icon */}
      <svg 
        viewBox="0 0 100 100" 
        className={`${iconSizeClass} shrink-0`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        id="inscolsst-icon-svg"
      >
        {/* Outer Circular Navy Blue/White Bracket */}
        <path 
          d="M 85,30 C 95,50 90,75 70,85 C 50,95 25,90 15,70 C 5,50 10,25 30,15 C 45,7 65,10 75,22" 
          stroke={primaryColor} 
          strokeWidth="11" 
          strokeLinecap="round" 
        />
        
        {/* Inner Left Crescent Link (Gold/Yellow) */}
        <path 
          d="M 46,38 C 36,38 29,45 29,54 C 29,63 36,70 46,70 C 53,70 57,66 59,62" 
          stroke="#EAAA00" 
          strokeWidth="9" 
          strokeLinecap="round" 
        />

        {/* Inner Right Crescent Link (Navy Blue/White) - Interlocking */}
        <path 
          d="M 54,62 C 64,62 71,55 71,46 C 71,37 64,30 54,30 C 47,30 43,34 41,38" 
          stroke={primaryColor} 
          strokeWidth="9" 
          strokeLinecap="round" 
        />
      </svg>

      {variant !== "icon-only" && (
        <div className="flex flex-col justify-center select-none">
          <span className={`${textSizeClass.title} ${variant === "light" ? "text-white" : "text-slate-950"} uppercase font-sans leading-none pb-0.5`}>
            INSCOLSST
          </span>
          <span className={`${textSizeClass.subtitle} ${variant === "light" ? "text-slate-200" : "text-slate-500"} uppercase font-sans font-semibold`}>
            INSTITUTO COLOMBIANO DE
          </span>
          <span className={`${textSizeClass.subtitle} ${variant === "light" ? "text-slate-300" : "text-slate-600"} uppercase font-sans font-bold`}>
            SEGURIDAD Y SALUD EN EL TRABAJO
          </span>
        </div>
      )}
    </div>
  );
}
