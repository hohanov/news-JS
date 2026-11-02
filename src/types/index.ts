export interface ArticleSource {
    id: string | null;
    name: string;
}

export interface Article {
    source: ArticleSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}

export enum Endpoint {
    Sources = 'sources',
    Everything = 'everything',
}

export enum HttpStatus {
    Unauthorized = 401,
    NotFound = 404,
}

export type Callback<T> = (data: T) => void;

export type RequestOptions = Partial<Record<'apiKey' | 'sources', string>>;

export interface RequestParams {
    endpoint: Endpoint;
    options?: RequestOptions;
}
