import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, we could not find the page you are looking for.</p>
      <Link href="/">Go back home</Link>
    </div>
  );
}
