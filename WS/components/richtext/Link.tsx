import NextLink from "next/link";

type LinkProps = {
  href: string;
  target: "_self" | "_blank" | null;
  linktype: "url" | "story" | "asset" | "email";
  children: React.ReactNode;
};

const Link = ({ href, target, linktype, children }: LinkProps) => {
  if (linktype !== "url") {
    return null;
  }
  return (
    <NextLink href={href} target={target || undefined} legacyBehavior>
      <a className="text-primary underline hover:text-primary-light">
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
