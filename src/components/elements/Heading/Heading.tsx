import clsx from 'clsx';
import styles from './Heading.module.scss';

type HeadingProps = {
    as?: 'h1' | 'h2' | 'h3';
    size?: 'display-large' | 'display-medium' | 'display-small';
    weight?: 'regular' | 'semi-bold';
    fontFamily?: 'Inter' | 'Cormorant Garamond';
    children: string;
}

function Heading({ as = 'h3', size = 'display-small', weight = 'semi-bold', fontFamily = 'Cormorant Garamond', children }: HeadingProps) {
    const Comp = as;
    const fontFam = fontFamily.replace(' ', '_').toLowerCase();
    
    return (
        <Comp className={clsx(styles.base, styles[`fs__${size}`], styles[`fw__${weight}`], styles[`ff__${fontFam}`])}>
            {children}
        </Comp>
    );
}

export default Heading;