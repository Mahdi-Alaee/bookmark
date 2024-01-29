import ReactDOM from "react-dom";

function MobileMenu({ isActive }) {
    console.log(isActive);

  return ReactDOM.createPortal(
    <div
      className={`bg-veryDarkBlue bg-opacity-80 fixed top-0 bottom-0 left-0 right-0 
        pt-24 px-6 ${isActive ? "z-40 opacity-90" : "-z-50 opacity-0"} md:hidden`}
    >
      <ul className="flex flex-col w-full">
        {/* item 1 */}
        <li>
          <a
            className="text-white block py-4 text-center border-b border-grayishBlue 
            tracking-widest hover:text-softRed"
            href="#"
          >
            FEATURES
          </a>
        </li>

        {/* item 4 */}
        <li>
          <a
            className="text-white block py-4 text-center border-b border-grayishBlue 
            tracking-widest hover:text-softRed"
            href="#"
          >
            DOWNLOAD
          </a>
        </li>

        {/* item 3 */}
        <li>
          <a
            className="text-white block py-4 text-center border-b border-grayishBlue 
            tracking-widest hover:text-softRed"
            href="#"
          >
            FAQ
          </a>
        </li>

        {/* login button */}
        <li>
          <a
            className="text-white block py-4 text-center tracking-widest 
            hover:text-softRed"
            href="#"
          >
            Login
          </a>
        </li>
      </ul>
    </div>,
    document.getElementById("modals-wrapper")
  );
}

export default MobileMenu;
