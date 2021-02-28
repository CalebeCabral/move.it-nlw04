import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default ({ href, children, ...props }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} ${props.activeClassName}`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};
