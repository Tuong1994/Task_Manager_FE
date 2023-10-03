import { UI } from "@/components";
import type { Metadata } from "next";
import Providers from "@/redux/Provider";
import "@/style/main.scss";

const { Layout } = UI;

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Application task management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
