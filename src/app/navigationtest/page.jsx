"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTest = () => {
  // client side navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log(pathname);
  console.log(searchParams.get("q"));

  const handleClick = () => {
    console.log("clicked");
    router.push("/");
  };
  return (
    <div>
      <Link href={"/"} prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>write and redirect</button>
    </div>
  );
};

export default NavigationTest;
