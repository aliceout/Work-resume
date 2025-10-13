import { createContext, useContext } from "react";

// N’IMPORTER QUE CE QUI EST UTILISÉ DANS TES DATA/COMPOSANTS
import {
  FaGithub,
  FaLinkedinIn,
  FaUniversity,
  FaHandsHelping,
  FaHome,
} from "react-icons/fa";
import { MdOutlinePhotoLibrary, MdPlace } from "react-icons/md";
import { RiRobot2Fill } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiProtonmail, SiSignal } from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";

const IconsContext = createContext({
  FaGithub,
  FaLinkedinIn,
  FaUniversity,
  FaHandsHelping,
  FaHome,
  MdOutlinePhotoLibrary,
  MdPlace,
  RiRobot2Fill,
  GrUserWorker,
  IoCloseSharp,
  GiHamburgerMenu,
  SiProtonmail,
  SiSignal,
  BsMicrosoftTeams,
});

export function useIcons() {
  return useContext(IconsContext);
}

export function IconsProvider({ children }) {
  return (
    <IconsContext.Provider value={IconsContext._currentValue}>
      {children}
    </IconsContext.Provider>
  );
}
