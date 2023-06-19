import { CurrencyTableProps } from "../../../types/common"
import TableHead from "./TableHead"
import mockData from '../../../assets/MockData.json';
import CurrencyItem from "./CurrencyItem";

function CurrencyTable({ data }: CurrencyTableProps) {
    return (
        <div className='shadow-v1  w-[100%] max-w-[1150px] z-[1000]'>
            <table className='w-[100%]'>
                <thead className='h-[44px] bg-[#fafafa]'>
                    <tr>
                        <TableHead className='mobile:hidden tablet:table-cell '>Rank</TableHead>
                        <TableHead className='text-left desktop:px-[20px] '>Name</TableHead>
                        <TableHead className='mobile:text-right pr-[15px] '>Price</TableHead>
                        <TableHead className='mobile:hidden tablet:table-cell '>Market Cap</TableHead>
                        <TableHead className='mobile:hidden tablet:hidden desktop:table-cell '>VWAP (24hr)</TableHead>
                        <TableHead className='mobile:hidden tablet:hidden desktop:table-cell '>Supply</TableHead>
                        <TableHead className='mobile:hidden tablet:table-cell desktop:table-cell '>Volumne (24Hr)</TableHead>
                        <TableHead className='table-cell'>Change (24Hr)</TableHead>
                    </tr>
                </thead>
                <tbody className=''>
                    {mockData.map((item, idx) => {
                        return <CurrencyItem key={idx} data={item} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CurrencyTable 