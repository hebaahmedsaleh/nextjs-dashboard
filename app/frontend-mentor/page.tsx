import Link from "next/link";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import AcmeLogo from "@/app/ui/acme-logo";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="block md:hidden"
          alt="Screenshot of the dashboard project showing mobile version"
        />
      </div>
    </main>
  );
}
