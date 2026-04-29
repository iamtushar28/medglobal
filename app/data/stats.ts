import { IconType } from "react-icons";
import { FaUniversity } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { HiCheckBadge } from "react-icons/hi2";
import { GoGraph } from "react-icons/go";
import { Ri24HoursLine } from "react-icons/ri";

export type Stat = {
  icon: IconType;
  value: string;
  label: string;
};

export const stats: Stat[] = [
  {
    icon: FaUniversity,
    value: "350+",
    label: "Partner Universities",
  },
  {
    icon: PiStudentFill,
    value: "15,000+",
    label: "Students Enrolled",
  },
  {
    icon: HiCheckBadge,
    value: "4+",
    label: "Years Experience",
  },
  {
    icon: GoGraph,
    value: "95%",
    label: "Success Rate",
  },
  {
    icon: Ri24HoursLine,
    value: "24/7",
    label: "Expert Support",
  },
];