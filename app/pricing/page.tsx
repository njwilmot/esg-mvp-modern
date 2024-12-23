// app/pricing/page.tsx
import { prisma } from "@/lib/prisma";
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
      <h1 className="text-4xl font-bold text-white text-center">Choose Your Plan</h1>
      <p className="text-gray-400 text-center">
        Whether you’re just starting out or scaling your business, we have a plan for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Free Tier */}
        <form
          action={createSubscription}
          className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform"
        >
          <Image src="/free.svg" alt="Free Tier" width={80} height={80} />
          <h2 className="text-2xl font-bold text-white mt-4">Free</h2>
          <p className="text-gray-400 mt-2 text-center">Get started with our basic features.</p>
          <ul className="text-gray-400 mt-4 space-y-2 text-center">
            <li>✔ Basic analytics</li>
            <li>✔ 1 team member</li>
            <li>✔ Email support</li>
          </ul>
          <input type="hidden" name="tier" value="free" />
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 mt-6 rounded-md hover:bg-blue-800"
          >
            Start for Free
          </button>
        </form>

        {/* Pro Tier */}
        <form
          action={createSubscription}
          className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center border border-blue-700 hover:scale-105 transition-transform"
        >
          <Image src="/pro.svg" alt="Pro Tier" width={80} height={80} />
          <h2 className="text-2xl font-bold text-white mt-4">Pro</h2>
          <p className="text-gray-400 mt-2 text-center">For growing teams who need advanced features.</p>
          <ul className="text-gray-400 mt-4 space-y-2 text-center">
            <li>✔ Advanced analytics</li>
            <li>✔ 5 team members</li>
            <li>✔ Priority support</li>
          </ul>
          <input type="hidden" name="tier" value="pro" />
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 mt-6 rounded-md hover:bg-blue-800"
          >
            Go Pro
          </button>
        </form>

        {/* Enterprise Tier */}
        <form
          action={createSubscription}
          className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform"
        >
          <Image src="/ent.svg" alt="Enterprise Tier" width={80} height={80} />
          <h2 className="text-2xl font-bold text-white mt-4">Enterprise</h2>
          <p className="text-gray-400 mt-2 text-center">Custom solutions for large organizations.</p>
          <ul className="text-gray-400 mt-4 space-y-2 text-center">
            <li>✔ Unlimited analytics</li>
            <li>✔ Unlimited team members</li>
            <li>✔ Dedicated support</li>
          </ul>
          <input type="hidden" name="tier" value="enterprise" />
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 mt-6 rounded-md hover:bg-blue-800"
          >
            Contact Sales
          </button>
        </form>
      </div>
    </div>
  );
}
