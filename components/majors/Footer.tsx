import Link from "next/link";
export default function Footer() {
  return (
    <footer className="pt-10 w-full">
      <div className="rounded-t-3xl border border-black/10 bg-white p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-2xl font-extrabold text-[#031403]">Automate</div>
            <p className="mt-2 text-black/70">End‑to‑end automation and integration.</p>
          </div>
          <div>
            <div className="font-semibold">Solutions</div>
            <ul className="mt-2 space-y-2 text-black/70">
              <li>Workflow</li>
              <li>Integrations</li>
              <li>AI Assistance</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-2 text-black/70">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-black/10 text-sm text-black/60">
          © {new Date().getFullYear()} Automate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
