"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
} from "../ui/breadcrumb";
import capitalizeFirstLetter from "@/lib/capitalizeFirstLetter";
import ArrowSolidIcon from "../icons/ArrowSolidIcon";

const Breadcrumbs = () => {
   const pathname = usePathname();
   const segments = pathname.split("/").filter(Boolean);

   return (
      <Breadcrumb>
         <BreadcrumbList>
            {segments.map((segment, index) => {
               const href = `/${segments.slice(0, index + 1).join("/")}`;

               if (index === segments.length - 1)
                  return (
                     <BreadcrumbItem key={href}>
                        <BreadcrumbPage>
                           {capitalizeFirstLetter(segment)}
                        </BreadcrumbPage>
                     </BreadcrumbItem>
                  );

               return (
                  <BreadcrumbItem key={href}>
                     <BreadcrumbLink
                        render={
                           <Link href={href}>
                              {capitalizeFirstLetter(segment)}
                           </Link>
                        }
                     ></BreadcrumbLink>
                     <span className="h-3">
                        <ArrowSolidIcon />
                     </span>
                  </BreadcrumbItem>
               );
            })}
         </BreadcrumbList>
      </Breadcrumb>
   );
};

export default Breadcrumbs;
