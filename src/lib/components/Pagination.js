import React from 'react';
import PaginationBar from './PaginationBar';
import SelectPagination from './SelectPagination';


const Pagination = (props) => {

    const {
        rmtHeaders,
        handleSelectitem,
        paginateSelection,
        defaultSelection,
        totalrecords
    } = props

    let pages;
    if (paginateSelection) {
        pages = paginateSelection
    } else {
        pages = [5, 10, 15, 20]
    }
    return <tr >
        <td colSpan={rmtHeaders.length + 2}>
            <div >
                <div className="fl">
                    <SelectPagination
                        pages={pages}
                        defaultSelection={defaultSelection}
                        handleSelectitem={handleSelectitem}
                        totalrecords={totalrecords}
                    />
                </div>
                <div className="fr">
                    <PaginationBar />
                </div>
            </div>

        </td>
    </tr>
}

export default Pagination;

