import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-4 py-6 flex flex-row items-center">
        <Link href={"/"} className="">
          <img src="Logo.png" width="87px" height="36px" alt="" />
        </Link>
        <div className="ml-auto inline-flex">
          <img src="Icon-call.png" alt="" />
          <span className="px-3 font-medium">+0 123 456-789</span>
        </div>
      </div>
    </header>
  );
}
