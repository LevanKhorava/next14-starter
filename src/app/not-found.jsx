import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <h2>Sorry, the page you are looking for does not exist.</h2>
      <Link href={"./"}>Return Home</Link>
    </div>
  );
};

export default NotFound;
