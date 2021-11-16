export interface BasicResponse {
    status: 'success' | 'warning' | 'error';
    message?: string;
}
