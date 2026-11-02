import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Text from '../elements/Text/Text';
import type { Work } from '../../types/Work';
import Section from '../elements/Section/Section';

function DetailsPage() {
    const { id } = useParams();
    const { data, loading, error } = useFetch<Work>(`http://localhost:8080/api/books/olid/${id}`);

    if (loading) {return <Text as="p">Loading...</Text>;}
    if (error) {return <Text as='p'>Something went wrong.</Text>;}
    if (!data) {return <Text as="p">No data was found.</Text>;}

    return (
        <Section>
            <Text as="p">{data.title}</Text>
            <Text as="p">{data.description}</Text>
        </Section>
    );
}

export default DetailsPage;