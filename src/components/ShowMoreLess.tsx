import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";

type ShowMoreLessProps = {
  children: ReactNode;
  previewHeight?: number;
  showMoreLabel?: string;
  showLessLabel?: string;
  className?: string;
};

const ShowMoreLess = ({
  children,
  previewHeight = 80,
  showMoreLabel = "- Show more -",
  showLessLabel = "- Show less -",
  className = "",
}: ShowMoreLessProps) => {
  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState(`${previewHeight}px`);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isNoPreviewMode = previewHeight === 0;
  const collapsedNoPreview = isNoPreviewMode && !expanded;

  useEffect(() => {
    if (!expanded) {
      setMaxHeight(`${previewHeight}px`);
    }
  }, [expanded, previewHeight]);

  const toggleExpanded = () => {
    const contentEl = contentRef.current;
    if (!contentEl) {
      setExpanded((prev) => !prev);
      return;
    }

    if (!expanded) {
      setMaxHeight(`${contentEl.scrollHeight}px`);
      setExpanded(true);
      return;
    }

    const fullHeight = contentEl.scrollHeight;
    setMaxHeight(`${fullHeight}px`);
    setExpanded(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMaxHeight(`${previewHeight}px`);
      });
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleExpanded();
    }
  };

  const handleTransitionEnd = () => {
    if (expanded) {
      setMaxHeight("none");
    }
  };

  return (
    <div className={className} style={{ width: "100%" }}>
      <div
        ref={contentRef}
        onTransitionEnd={handleTransitionEnd}
        style={{
          maxHeight,
          overflow: expanded ? "visible" : "clip",
          visibility: collapsedNoPreview ? "hidden" : "visible",
          pointerEvents: collapsedNoPreview ? "none" : "auto",
          transition: "max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "max-height",
        }}
      >
        {children}
      </div>

      <div
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        onClick={toggleExpanded}
        onKeyDown={handleKeyDown}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "12px",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <div style={{ flex: 1, borderTop: "1.5px dashed #ccc" }} />
        <span
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "#888",
            whiteSpace: "nowrap",
          }}
        >
          {expanded ? showLessLabel : showMoreLabel}
        </span>
        <div style={{ flex: 1, borderTop: "1.5px dashed #ccc" }} />
      </div>
    </div>
  );
};

export default ShowMoreLess;
