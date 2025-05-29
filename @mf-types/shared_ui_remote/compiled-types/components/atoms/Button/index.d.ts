interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
declare const Button: ({ children, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
