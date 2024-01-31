import ReactDOM from "react-dom";
import { headerMenus } from "../js/data";

function MobileMenu({ isActive, setIsActive }) {
  return ReactDOM.createPortal(
    <div
      className={`bg-veryDarkBlue bg-opacity-80 fixed top-0 bottom-0 left-0 right-0 
        pt-24 px-6 ${
          isActive ? "z-40 opacity-90" : "-z-50 opacity-0"
        } md:hidden`}
    >
      <ul className="flex flex-col w-full">
        {headerMenus.map((menu) => (
          // menu item
          <li>
            <a
              className="text-white block py-4 text-center border-b border-grayishBlue 
            tracking-widest hover:text-softRed"
              href={menu.href}
              onClick={() => setIsActive(false)}
            >
              {menu.title}
            </a>
          </li>
        ))}
      </ul>
    </div>,
    document.getElementById("modals-wrapper")
  );
}

export default MobileMenu;
