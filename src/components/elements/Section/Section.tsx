import type { ReactElement } from 'react';

type SectionProps = {
    children: ReactElement[];
}

function Section({children}: SectionProps) {
    return (
        <section>
            {children}
        </section>
    );
}

export default Section;