import { ArrowUpRight } from 'lucide-react';
import Link, { type LinkProps } from 'next/link';

export default function DocsPage() {
    return (
        <main className="w-full max-w-page mx-auto flex flex-col flex-1 justify-center items-center px-4 py-16 text-center z-2">
            <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
                Getting Started
            </h1>
            <p className="text-fd-muted-foreground">
                Way to self-host my open-source projects.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 text-start md:grid-cols-1">
                {[
                    {
                        name: 'WhataDuck',
                        description:
                            'Fast, secure & your search engine',
                        icon: <ArrowUpRight className="size-full" />,
                        href: '/docs/whataduck',
                    },
                ].map((item) => (
                    <Item key={item.name} href={item.href}>
                        <Icon>{item.icon}</Icon>
                        <h2 className="mb-2 font-medium">{item.name}</h2>
                        <p className="text-sm text-fd-muted-foreground">
                            {item.description}
                        </p>
                    </Item>
                ))}
            </div>
        </main>
    );
}

function Icon({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-2 size-8 rounded-lg border p-1 text-fd-muted-foreground bg-fd-muted shadow-md">
            {children}
        </div>
    );
}

function Item(props: LinkProps & { children: React.ReactNode }) {
    return (
        <Link {...props} className="bg-fd-card rounded-2xl border p-4 shadow-lg">
            {props.children}
        </Link>
    );
}
