import useOpenContext from "../contexts/useOpenContext";

function Hamburger() {
  const { open, hamburgerHandler } = useOpenContext();

  return (
    <div className="block cursor-pointer lg:hidden" onClick={hamburgerHandler}>
      {open ? (
        <svg
          width="25"
          height="19"
          viewBox="0 0 25 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1.5H23.5"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M12.5 9.5L23.5 9.5"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M1.5 17.5H23.5"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      ) : (
        // <svg
        //   width="24"
        //   height="24"
        //   viewBox="0 0 24 24"
        //   fill="none"
        //   xmlns="http://www.w3.org/2000/svg"
        // >
        //   <path
        //     d="M18 6L6 18M6 6L18 18"
        //     stroke="#333437"
        //     strokeWidth="2"
        //     strokeLinecap="round"
        //     strokeLinejoin="round"
        //   />
        // </svg>
        // ===========
        // <svg
        //   width="24"
        //   height="25"
        //   viewBox="0 0 24 25"
        //   fill="none"
        //   xmlns="http://www.w3.org/2000/svg"
        // >
        //   <path
        //     d="M3 12.9624H21M3 6.9624H21M3 18.9624H21"
        //     stroke="#333437"
        //     strokeWidth="2"
        //     strokeLinecap="round"
        //     strokeLinejoin="round"
        //   />
        // </svg>
        <svg
          width="25"
          height="19"
          viewBox="0 0 25 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1.5H23.5"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M12.5 9.5L23.5 9.5"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M1.5 17.5H23.5"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      )}
    </div>
  );
}

export default Hamburger;
