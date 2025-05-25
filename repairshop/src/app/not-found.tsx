import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
  description: "Sorry, we could not find the page you are looking for.",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl">Page Not Found</h1>

        <Link href="/" className="flex flex-col justify-center gap-4 items-center">
          <Image
            className="m-0 rounded-xl"
            src="/images/not-found-1024x1024.png"
            width={300}
            height={300}
            sizes="300px"
            alt="Page Not Found"
            priority
            title="Page Not Found"
          />
          Go back home
        </Link>
      </div>
    </div>
  );
}
