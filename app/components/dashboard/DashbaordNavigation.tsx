'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link'; // Assuming you are using Next.js for routing
import { usePathname } from 'next/navigation';

const links = [
    {
        name: "Dashboard",
        href: "/dashboard",
    },
    {
        name: "Order",
        href: "/dashboard/order",
    },
    {
        name: "Products",
        href: "/dashboard/products",
    },
    {
        name: "Categories",
        href: "/dashboard/categories",
    },
];

export default function DashboardNavigation() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link, index) => (
                <Link key={index} href={link.href} className={cn(link.href === pathname? 'text-foreground' : 'text-muted-foreground hover:text-foreground')}>
                    {link.name}
                </Link>
            ))}
        </>
    );
}

