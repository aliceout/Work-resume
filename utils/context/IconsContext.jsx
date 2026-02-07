import { createContext, useContext } from "react";

import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaUniversity } from "@react-icons/all-files/fa/FaUniversity";
import { FaHandsHelping } from "@react-icons/all-files/fa/FaHandsHelping";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { MdPhotoLibrary as MdOutlinePhotoLibrary } from "@react-icons/all-files/md/MdPhotoLibrary";
import { MdPlace } from "@react-icons/all-files/md/MdPlace";
import { RiRobotFill as RiRobot2Fill } from "@react-icons/all-files/ri/RiRobotFill";
import { GrUserWorker } from "@react-icons/all-files/gr/GrUserWorker";
import { IoCloseSharp } from "@react-icons/all-files/io5/IoCloseSharp";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { SiProtonmail } from "@react-icons/all-files/si/SiProtonmail";
import { SiSignal } from "@react-icons/all-files/si/SiSignal";
import { SiMicrosoftteams as BsMicrosoftTeams } from "@react-icons/all-files/si/SiMicrosoftteams";

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
