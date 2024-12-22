// app/profile/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold text-white">Your Profile</h1>
      <p className="text-gray-400">
        Welcome, {session.user.name || "mysterious user"}!
      </p>

      <div className="bg-gray-900 p-6 rounded-md shadow-md max-w-md">
        <h2 className="text-xl font-bold text-white mb-2">Account Info</h2>
        <p className="text-gray-400">Email: {session.user.email}</p>
        {/* If your user has an image (from Google), you could display it here */}
        {session.user.image && (
          <img
            src={session.user.image}
            alt="User Avatar"
            className="mt-3 w-20 h-20 object-cover rounded-full border border-gray-700"
          />
        )}
      </div>
    </div>
  );
}
