export interface IPagination {
    currentPage: number;
    totalPages: number;
    onPageClick: (page: number) => void;
}