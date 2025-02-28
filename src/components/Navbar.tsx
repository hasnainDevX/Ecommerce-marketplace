import Link from "next/link";
import MaxWidthWrapper from "../config/MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

const Navbar = () => {
  const user = null;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16 ">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Todo: Mobile nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="w-10 h-10" />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center ">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-6">
                  {user ? null : (
                    <Link
                      href={"/login"}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign in
                    </Link>
                  )}

                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" area-hidden="true" />
                  )}

                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/signup"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign up
                    </Link>
                  )}

                  {user ? (
                    <span className="h-6 w-px bg-gray-200" area-hidden="true" />
                  ) : null}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
