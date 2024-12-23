"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-gray-300">
      <div className="w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-white text-center">
          Sign in to Voyager
        </h1>
        <p className="text-gray-400 text-center">
          Access your account, collaborate with your team, and explore all features!
        </p>

        {/* Google Sign-In */}
        <button
          onClick={() => signIn("google", { callbackUrl })}
          className="w-full flex items-center justify-center bg-accent text-white px-4 py-3 rounded-md hover:bg-accent-light transition-colors"
        >
          <Image
            src="/google.svg"
            alt="Google"
            width={24}
            height={24}
            className="inline-block mr-2"
          />
          Sign in with Google
        </button>

        {/* Email/Password Sign-In */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Or use your email
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // For custom credentials provider, or your own auth logic
              // signIn('credentials', { ... })
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-200"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-200"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white px-4 py-3 rounded-md hover:bg-accent-light"
            >
              Sign In
            </button>
          </form>
        </div>

        <p className="text-gray-400 text-center">
          Don’t have an account?
          <Link href="/signup" className="text-accent hover:underline ml-1">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
