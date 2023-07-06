'use client';
import { signOut } from "next-auth/react";

const SignOutButton = () => {
    return (
        <button className="btn btn-ghost" onClick={() => signOut({ callbackUrl: '/' })}> Sign Out</button>
    );
}

export default SignOutButton;