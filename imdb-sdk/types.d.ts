export interface MovieData {
    "#TITLE": string;
    "#YEAR": number;
    "#IMDB_ID": string;
    "#RANK": number;
    "#ACTORS": string;
    "#AKA": string;
    "#IMDB_URL": string;
    "#IMDB_IV": string;
    "#IMG_POSTER": string;
    "photo_width": number;
    "photo_height": number;
}
export interface ResponseData {
    ok: boolean;
    description: MovieData[];
    error_code: number;
}
export declare class IMDB {
    static getRandomMovie(query: string): Promise<ResponseData | undefined>;
    static searchMovies(query: string): Promise<ResponseData | undefined>;
    static getMovieDetails(id: string): Promise<ResponseData | undefined>;
}
