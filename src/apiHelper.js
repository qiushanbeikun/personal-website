import { fetch } from 'whatwg-fetch';
import { API_ENDPOINT } from './environment';

export const getJson = (endpoint) => fetch(`${API_ENDPOINT}/${endpoint}`).then((res) => res.json());