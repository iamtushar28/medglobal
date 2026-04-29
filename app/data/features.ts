import { VscWorkspaceTrusted } from "react-icons/vsc";
import { LuBadgeCheck } from "react-icons/lu";
import { BiRupee } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";
import { IconType } from "react-icons";

type Feature = {
  icon: IconType;
  title: string;
  description: string;
  iconColor: string;
  bgColor: string;
  lineColor: string;
};

export const features: Feature[] = [
  {
    icon: VscWorkspaceTrusted,
    title: "Trusted Consultancy",
    description:
      "We are a trusted name in abroad education with proven results.",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
    lineColor: "bg-blue-500",
  },
  {
    icon: LuBadgeCheck,
    title: "4+ Years Experience",
    description:
      "Years of expertise in MBBS admission and student support.",
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    lineColor: "bg-green-500",
  },
  {
    icon: BiRupee,
    title: "No Hidden Charges",
    description:
      "We believe in 100% transparency. No hidden costs at any stage.",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    lineColor: "bg-orange-500",
  },
  {
    icon: MdSupportAgent,
    title: "End-to-End Support",
    description:
      "From counseling to arrival abroad - we are with you always.",
    iconColor: "text-violet-600",
    bgColor: "bg-violet-100",
    lineColor: "bg-violet-500",
  },
];