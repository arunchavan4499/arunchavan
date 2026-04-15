type SkillsHeadingProps = {
  count?: number;
};

const SkillsHeading = ({ count = 0 }: SkillsHeadingProps) => {
  return (
    <section className="px-14 sm:px-24 md:px-36 lg:px-48 pt-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <h2 className="section-heading">Skills</h2>
        <span
          className="rounded-full border border-border/70 bg-card/70 px-4 py-1 text-sm text-muted-foreground"
          style={{ fontFamily: "__Satoshi_4a0ccf, -apple-system, sans-serif" }}
        >
          {count}+
        </span>
      </div>
    </section>
  );
};

export default SkillsHeading;
