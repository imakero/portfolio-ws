import BlobBackdrop from "./BlobBackdrop";

type BlobProps = {
  children: React.ReactNode;
  className?: string;
  id: 1 | 2 | 3;
};

const Blob = ({ children, id, className = "" }: BlobProps) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      <BlobBackdrop id={id} />
    </div>
  );
};

export default Blob;
