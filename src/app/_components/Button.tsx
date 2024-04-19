import Link from "next/link";
import React from "react";

export default function Button({
  children,
  onClick,
  link,
  color,
  py,
  width,
  font,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  link?: string;
  color?: string;
  py?: number;
  width?: string;
  font?: string;
}) {
  if (link) {
    return (
      <Link
        className="flex items-center justify-center rounded-xl  px-4 text-lg text-white"
        href={link}
        style={{
          backgroundColor: color ?? "rgb(248, 113, 113, 1)",
          width: `${width}` ?? "auto",
          paddingBottom: ` ${py}rem` ?? "0.25rem",
          paddingTop: ` ${py}rem` ?? "0.25rem",
          fontWeight: font ?? "bold",
        }}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color ?? "rgb(248, 113, 113, 1)",
        width: `${width}` ?? "auto",
        paddingBottom: ` ${py}rem` ?? "0.25rem",
        paddingTop: ` ${py}rem` ?? "0.25rem",
        fontWeight: font ?? "bold",
      }}
      className="flex items-center justify-center rounded-xl  px-4 text-lg text-white"
    >
      {children}
    </button>
  );
}
