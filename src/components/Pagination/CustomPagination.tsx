import React, {FC, PropsWithChildren} from "react";

import {Pagination} from "react-bootstrap";
import {IPagination} from "../../interfaces/paginationInterface";

interface IProps extends PropsWithChildren {
    paginationProps:IPagination
}

const CustomPagination: FC<IProps> = ({ paginationProps: { onPageClick, currentPage, totalPages } }) => {
    const handlePrevClick = () => onPageClick(Math.max(currentPage - 1, 1));
    const handleNextClick = () => onPageClick(Math.min(currentPage + 1, totalPages));

    const renderPageButtons = () => {
        const range = Array.from({ length: Math.min(7, totalPages) }, (_, index) => index + 1)
            .map(page => currentPage - 2 + page)
            .filter(page => page > 0 && page <= totalPages);

        return range.map(page => (
            <Pagination.Item  key={page} active={page === currentPage} onClick={() => onPageClick(page)}>
                {page}
            </Pagination.Item>
        ));
    };

    return (
        <Pagination>
            <Pagination.Prev onClick={handlePrevClick} disabled={currentPage <= 1} />
            {renderPageButtons()}
            <Pagination.Next onClick={handleNextClick} disabled={currentPage >= totalPages} />
        </Pagination>
    );
};

export {CustomPagination}

