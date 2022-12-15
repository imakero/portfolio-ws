type BlobBackdropProps = {
  id: 1 | 2 | 3;
};

const BlobBackdrop = ({ id }: BlobBackdropProps) => {
  switch (id) {
    case 1:
      return (
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 602 649"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-full w-full top-0 left-0 -z-10 fill-tertiary scale-[133%]"
        >
          <path d="M29 150C-17.8828 264.181 -2.55739 298.976 48.8958 511.16C100.349 723.344 435.058 664.185 535.03 511.16C635.003 358.135 612.967 212.814 535.03 82.9774C452.326 -54.8023 310.149 13.6705 168.266 44.1924C120.918 54.3781 53.6277 90.0201 29 150Z" />
        </svg>
      );
    case 2:
      return (
        <svg
          viewBox="0 0 236 298"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute h-full w-full top-0 left-0 -z-10 fill-tertiary scale-[133%]"
        >
          <path
            d="M202.5 24.4995C177.934 -23.9296 80.2147 15.7699 22.4997 24.4995C-19.7332 30.8874 9.46043 223.799 22.4997 255C35.5389 286.2 162.481 268.088 202.5 255C244.547 241.247 207 191.117 207 130C207 101.101 235.619 89.7915 202.5 24.4995Z"
            fill="#FFE2C7"
          />
        </svg>
      );
    case 3:
    default:
      return (
        <svg
          viewBox="0 0 857 898"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-full w-full top-0 left-0 -z-10 fill-tertiary scale-[133%]"
        >
          <path d="M541.5 60.3998C317.167 -5.23731 152.196 -62.9164 60.5323 146.266C7.42864 396.408 -70.529 644.739 129.032 815.766C317.475 977.264 671.392 858.207 764.532 815.766C925.371 742.477 834.073 363.121 803 193.4C770.62 16.5391 718.786 112.272 541.5 60.3998Z" />
        </svg>
      );
  }
};

export default BlobBackdrop;
