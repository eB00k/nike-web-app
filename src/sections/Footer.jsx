import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col item-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="footer"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  height={24}
                  width={24}
                  className="shadow-md shadow-slate-50"
                />
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((link) => (
              <div
                key={link.title}
                className="text-white-400 flex font-montserrat flex-col gap-6"
              >
                <h4 className="text-2xl text-white leading-normal font-medium">
                  {link.title}
                </h4>
                <ul className="text-base leading-7 flex flex-col gap-2">
                  {link.links.map((item) => (
                    <li
                      key={item.name}
                      className="hover:text-white leading-normal"
                    >
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center font-montserrat">
        <div className="flex flex-1 justify-start items-center cursor-pointer gap-2">
          <img
            src={copyrightSign}
            alt="copy right"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserverd.</p>
        </div>
        <p className=" cursor-pointer">Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
