import styles from './Text.module.scss';
import clsx from 'clsx';

type TextProps = {
    as?: 'p' | 'span';
    fontFamily?: 'Inter' | 'Cormorant Garamond';
    size?: 'body' | 'small';
    italic?: boolean;
    transform?: 'none' | 'uppercase' | 'lowercase';
    children?: string | string[] | number;
} & React.ComponentPropsWithoutRef<'p'>;

function Text({as = 'p', fontFamily = 'Inter', size = 'body', italic = false, transform = 'none', children}: TextProps) {
    const Tag = as;
    const fontFam = fontFamily.replace(' ', '_').toLowerCase();

    return (
        <Tag className={clsx(styles.base, styles[`ff__${fontFam}`], styles[`fsz__${size}`], italic && styles.fs__italic, styles[`tr__${transform}`])}>
            {children}
        </Tag>
    );
}

export default Text;