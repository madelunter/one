import { forwardRef, type ComponentPropsWithoutRef, type CSSProperties } from "react";
import styles from "./FlexGrid.module.css";

export type FlexGridGap = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export interface FlexGridProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Minimum width an item is allowed to shrink to before the grid wraps it
   * onto a new row, e.g. "240px". Unlike Radix Themes' `Grid` (which needs
   * an explicit column count per breakpoint via its `columns` prop),
   * `FlexGrid` derives its column count purely from available width — there
   * is no breakpoint to configure. Default `"240px"`.
   */
  minItemWidth?: string;
  /** Radix's spacing scale step (1-9), applied as the row/column gap. Default `"4"`. */
  gap?: FlexGridGap;
}

/**
 * A responsive, auto-wrapping grid: pass items in, and it fits as many
 * columns as the container width allows (CSS `repeat(auto-fit, minmax(...))`
 * under the hood), re-flowing automatically as the viewport resizes with no
 * breakpoint props to maintain. Reach for Radix Themes' `Grid` instead when
 * you need explicit control over the column count at each breakpoint.
 */
export const FlexGrid = forwardRef<HTMLDivElement, FlexGridProps>(
  ({ minItemWidth = "240px", gap = "4", className, style, ...props }, ref) => {
    const gridStyle: CSSProperties = {
      "--flex-grid-min-item-width": minItemWidth,
      "--flex-grid-gap": `var(--space-${gap})`,
      ...style,
    } as CSSProperties;

    return (
      <div
        ref={ref}
        className={className ? `${styles.root} ${className}` : styles.root}
        style={gridStyle}
        {...props}
      />
    );
  }
);

FlexGrid.displayName = "FlexGrid";
