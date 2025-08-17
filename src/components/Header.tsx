import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 border-b">
      <Link href="/" className="text-xl font-bold">
        Travel Beta
      </Link>
    </header>
  );
}
