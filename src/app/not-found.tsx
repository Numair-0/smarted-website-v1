import Link from "next/link";
import { KnotDraw } from "@/components/motion/KnotDraw";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
      <KnotDraw className="h-24 w-24 text-ink-300" />
      <p className="eyebrow mt-8">404</p>
      <h1 className="mt-4 text-4xl md:text-5xl">This page doesn&apos;t exist.</h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-500">
        The page you&apos;re looking for may have moved, or the link might be
        broken. Let&apos;s get you back on track.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to homepage
      </Link>
    </section>
  );
}
