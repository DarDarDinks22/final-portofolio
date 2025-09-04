"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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