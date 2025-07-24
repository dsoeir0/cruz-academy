'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <header className="flex w-full bg-gray-100 shadow-2xl">
            <div className='flex flex-row w-full'>
                <Link href={'/'}>
                    <Image src={'/logo.webp'} alt='Chopper Skull' width={273} height={84} className='text-left pl-4'/>
                </Link>
            </div>
        </header>
    );
}
