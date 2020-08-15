/// <reference types="react" />
interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'glass' | 'solid';
    loading?: boolean;
    icon?: React.ReactNode;
    color?: 'primary' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'black';
}
