import type { Book } from './Book';

export type SearchResponse = {
    docs: Book[];
    numFound: string;
}