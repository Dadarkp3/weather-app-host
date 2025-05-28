import React from "react";
interface Props {
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
}
declare const NavLink: ({ to, children, onClick }: Props) => import("react/jsx-runtime").JSX.Element;
export default NavLink;
