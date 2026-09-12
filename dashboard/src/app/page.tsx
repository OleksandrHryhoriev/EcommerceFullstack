import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
   return (
      <section className="w-full h-full flex flex-col items-center justify-center">
         <h1 className="text-4xl mb-10">Welcome to custom Dashboard</h1>
         <Link href={"/dashboard"}>
            <Button>Lets begin</Button>
         </Link>
      </section>
   );
};

export default page;
