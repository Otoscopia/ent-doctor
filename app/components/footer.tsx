import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-auto">
      <aside>
        <p>Copyright © 2023 - All right reserved by Otoscopia md.</p>
        <a
          className="flex items-center justify-center"
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </aside>
    </footer>
  );
}
