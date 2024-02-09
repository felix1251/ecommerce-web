import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex-1 margin-max-screen grid place-items-center">
      <div className="flex flex-col items-center gap-7">
        <h2 className="text-6xl font-bold text-gray-800">Page Not Found</h2>
        <Link
          className="text-white bg-primary font-medium px-5 py-3 rounded-sm"
          href="/"
        >
          Go to home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
