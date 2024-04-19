import Button from "../../_components/Button";
import Image from "next/image";
import * as assets from "~/assets";
export default function Subscribe({ params }: { params: { level: string } }) {
  return (
    <div className="flex w-full justify-center bg-white text-black">
      <div className="flex min-h-[100dvh] w-full max-w-[30em] flex-col items-center justify-end gap-3">
        <div className="flex h-5/6 w-full flex-col items-center justify-center gap-6">
          <div className=" size-32 rounded-full border-2 border-slate-400">
            <Image src={assets.logo} alt="company logo" objectFit="contain" />
          </div>

          <p className="text-4xl font-bold text-slate-900">₴{params.level}</p>

          <div className="flex items-center gap-2">
            <p className="text-2xl font-medium text-indigo-600">
              Order information
            </p>
            <svg
              className="size-6 text-indigo-600"
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
                strokeWidth="3"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <Button color="black" py={1} width="80%" font="normal">
          Pay with
          <svg
            className="size-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
          </svg>
          Pay
        </Button>
        <div className=" flex w-11/12  items-center justify-center gap-2 border-t-2 border-t-slate-400 pb-8 pt-6">
          <p className="text-2xl font-medium text-indigo-600">Pay with card</p>
          <svg
            className=" size-8 text-indigo-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 6h16v6H4v-6Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M5 14a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm5 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
