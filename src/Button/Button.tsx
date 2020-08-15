import React, { FC } from 'react';
import cx from 'classnames';
import styles from './button.module.scss'

interface ButtonProps {
    children?: React.ReactNode
    disabled?: boolean
    className?: string
    variant?: 'glass' | 'solid'
    loading?: boolean
    icon?: React.ReactNode
    color?:  'primary' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'black'
}

export const Button: FC<ButtonProps> = (({variant = 'glass', color = 'black', children = 'Button', icon, loading, disabled, className = ''}: ButtonProps) => {
    return (
        <button
            className={cx(styles.button, className, {
                [styles['icon-only']]: icon && !children,
                [styles[`${variant}-${color}`]]: true,
            })}
            disabled={loading || disabled}
        >
            {icon}{children}
        </button>
    )
})

export default Button;