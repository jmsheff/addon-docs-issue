interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> {
    variant?: 'glass' | 'solid'
    loading?: boolean
    icon?: React.ReactNode
    color?:  'primary' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'black'
}