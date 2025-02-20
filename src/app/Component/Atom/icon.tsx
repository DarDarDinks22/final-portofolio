"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { iconPropType } from "./AtomPropTypes/iconPropType";

const Icon: React.FC<iconPropType> = ({
    iconType
}) => {
  return (
    <div className="">
      <FontAwesomeIcon icon={iconType} />
    </div>
  );
};

export default Icon;