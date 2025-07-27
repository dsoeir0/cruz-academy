'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <header className="flex w-full bg-gray-100 shadow-2xl">
            <div className='flex flex-row w-full'>
                <Link href={'/'} className='size-full'>
                    <Image src={'/logo.webp'} alt='Chopper Skull' width={273} height={84} className='text-left pl-4'/>
                </Link>
                <div className='size-full flex justify-end'> 
                    <Link href={'/teachers'} className='pr-6 pl-6 content-center w-36 text-center duration-500 hover:bg-gray-200 hover:cursor-pointer'>Professor </Link>
                    <Link href={'/parents'} className='pr-6 pl-6 content-center w-36 text-center duration-500 hover:bg-gray-200 hover:cursor-pointer'>Encarregado </Link>
                </div>
            </div>
        </header>
    );
}
