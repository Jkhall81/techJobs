import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mzx-w-5xl mx-auto space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Flow Jobs</h3>
            <p className="text-sm text-muted-foreground">
              Cnnecting talents with opportunities
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/about" className="hover:underline">
              Contact
            </Link>
            <Link href="/about" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/about" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          {new Date().getFullYear()} Tech Jobs, Inc. All rights reservered
        </div>
      </div>
    </footer>
  );
}
