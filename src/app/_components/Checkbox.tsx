export default function Checkbox({
  checked,
  checkboxId,
  label,
}: {
  checked?: boolean;
  checkboxId: string;
  label: string;
}) {
  return (
    <div className="flex w-full  gap-2">
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked ?? true}
        readOnly
        className="mt-1 h-6 w-6 shrink-0 appearance-none rounded-lg"
        style={
          checked === false
            ? {
                backgroundColor: "rgb(255,255,255, 0.3)",
              }
            : {
                backgroundColor: "rgb(248, 113, 113, 1)",
              }
        }
      />
      <label className="text-xl" htmlFor={checkboxId}>
        {label}
      </label>
      {checked ??
        (checked === undefined && (
          <svg
            className="absolute mt-1 h-6 w-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 11.917 9.724 16.5 19 7.5"
            />
          </svg>
        ))}

      {checked === false && (
        <svg
          className="absolute mt-1 h-6 w-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>
      )}
    </div>
  );
}
