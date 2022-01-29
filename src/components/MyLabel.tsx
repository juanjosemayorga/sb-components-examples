import React from 'react';
import './MyLabel.css';

export interface MyLabelProps {
  /**
   * This is the message that will be displayed on the label.
   */
  label: string;
  /**
   * This is the size of the label.
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Indicates if you want to have the text capitalized.
   */
  allCaps?: boolean;
  /**
   * This is the color of the text
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * For a custom font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor = 'black'
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
};
