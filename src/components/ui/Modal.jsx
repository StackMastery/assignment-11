import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ button, link, des, title, isOpen, setisOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex justify-center fixed w-full  bg-black/60 overflow-x-hidden top-0 z-[99999999]"
        >
          <div className="w-primary px-5 py-40 h-screen items-center inline-flex justify-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{
                stiffness: 200,
              }}
              className="bg-white dark:bg-black dark:border-white/20 border space-y-5 p-10 w-full md:w-9/12 lg:w-[400px] rounded-xl"
            >
              <div className="flex justify-end -mr-5 -mt-5">
                <IoMdClose
                  onClick={() => setisOpen(false)}
                  size={32}
                  className="hover:bg-neutral-200 p-1 rounded-full hover:rotate-180 transition-all cursor-pointer"
                />
              </div>
              <div className="flex justify-center">
                <svg
                  width="72"
                  height="68"
                  viewBox="0 0 72 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M68.1715 39.9631L68.1505 39.9735C65.6826 41.8661 64.6369 45.0869 65.5154 48.0673L65.5258 48.0882C66.927 52.8253 63.4553 57.6041 58.5194 57.7296H58.4986C55.3823 57.8133 52.6425 59.8001 51.6073 62.7386V62.749C49.9549 67.4128 44.3292 69.2427 40.2614 66.4297C37.7355 64.7049 34.3963 64.6149 31.7388 66.4297H31.7284C27.6607 69.2322 22.0347 67.4127 20.3929 62.7384C19.3483 59.7926 16.6126 57.813 13.5017 57.7295H13.4807C8.54508 57.6039 5.07319 52.8252 6.47452 48.0881L6.48492 48.0671C7.36312 45.0867 6.31744 41.866 3.84975 39.9733L3.8288 39.9629C-0.0926719 36.9512 -0.0926719 31.0535 3.8288 28.0419L3.84975 28.0315C6.31744 26.1388 7.36312 22.9179 6.47452 19.9376V19.9167C5.06264 15.1797 8.54494 10.4007 13.4807 10.2753H13.5017C16.6074 10.1916 19.3576 8.20474 20.3929 5.26638V5.25598C22.0345 0.592147 27.6607 -1.23781 31.7284 1.57526H31.7388C34.3007 3.34249 37.6888 3.34249 40.2614 1.57526C44.3701 -1.26213 49.9646 0.620132 51.6073 5.25598V5.26638C52.6425 8.19433 55.3822 10.1918 58.4986 10.2753H58.5194C63.4552 10.4007 66.927 15.1797 65.5258 19.9167L65.5154 19.9376C64.6369 22.9179 65.6826 26.1388 68.1505 28.0315L68.1715 28.0419C72.093 31.0535 72.093 36.9513 68.1715 39.9631Z"
                    fill="#3EB655"
                  />
                  <path
                    d="M36.0004 53.479C46.7584 53.479 55.4794 44.7579 55.4794 34C55.4794 23.2421 46.7584 14.5211 36.0004 14.5211C25.2425 14.5211 16.5215 23.2421 16.5215 34C16.5215 44.7579 25.2425 53.479 36.0004 53.479Z"
                    fill="#8BD399"
                  />
                  <path
                    opacity="0.1"
                    d="M50.9569 21.5312C47.5876 18.7595 43.2771 17.0935 38.5779 17.0935C27.8201 17.0935 19.0943 25.8193 19.0943 36.5771C19.0943 41.2762 20.7603 45.5868 23.5319 48.956C19.2511 45.3851 16.5244 40.0137 16.5244 33.9997C16.5244 23.2417 25.2427 14.5236 36.0006 14.5236C42.0145 14.5236 47.386 17.2503 50.9569 21.5312Z"
                    fill="black"
                  />
                  <path
                    d="M31.3659 41.6256L27.0584 37.0429C25.9303 35.8425 25.9886 33.9552 27.1885 32.8271C28.3885 31.6976 30.2766 31.7582 31.4037 32.9577L33.46 35.1444L42.2002 25.1547C43.2836 23.915 45.168 23.7893 46.4087 24.8742C47.6485 25.9591 47.7736 27.8429 46.6893 29.0827L35.7831 41.547C34.6212 42.8735 32.5708 42.9082 31.3659 41.6256Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="text-center space-y-1">
                <h2 className="text-2xl">{title}</h2>
                <p>{des}</p>
              </div>
              <div className="text-center justify-center flex">
                <Link to={link}>
                  <Button>{button}</Button>
                </Link>
              </div>
              {children}
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Modal;
