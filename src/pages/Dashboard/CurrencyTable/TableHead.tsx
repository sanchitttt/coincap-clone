import { TableHeadProps } from "../../../types/common"

function TableHead({ children, className }: TableHeadProps) {
    return (
        <th className={className + 'table-headings text-[11.7px] text-[#000000de] font-normal'}>
            {children}
        </th>
    )
}

export default TableHead