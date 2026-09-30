type TextProps = {
    as?: 'p' | 'span';
    children: any;
}

function Text({as = 'p', children}: TextProps) {
    const Tag = as;

    return (
        <Tag>
            {children}
        </Tag>
    );
}

export default Text;