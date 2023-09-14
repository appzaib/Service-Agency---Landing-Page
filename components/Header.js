import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto p-4 flex flex-row">
        <Link href={"/"} className="">
          <img src="Logo.png" width="87px" height="36px" alt="" />
        </Link>
        <div className="ml-auto inline-flex">
          <img src="Icon-call.png" alt="" />
          <span className="ml-3">+0 123 456-789</span>
        </div>
      </div>
    </header>
  );
}
