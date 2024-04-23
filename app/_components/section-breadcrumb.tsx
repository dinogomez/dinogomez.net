"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Config } from "@/lib/data";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";

function BreadCrumb() {
  const pathname = usePathname();

  const Badge = ({ count }: { count: number }) => (
    <div className="absolute right-[-0.78rem] top-[-0.2rem]  flex items-center justify-center w-3 h-3 bg-red-500 p-0 text-white rounded-full text-[0.6rem]">
      <span className="mr-[1.5px]">{count}</span>
    </div>
  );

  return (
    <Breadcrumb className="border-t pt-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          {pathname === "/" ? (
            <BreadcrumbPage>Experience</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href="/">Experience</BreadcrumbLink>
          )}
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="relative">
          {pathname === "/projects" ? (
            <div className="flex items-center">
              <BreadcrumbPage>Projects</BreadcrumbPage>
            </div>
          ) : (
            <BreadcrumbLink href="/projects">
              <div className="flex items-center">Projects</div>
            </BreadcrumbLink>
          )}
          <Badge count={Config.Projects.length} />
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCrumb;
