import Heading from '../elements/Heading/Heading';
import Logo from '../elements/Logo/Logo';
import Section from '../elements/Section/Section';
import Text from '../elements/Text/Text';

function HomePage() {
    return (
        <Section>
            <Heading as={'h1'} size={'display-large'} weight={'semi-bold'}>This is a test for a heading 1</Heading>
            <Heading as={'h2'} size={'display-medium'} weight={'regular'}>This is a test for a heading 2</Heading>
            <Heading as={'h3'} size={'display-small'} weight={'regular'}>This is a test for a heading 3</Heading>
            <Text>This is a test for a paragraph</Text>
            <Text size="small">This is a test for a small text</Text>

            <Logo />
        </Section>
    );
}

export default HomePage;