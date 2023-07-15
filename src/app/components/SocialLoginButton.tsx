import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
  provider: String;
}

const SocialLoginButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
  provider,
}) => {
  return (
    <div className="tooltip" data-tip="Google Oauth does not work on .app domains">
      <button
        type="button"
        onClick={onClick}
        disabled
        className="
     
   btn
   btn-outline
   m-4
      "
      >
        <Icon className="" />
        sign in with {provider}
      </button>
    </div>
  );
};

export default SocialLoginButton;
