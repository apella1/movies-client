import { JSX } from "react";

interface SocialButtonProps {
  icon: JSX.Element;
  onClick?: () => void;
}
export default function SocialButton({ icon, onClick }: SocialButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-1.5 border border-gray-400 rounded"
    >
      {icon}
    </button>
  );
}
