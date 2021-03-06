import { Button } from "./styles";

const ButtonForm = ({ isLight, children }) => {
  return (
    <Button isLight={isLight}>
      <button class="btn">
        <svg>
          <rect
            x="5"
            y="5"
            rx="20"
            fill="none"
            stroke="url(#grad1)"
            width="266"
            height="50"
          ></rect>
        </svg>
        <span>{children}</span>
      </button>
    </Button>
  );
};

export default ButtonForm;
