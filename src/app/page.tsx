import Image from "next/image";
import * as assets from "~/assets";
import Checkbox from "./_components/Checkbox";
import Button from "./_components/Button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center px-2">
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

      <div className="flex min-h-[100dvh] w-full flex-wrap items-center justify-center gap-10 pb-10 pt-4  md:gap-2">
        <div className="glass flex w-full flex-col items-center justify-start rounded-xl px-4 py-3 md:w-3/12">
          <div
            className="rounded-xl bg-white px-4 py-2"
            style={{
              transform: "translateY(-65%)",
            }}
          >
            <h1 className="text-3xl font-bold text-red-400">місяць</h1>
          </div>

          <h2 className="text-4xl font-bold">99₴</h2>
          <p className="max-w-2/3">на місяць </p>

          <div className="flex w-full flex-col gap-2 py-3">
            <Checkbox
              checkboxId="1"
              label="ремонт або повернення 60% вартості пристрою"
            />
            <Checkbox
              checkboxId="2"
              label="діагностика пристрою"
              checked={false}
            />
            <Checkbox
              checkboxId="3"
              label="продовженна гарантія після закінчення стандартної"
              checked={false}
            />
          </div>
          <Button link="/subscribe/99" py={0.35}>
            Subscribe
          </Button>
        </div>

        <div className="glass flex w-full flex-col items-center justify-start rounded-xl px-4 py-3 md:w-3/12">
          <div
            className="rounded-xl bg-white px-4 py-2"
            style={{
              transform: "translateY(-65%)",
            }}
          >
            <h1 className="text-3xl font-bold text-red-400">3 місяці</h1>
          </div>

          <h2 className="text-4xl font-bold">249₴</h2>
          <p className="max-w-2/3">перший платіж, наступні по 99₴ на місяць</p>

          <div className="flex w-full flex-col gap-2 py-3">
            <Checkbox
              checkboxId="1"
              label="ремонт або повернення 60% вартості пристрою"
            />
            <Checkbox checkboxId="2" label="діагностика пристрою" />
            <Checkbox
              checkboxId="3"
              label="продовженна гарантія після закінчення стандартної"
              checked={false}
            />
          </div>
          <Button link="/subscribe/249" py={0.35}>
            Subscribe
          </Button>
        </div>

        <div className="glass flex w-full flex-col items-center justify-start rounded-xl px-4 py-3 md:w-3/12">
          <div
            className="rounded-xl bg-white px-4 py-2"
            style={{
              transform: "translateY(-65%)",
            }}
          >
            <h1 className="text-3xl font-bold text-red-400">6 місяців</h1>
          </div>

          <h2 className="text-4xl font-bold">449₴</h2>
          <p className="max-w-2/3">перший платіж, наступні по 99₴ на місяць</p>

          <div className="flex w-full flex-col gap-2 py-3">
            <Checkbox
              checkboxId="1"
              label="ремонт або повернення 60% вартості пристрою"
            />
            <Checkbox checkboxId="2" label="діагностика пристрою" />
            <Checkbox
              checkboxId="3"
              label="продовженна гарантія після закінчення стандартної"
            />
          </div>
          <Button link="/subscribe/449" py={0.35}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
