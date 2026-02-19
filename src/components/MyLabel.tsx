import "./MyLabel.css";

interface Props {
  /**
   * The text to display in the label
   */
  label: string;

  /**
   * The size of the label
   * @default "normal"
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * Capitalize all letters in the label
   */
  allCaps?: boolean;

  /**
   * The color of the label
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * The font color of the label
   */
  fontColor?: string;

  /**
   * Bakcground color of the label
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color = "text-primary",
  fontColor,
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span
      className={`${size} ${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
