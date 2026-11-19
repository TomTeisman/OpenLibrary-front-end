import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import type { Book } from '../../types/Book';

import Text from '../elements/Text/Text';
import Section from '../elements/Section/Section';
import Heading from '../elements/Heading/Heading';

function SearchPage() {
    const [search, setSearch] = useState('');
    const [warning, setWarning] = useState('');
    const { data, loading, error, refetch } = useFetch<Book[]>(`http://localhost:8080/api/books?search=${search}`, false);

    const updateQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value || '');
        setWarning(event?.target.value ? '' : 'No search query, start typing...');
    };

    const fetchBook = () => {
        if (search.length == 0) {
            setWarning('No search query, start typing...');
            return;
        }

        refetch();
    };

    return (
        <Section>
            <Heading as="h1" size="display-large">Expand collection</Heading>
            <span style={{color: 'red'}}>{warning || error?.message}</span>
            <br />
            <input name="bookName" type="text" value={search} onChange={updateQuery}></input>
            <button onClick={fetchBook}>Get Book</button>

            <br />
            <br />

            {loading ? <Text as="p" italic>{'Loading...'}</Text> :
                <>
                    {data && <Text as={"p"}>{data?.length} books found</Text>}

                    <br />

                    {data && data.map((d) => (
                        d && <>
                            <Link key={d.olid} to={`/books/${d.olid}`}>{d.title}</Link>
                            <br/>
                        </>
                    ))}
                </>
            }
        </Section>
    );
}

export default SearchPage;