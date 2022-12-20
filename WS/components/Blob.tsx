import BlobBackdrop from "./BlobBackdrop";

type BlobProps = {
  children: React.ReactNode;
  id: 1 | 2 | 3;
};

const Blob = ({ children, id }: BlobProps) => {
  return (
    <div className="relative max-w-xl lg:max-w-sm">
      {children}
      <BlobBackdrop id={id} />
    </div>
  );
};

export default Blob;
