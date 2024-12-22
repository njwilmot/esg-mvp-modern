// app/pricing/page.tsx
import {prisma}  from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Image from "next/image";

/**
 * This server action would typically call Stripe or your payment provider
 * to create a checkout session for the user. For the sake of example,
 * we just store the "tier" in the DB or do something minimal.
 */
async function createSubscription(formData: FormData) {
  "use server";
  const tier = formData.get("tier")?.toString() || "free";

  // Example logic: store subscription in DB (or call Stripe, etc.)
  // Here we assume you have a `Subscription` model with userID references, etc.
  await prisma.subscription.create({
    data: {
      userId: "dummy-user-id", // Replace with actual user ID
      tier,
      status: "pending",
    },
  });

  // Revalidate or redirect somewhere
  revalidatePath("/pricing");
  redirect("/profile"); // e.g. show the user's updated subscription on their profile
}

export default function PricingPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-8 text-gray-300">
      <h1 className="text-4xl font-bold text-white">Choose Your Plan</h1>
      <p className="text-gray-400">
        Whether you’re just starting out or scaling your business, we have a plan for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Example Tiers */}
        <form action={createSubscription} className="bg-gray-900 p-6 rounded-md flex flex-col items-center">
          <Image src="/images/free-tier.png" alt="Free Tier" width={64} height={64} />
          <h2 className="text-2xl font-bold text-white mt-4">Free</h2>
          <p className="text-gray-400 mt-2">Get started with our basic features.</p>
          <input type="hidden" name="tier" value="free" />
          <button
            type="submit"
            className="bg-accent text-white px-4 py-2 mt-6 rounded-md hover:bg-accent-light"
          >
            Start for Free
          </button>
        </form>

        <form action={createSubscription} className="bg-gray-900 p-6 rounded-md flex flex-col items-center">
          <Image src="/images/pro-tier.png" alt="Pro Tier" width={64} height={64} />
          <h2 className="text-2xl font-bold text-white mt-4">Pro</h2>
          <p className="text-gray-400 mt-2">For growing teams who need advanced features.</p>
          <input type="hidden" name="tier" value="pro" />
          <button
            type="submit"
            className="bg-accent text-white px-4 py-2 mt-6 rounded-md hover:bg-accent-light"
          >
            Go Pro
          </button>
        </form>

        <form action={createSubscription} className="bg-gray-900 p-6 rounded-md flex flex-col items-center">
          <Image src="/images/enterprise-tier.png" alt="Enterprise Tier" width={64} height={64} />
          <h2 className="text-2xl font-bold text-white mt-4">Enterprise</h2>
          <p className="text-gray-400 mt-2">Custom solutions for large organizations.</p>
          <input type="hidden" name="tier" value="enterprise" />
          <button
            type="submit"
            className="bg-accent text-white px-4 py-2 mt-6 rounded-md hover:bg-accent-light"
          >
            Contact Sales
          </button>
        </form>
      </div>
    </div>
  );
}
