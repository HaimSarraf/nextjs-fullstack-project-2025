import { HomeIcon, File, UsersRound } from "lucide-react";
import Link from "next/link";
import { NavButton } from "@/src/components/NavButton";
import { ModeToggle } from "@/src/components/ModeToggle";

export default function Header() {
  return (
    <header className=" bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="home" icon={HomeIcon} />
        </div>

        <div className="flex items-center">
          <Link
            href="/"
            className="flex justify-center items-center ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Computer Repair Shop
            </h1>
          </Link>
        </div>

        <div className="flex items-center">
          <NavButton href="/tickets" label="tickets" icon={File} />

          <NavButton href="/customers" label="customers" icon={UsersRound} />

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
