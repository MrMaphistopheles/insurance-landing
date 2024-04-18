import Image from "next/image";
import * as assets from "~/assets";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex min-h-[100dvh] w-full flex-wrap items-center justify-center">
        <Image
          src={assets.phone}
          priority
          alt="cracked phone"
          height={500}
          style={{ transform: "rotate(-10deg)" }}
        />
        <div className="flex w-full flex-col items-start justify-center gap-2 md:w-1/3">
          <h1 className="text-5xl font-bold">Захисти смартфон</h1>
          <p className="text-lg">
            всього за 99 грн на місяць, ти отримаєш ремонт твого гаджету або
            сертифікат на купівлю нового у розмірі 60% від його вартості, у разі
            настання страхового випадку.
          </p>
        </div>
      </div>

      <div className="flex min-h-[100dvh] w-full flex-wrap items-center justify-center">
        <Image src={assets.pig} priority alt="cracked phone" height={500} />
        <div className="flex w-full flex-col items-start justify-center gap-2 md:w-1/3">
          <h1 className="text-5xl font-bold">Заощаджуй на ремонті</h1>
          <p className="text-lg">
            не важливо чому твій смартфон розбитий та як це сталося, якщо його
            можливо відремонтувати, ми це зробимо. Якщо ні, ми відшкодуємо тобі
            60% від його вартості.
          </p>
        </div>
      </div>

      <div className="flex min-h-[100dvh] w-full flex-wrap items-center justify-center gap-2">
        {[...Array(3).keys()].map((i) => (
          <div
            key={i}
            className="glass flex w-full flex-col items-center justify-start rounded-xl py-3 md:w-3/12"
          >
            <div
              className="rounded-xl bg-white px-4 py-2"
              style={{
                transform: "translateY(-65%)",
              }}
            >
              <h1 className="text-3xl font-bold text-red-400">місяць</h1>
            </div>

            <h2 className="text-4xl font-bold">99 ₴</h2>
            <p>перший платіж </p>
          </div>
        ))}
      </div>
    </div>
  );
}
