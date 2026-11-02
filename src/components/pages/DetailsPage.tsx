import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Text from '../elements/Text/Text';
import type { Work } from '../../types/Work';
import Section from '../elements/Section/Section';
import Heading from '../elements/Heading/Heading';

function DetailsPage() {
    const { id } = useParams();
    const { data, loading, error } = useFetch<Work>(`http://localhost:8080/api/books/olid/${id}`);

    if (loading) {return <Text as="p">Loading...</Text>;}
    if (error) {return <Text as='p'>Something went wrong.</Text>;}
    if (!data) {return <Text as="p">No data was found.</Text>;}

    return (
        <Section>
            <Heading as="h1" size="display-large">{data.title ?? 'No title found'}</Heading>
            <Text as="p">{data.description ?? 'No description found'}</Text>
        </Section>
    );
}

export default DetailsPage;