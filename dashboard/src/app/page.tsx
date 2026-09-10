import { Button } from "@/components/ui/button";

export default function Home() {
   return (
      <div className="flex flex-col flex-1 items-center justify-center font-sans">
         <main className="flex flex-1 w-full flex-col items-center justify-between p-10 sm:items-start">
            <Button>Click</Button>
         </main>
      </div>
   );
}
