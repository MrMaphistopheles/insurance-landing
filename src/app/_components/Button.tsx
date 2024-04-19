import Link from "next/link";

export default function Button({
  children,
  onClick,
  link,
  color,
}: {
  children?: string;
  onClick?: () => void;
  link?: string;
  color?: string;
}) {
  if (link) {
    return (
      <Link
        className="flex items-center justify-center rounded-xl  px-4 py-2 text-lg font-bold text-white"
        href={link}
        style={
          color !== undefined
            ? {
                backgroundColor: color,
              }
            : {
                backgroundColor: "rgb(248, 113, 113, 1)",
              }
        }
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      style={
        color !== undefined
          ? {
              backgroundColor: color,
            }
          : {
              backgroundColor: "rgb(248, 113, 113, 1)",
            }
      }
      className="flex items-center justify-center rounded-xl  px-4 py-2 text-lg font-bold text-white"
    >
      {children}
    </button>
  );
}
