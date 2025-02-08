import { ReactNode } from "react";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col space-y-4">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
