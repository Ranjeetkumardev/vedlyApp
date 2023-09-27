import _ from "lodash"

// Paginate the data -> in fature we paginate data from the server
export function Paginate(items ,PageNumber ,PageSize){
    const startIndex = (PageNumber - 1) * PageSize;
    return _(items).slice(startIndex).take(PageSize).value();
}