import { useState } from "react";
import { useLocation } from "react-router-dom";
import { SettingsMenu } from "../SettingsMenu/SettingsMenu";
import { Burger } from "./Burger";
import { Plus } from "./Plus";

export const Navigation = () => {
  const location = useLocation();
  const [visibleSettings, setVisibleSettings] = useState(false);
  const toggleSettings = () => setVisibleSettings(!visibleSettings);
  const closeSettings = () => setVisibleSettings(false);

  // Styles
  const wrapperStyle =
    "fixed w-full h-14 px-4 bottom-0 bg-white/60 border-t-2 backdrop-blur-md z-50";
  const btnsRowStyle =
    "max-w-[43rem] mx-auto h-14 px-6 flex justify-between items-center";

  return (
    <>
      {location.pathname === "/" && (
        <>
          <div className={wrapperStyle}>
            <div className={btnsRowStyle}>
              <div onClick={toggleSettings}>
                <Burger />
              </div>

              {location.pathname === "/" && <Plus onClick={closeSettings} />}
            </div>
          </div>

          <SettingsMenu
            closeSettings={closeSettings}
            visibleSettings={visibleSettings}
          />
        </>
      )}
    </>
  );
};
