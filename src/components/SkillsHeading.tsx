import { Layers } from "lucide-react";

type SkillsHeadingProps = {
  count?: number;
};

const SkillsHeading = ({ count = 0 }: SkillsHeadingProps) => {
  return (
    <div className="flex items-center gap-4 w-full">
      {/* Icon box */}
      {/* <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-card/80">
        <Layers className="w-5 h-5 text-foreground/80" />
      </div> */}

      {/* Label + heading */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5">
          <Layers className="h-3.5 w-3.5 text-muted-foreground/80" />
          <span
            className="text-[14px] font-semibold tracking-widest text-muted-foreground uppercase"
            style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif" }}
          >
            What I Bring
          </span>
        </div>
        <div className="flex items-center gap-2">
          <h2
            className="text-3xl font-bold text-foreground leading-none"
            style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif" }}
          >
            Skills
          </h2>
          <span className="text-3xl font-bold text-foreground leading-none">·</span>
        </div>
        {/* Underline */}
        <div className="h-[2px] w-full bg-foreground/80 rounded-full mt-0.5" />
      </div>

      {/* Horizontal rule */}
      <div className="flex-1 h-px bg-border/50" />

      {/* Count */}
      <span
        className="flex-shrink-0 text-sm text-muted-foreground"
        style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif" }}
      >
        {count} capabilities
      </span>
    </div>
  );
};

export default SkillsHeading;