import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { modalTexts } from "../../assets/constants";
import useModal from "../../hooks/useModal";
import { resetAll } from "../../utils/resetAll";
import Modal from "../Modal";
import { SettingsItem } from "./SettingsItem";

interface SettingsMenuProps {
  closeSettings: () => void;
  visibleSettings: boolean;
}

export const SettingsMenu = ({
  closeSettings,
  visibleSettings,
}: SettingsMenuProps) => {
  const { isOpen, toggle } = useModal();
  const [darkMode, setDarkMode] = useState(true);

  const closeModal = () => {
    toggle();
    closeSettings();
  };

  // Styles
  const overlayStyle =
    "fixed top-0 left-0 right-0 bottom-0 max-w-[43rem] mx-auto px-4 backdrop-blur-sm z-40";

  const settingsWrapperStyle =
    "fixed bottom-0 px-8 pt-10 pb-24 flex flex-col gap-6 bg-slate-400 dark:bg-myWhite rounded-t-3xl shadow-2xl";

  function myFunction() {
    const element = document.documentElement;
    element.classList.toggle("dark");
    setDarkMode(!darkMode);
    closeSettings();
  }

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <h1 className="text-lg font-medium">{modalTexts.deleteAllTitle}</h1>
        <div className="mt-4 text-center">{modalTexts.deleteAllQuestion}</div>
        <div className="mt-4 flex gap-4">
          <button onClick={resetAll} className="bg-myRed px-4 py-2 rounded-lg">
            Delete
          </button>
          <button
            onClick={closeModal}
            className="bg-myWhite px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </Modal>

      <AnimatePresence>
        {visibleSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeSettings}
            className={`${overlayStyle} `}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className={`${settingsWrapperStyle}`}
            >
              {/* <SettingsItem onClick={() => {}}>
                Sort by name | date
              </SettingsItem> */}
              <SettingsItem onClick={myFunction}>
                {darkMode ? modalTexts.lightMode : modalTexts.darkMode} 🌗
              </SettingsItem>

              <SettingsItem onClick={toggle}>DELETE ALL 😨</SettingsItem>
              <SettingsItem onClick={closeSettings}>
                <a href="https://bodik87.github.io/index.html" target="_blank">
                  {modalTexts.portfolio} 😊
                </a>
              </SettingsItem>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
