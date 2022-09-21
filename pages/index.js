import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is home</h1>
      <Link href="/about" scroll={false}>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
