import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { APP_STORE_URL } from "@/lib/site";
import { AppleIcon } from "./icons";

type Tone = "blue" | "orange" | "green" | "purple" | "ink" | "white";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

export function Button3D({
  href,
  tone = "blue",
  children,
  className,
}: {
  href: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  const cls = cx("btn-3d", tone !== "blue" && `tone-${tone}`, className);
  if (href.startsWith("http")) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function AppStoreButton({ size = "lg", className }: { size?: "sm" | "lg"; className?: string }) {
  const small = size === "sm";
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener"
      aria-label="Klausi im App Store laden"
      className={cx("btn-3d tone-ink", small ? "!px-3.5 !py-2 !rounded-[14px]" : "!px-5 !py-3", className)}
    >
      <AppleIcon className={small ? "size-5" : "size-8 -mt-0.5"} />
      <span className="flex flex-col items-start leading-none">
        {!small && <span className="text-[0.7rem] font-bold opacity-80">Laden im</span>}
        <span className={small ? "text-sm" : "text-xl tracking-tight"}>App Store</span>
      </span>
    </a>
  );
}

export function Mascot({ size = 220, className, priority }: { size?: number; className?: string; priority?: boolean }) {
  return (
    <Image
      src="/brand/klausi-maskottchen.png"
      alt="Klausi, der Zauberer-Pinguin mit Sternenhut und grünem Kristall"
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}

export function SpeechBubble({
  children,
  tail = "left",
  className,
}: {
  children: ReactNode;
  tail?: "left" | "bottom";
  className?: string;
}) {
  return <div className={cx("bubble", `tail-${tail}`, className)}>{children}</div>;
}

export function PhoneFrame({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cx(
        "relative rounded-[2.6rem] bg-[#16182a] p-[9px] shadow-[0_10px_0_#0b0c17,0_40px_80px_-30px_rgba(26,26,46,0.55)]",
        className,
      )}
    >
      <div className="absolute left-1/2 top-[14px] z-10 h-[22px] w-[30%] -translate-x-1/2 rounded-full bg-[#16182a]" />
      <Image
        src={src}
        alt={alt}
        width={473}
        height={1024}
        priority={priority}
        sizes="(max-width: 768px) 70vw, 300px"
        className="block h-auto w-full rounded-[2.05rem]"
      />
    </div>
  );
}

export function Eyebrow({ children, tone = "purple" }: { children: ReactNode; tone?: "purple" | "orange" | "green" | "blue" }) {
  const map = {
    purple: "bg-purple-soft text-purple-shade",
    orange: "bg-orange-soft text-orange-shade",
    green: "bg-green-soft text-green-shade",
    blue: "bg-sky text-blue-shade",
  } as const;
  return (
    <span className={cx("inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.12em]", map[tone])}>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone,
  as: As = "h2",
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "purple" | "orange" | "green" | "blue";
  as?: "h1" | "h2";
  center?: boolean;
}) {
  return (
    <div className={cx("mx-auto max-w-2xl", center && "text-center")}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <As className="mt-4 text-balance text-3xl font-black leading-[1.1] tracking-tight sm:text-[2.6rem]">{title}</As>
      {intro && <p className="mt-4 text-pretty text-lg font-semibold leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

/** Number badge with the same bottom-edge look as the in-app buttons. */
export function StepBadge({ n, tone = "blue" }: { n: number; tone?: "blue" | "orange" | "green" | "purple" }) {
  const map = {
    blue: "bg-blue shadow-[0_4px_0_var(--color-blue-shade)]",
    orange: "bg-orange shadow-[0_4px_0_var(--color-orange-shade)]",
    green: "bg-green shadow-[0_4px_0_var(--color-green-shade)]",
    purple: "bg-purple shadow-[0_4px_0_var(--color-purple-shade)]",
  } as const;
  return (
    <span className={cx("grid size-11 shrink-0 place-items-center rounded-2xl text-lg font-black text-white", map[tone])}>{n}</span>
  );
}

export function IconTile({ children, tone }: { children: ReactNode; tone: "blue" | "orange" | "green" | "purple" | "red" }) {
  const map = {
    blue: "bg-sky text-blue-shade",
    orange: "bg-orange-soft text-orange-shade",
    green: "bg-green-soft text-green-shade",
    purple: "bg-purple-soft text-purple-shade",
    red: "bg-red-soft text-red-shade",
  } as const;
  return <span className={cx("grid size-14 place-items-center rounded-2xl", map[tone])}>{children}</span>;
}

export { cx };
