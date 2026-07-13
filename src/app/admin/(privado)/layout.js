import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
  const cookieStore = await cookies();

  if (!cookieStore.get("admin")) {
    redirect("/admin/login");
  }

  return children;
}