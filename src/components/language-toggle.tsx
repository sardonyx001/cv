"use client";

import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const isJapanese = pathname.startsWith("/jp");
  const tooltip = isJapanese ? "Switch to English" : "日本語に切り替える";

  const handleToggle = () => {
    router.push(isJapanese ? "/" : "/jp");
  };

  return (
    <div className="group relative">
      <Button
        variant="outline"
        size="icon"
        className="size-8"
        onClick={handleToggle}
        aria-label={tooltip}
      >
        <Languages className="size-4" />
      </Button>
      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded border bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100">
        {tooltip}
      </span>
    </div>
  );
}
