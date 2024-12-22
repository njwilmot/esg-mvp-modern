// app/settings/page.tsx
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function updateSettings(formData: FormData) {
  "use server";

  const emailNotifications = formData.get("emailNotifications") === "on";
  const themeMode = formData.get("themeMode")?.toString() || "light";

  // For example, we might get a userId from session cookies or an auth provider
  const userId = "dummy-user-id";

  await prisma.userSettings.upsert({
    where: { userId },
    create: { userId, emailNotifications, themeMode },
    update: { emailNotifications, themeMode },
  });

  revalidatePath("/settings");
}

export default async function SettingsPage() {
  // Again, you’d get the userId from an actual auth session
  const userId = "dummy-user-id";

  // Load existing settings from DB
  const settings = await prisma.userSettings.findUnique({
    where: { userId },
  });

  return (
    <div className="container mx-auto px-6 py-12 space-y-8 text-gray-300">
      <h1 className="text-3xl font-bold text-white">Account Settings</h1>
      <p className="text-gray-400">Configure your preferences below:</p>

      <form action={updateSettings} className="bg-gray-900 p-6 rounded-md shadow space-y-4">
        <div>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="emailNotifications"
              defaultChecked={settings?.emailNotifications ?? false}
              className="form-checkbox h-5 w-5 text-accent"
            />
            <span>Email Notifications</span>
          </label>
        </div>

        <div>
          <label htmlFor="themeMode" className="block mb-1 text-sm">
            Theme Mode
          </label>
          <select
            id="themeMode"
            name="themeMode"
            defaultValue={settings?.themeMode || "light"}
            className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-200"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-light"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
