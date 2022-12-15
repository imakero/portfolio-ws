type RockHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

const RockHeading = ({
  children,
  className = "",
  ...props
}: RockHeadingProps) => {
  return (
    <h2
      className={`text-6xl font-bold text-center text-secondary ${className}`}
      {...props}
    >
      <span className="relative">
        {children}
        <div className="absolute w-full -z-10 h-full top-0 left-0 scale-x-[125%] scale-y-[200%] fill-primary">
          <svg
            viewBox="0 0 449 231"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <path d="M32.9986 189.958C74.0075 235.318 143.374 209.433 214.646 219.891C245.465 224.413 262.357 232.052 293.711 230.879C352.392 228.685 394.688 214.565 426.319 177.075C479.643 113.873 435.802 1.50881 327.738 0.129033C219.675 -1.25074 162.804 8.04969 69.5283 46.7338C-23.7472 85.4178 -9.49915 142.951 32.9986 189.958Z" />
          </svg>
        </div>
      </span>
    </h2>
  );
};

export default RockHeading;
