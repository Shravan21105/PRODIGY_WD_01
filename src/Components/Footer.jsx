import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-20">
          <div>
            <h3 className="text-md font-semibold mb-4 flex flex-col items-center">Resources</h3>
            <ul className="py-3 space-y-2 flex flex-col items-center">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-300 hover:text-white transition-colors duration-300 ease-in-out">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 flex flex-col items-center">Platform</h3>
            <ul className="py-3 space-y-2 flex flex-col items-center">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-300 hover:text-white transition-colors duration-300 ease-in-out">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 flex flex-col items-center">Community</h3>
            <ul className="py-3 space-y-2 flex flex-col items-center">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-300 hover:text-white transition-colors duration-300 ease-in-out">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
