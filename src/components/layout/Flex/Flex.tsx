import clsx from 'clsx';
import styles from './Flex.module.scss';

type FlexProps = {
    display?: 'flex' | 'inline-flex';
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
    alignItems?: 'normal' | 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
    gap?: React.CSSProperties['gap'];
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>;

function Flex({
    display = 'flex', 
    direction = 'row',
    wrap = 'nowrap',
    justifyContent = 'flex-start',
    alignItems = 'normal',
    gap,
    className,
    children,
    ...props
    }: FlexProps) {
    return (
        <div className={clsx(
                styles.base,
                styles[`display-${display}`],
                styles[`direction-${direction}`],
                styles[`wrap-${wrap}`],
                styles[`justify-content-${justifyContent}`],
                styles[`align-items-${alignItems}`],
                className
            )}
            style={{gap}}
            {...props}
        >
            {children}
        </div>
    );
}

export default Flex;