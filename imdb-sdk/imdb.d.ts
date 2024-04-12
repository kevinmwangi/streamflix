import { ResponseData } from "./types";
export declare class IMDB {
    /**
     * @param {string} query
     * @return {Promise<ResponseData | undefined>}
     */
    static getRandomMovie(query: string): Promise<ResponseData | undefined>;
    /**
     * @param {string} query
     * @return {Promise<ResponseData | undefined>}
     */
    static searchMovies(query: string): Promise<ResponseData | undefined>;
    /**
     * @param {string} id
     * @return {Promise<ResponseData | undefined>}
     */
    static getMovieDetails(id: string): Promise<ResponseData | undefined>;
}
