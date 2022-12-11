import { motion, AnimatePresence } from "framer-motion";
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

  // Styles
  const overlayStyle =
    "fixed top-0 left-0 right-0 bottom-0 max-w-[43rem] mx-auto px-4 bg-black/40 z-40";

  const settingsWrapperStyle =
    "fixed bottom-0 px-8 pt-10 pb-24 flex flex-col gap-6 bg-myWhite rounded-t-3xl shadow-2xl";

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div>Yaay!!!</div>
      </Modal>

      <AnimatePresence>
        {visibleSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeSettings}
            className={overlayStyle}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className={settingsWrapperStyle}
            >
              {/* <SettingsItem onClick={() => {}}>
                Sort by name | date
              </SettingsItem> */}
              <SettingsItem onClick={resetAll}>RESET ALL 😨</SettingsItem>
              {/* <SettingsItem onClick={() => {}}>Dark Theme</SettingsItem> */}
              <SettingsItem onClick={toggle}>Open Modal</SettingsItem>
              <SettingsItem onClick={closeSettings}>
                <a href="https://bodik87.github.io/index.html" target="_blank">
                  To my portfolio 😊
                </a>
              </SettingsItem>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
