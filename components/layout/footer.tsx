import { FooterAuthor } from "./footer-author";
import { FooterSupport } from "./footer-support";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 py-8 flex flex-col items-center space-y-4 mt-8">
      <FooterAuthor />
      <FooterSupport />
    </footer>
  );
}
