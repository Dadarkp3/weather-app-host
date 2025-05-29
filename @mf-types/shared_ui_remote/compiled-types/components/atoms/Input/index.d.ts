interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    resetTrigger?: () => void;
}
declare const Input: ({ value, onChange, onKeyDown, placeholder, disabled, resetTrigger, }: InputProps) => import("react/jsx-runtime").JSX.Element;
export default Input;
