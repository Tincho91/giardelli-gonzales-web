"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils"


export function MainNav({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/#servicios`,
      label: '¿QUÉ HACEMOS?',
      active: pathname === `/` && (typeof window !== 'undefined' && window.location.hash === '#servicios'),
    },
    {
      href: `/#metodologia`,
      label: '¿CÓMO LO HACEMOS?',
      active: pathname === `/` && (typeof window !== 'undefined' && window.location.hash === '#metodologia'),
    },
    {
      href: `/#clientes`,
      label: 'CLIENTES',
      active: pathname === `/` && (typeof window !== 'undefined' && window.location.hash === '#clientes'),
    },
    {
      href: `/positions`,
      label: 'BÚSQUEDAS ACTIVAS',
      active: pathname === `/positions`,
    },
    {
      href: `/cv`,
      label: 'CARGÁ TU CV',
      active: pathname === `/cv`,
    },

  ]

  return (
    <nav className={cn("ml-auto flex items-center space-x-4 lg:space-x-6 ", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm lg:text-md xl:text-lg font-bold transition-colors hover:text-customBlue-dark',
            route.active ? 'text-customBlue-dark' : 'text-customBlue'
          )}
        >
          {route.label}
      </Link>
      ))}
      <UserButton afterSignOutUrl="/" />
    </nav>
  )
};

export default MainNav;
