"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMDB = void 0;
const axios_1 = __importDefault(require("axios"));
const SEARCH_API = 'https://search.imdbot.workers.dev/';
class IMDB {
    /**
     * @param {string} query
     * @return {Promise<ResponseData | undefined>}
     */
    static getRandomMovie(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`${SEARCH_API}`, { params: { q: query } });
            return response.data;
        });
    }
    /**
     * @param {string} query
     * @return {Promise<ResponseData | undefined>}
     */
    static searchMovies(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`${SEARCH_API}`, { params: { q: query } });
            return response.data;
        });
    }
    /**
     * @param {string} id
     * @return {Promise<ResponseData | undefined>}
     */
    static getMovieDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`${SEARCH_API}`, { params: { tt: id } });
            return response.data;
        });
    }
}
exports.IMDB = IMDB;
