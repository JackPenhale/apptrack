import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
  provider: String;
}

const ScocialLoginButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
  provider,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
   btn
   btn-primary
   m-4
      "
    >
      <Icon className="" />
      sign in with {provider}
    </button>
  );
};

export default ScocialLoginButton;
