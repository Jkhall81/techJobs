import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="techjobs logo" width={70} height={70} />
          <span className="text-xl font-bold tracking-tight">Tech Jobs</span>
        </Link>
        <Button asChild>
          <Link href="/jobs/new">Post a job</Link>
        </Button>
      </nav>
    </header>
  );
}
