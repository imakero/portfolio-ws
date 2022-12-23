type FloatingButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const FloatingButton = ({ onClick }: FloatingButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full bg-primary/95 drop-shadow-standard sm:h-16 sm:w-16 sm:hover:bg-primary/70"
    >
      <svg
        aria-hidden="true"
        className="h-full w-full text-white "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M16 36 l16 -16 16 16"
        ></path>
      </svg>
      <span className="sr-only">Back to top</span>
    </button>
  );
};

export default FloatingButton;
