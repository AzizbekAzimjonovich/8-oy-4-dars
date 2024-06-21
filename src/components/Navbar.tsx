import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 w-4/5 mx-auto">
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost text-xl">
            Shop
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/price">Price</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
