import { routesApi } from '../routes/paths.routes';
import { api } from './api';
import { ReaponseSignIn } from '../utils/interfaces';

export function signIn(username: string, password: string): Promise<ReaponseSignIn> {    
    return api.post(routesApi.LOGIN, { username, password });
}