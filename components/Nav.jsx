'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
    const isUserLoggedIn = true;

    const [providers, setProviders ]= useState (null);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }
        setProviders();
    }, [])
    
  return (
    <nav className="flex-between w-full mb-16 pt-3">
    <Link href='/' className="flex gap-2 flex-center">
        <Image src="/assets/images/loggo.png" width={60}
        height={60}
        alt="EventsHub Logo"
        className="rounded-full" 
        />
        <p className="logo_text"></p>
    </Link>
    {/* desktop navigation */}
    <div className="sm:flex hidden">
        { isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
                <Link href='/create-event'
                className="blue_btn">
                    Create Post
                </Link>
                <button type="button" onClick={signOut} className="outline_btn">
                    Sign Out
                </button>
                <Link href='/profile'>
                    <Image src="/assets/images/loggo.png" width={37}
                    height={37}
                    alt="profile"
                    className="rounded-full"
                    />
                </Link>
            </div>
        ) : (
            <>
            {providers && 
            Object.values(providers).map((provider)=>(
                <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)} className="blue_btn"
                >
                    Sign In

                </button>
            ))}
            </>
        )}
    </div>
    </nav>
  )
}

export default Nav
