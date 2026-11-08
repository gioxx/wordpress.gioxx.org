// "W" drawn from the Bungee typeface (SIL Open Font License 1.1,
// Copyright 2023 The Bungee Project Authors, https://github.com/djrrb/Bungee).
export const BRAND_MARK_VIEWBOX = "0 0 98.75 100";

/** Same mark with room for a stroke of up to 6 units (outline rendering). */
export const BRAND_MARK_OUTLINE_VIEWBOX = "-3 -3 104.75 106";

export const BRAND_MARK_PATH =
  "M73.06 0H93.75Q98.75 0 98.75 5V58.89Q98.75 63.33 98.47 67.15Q98.19 70.97 96.25 76.11L89.31 95Q88.61 97.08 87.29 98.54Q85.97 100 83.75 100H65.28Q63.06 100 61.32 99.03Q59.58 98.06 58.89 95.83L52.5 73.19Q51.81 70.83 50 70.83H48.75Q46.94 70.83 46.25 73.19L39.72 95.83Q38.47 100 33.89 100H15.56Q13.33 100 11.74 98.61Q10.14 97.22 9.44 95L2.5 75.83Q0.69 70.69 0.35 66.88Q0 63.06 0 58.61V5Q0 0 5 0H26.39Q31.39 0 31.39 5V56.11L39.44 38.61Q40.56 36.25 42.36 35.28Q44.17 34.31 46.81 34.31H52.64Q55.42 34.31 57.15 35.28Q58.89 36.25 60 38.61L68.06 56.11V5Q68.06 0 73.06 0Z";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox={BRAND_MARK_VIEWBOX} fill="none" className={className} aria-hidden="true">
      <path fill="currentColor" d={BRAND_MARK_PATH} />
    </svg>
  );
}
