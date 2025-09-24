import logo from "../assets/logo (2).svg";
import inst from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";

export function Footer() {
  const navLinks = ["ALL PRODUCTS", "ABOUT SEEDRA", "OUR BLOG"];
  const legalLinks = ["Terms&Conditions", "Privacy Policy"];

  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <nav className="flex items-center">
              {navLinks.map((link, index) => (
                <div key={link} className="flex items-center">
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-600 transition-colors font-medium"
                  >
                    {link}
                  </a>
                  {index < navLinks.length - 1 && (
                    <div className="w-px h-4 bg-gray-200 mx-4" />
                  )}
                </div>
              ))}
            </nav>

            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="SEEDRA"
                width={97}
                height={21}
                className="h-5 w-auto"
              />
            </div>
            <nav className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-5 h-5 hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <img
                  src={inst}
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </a>
              <a
                href="#"
                className="w-5 h-5 hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="w-full h-full"
                />
              </a>
            </div>

            <span className="text-sm text-gray-600">All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
