import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
      <Link href="/documents/123">
        <Button variant="default">Click me</Button>
      </Link>
    </div>
  );
};

export default Home;
