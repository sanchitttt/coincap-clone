
import { CurrencyItemProps } from "../../../types/common"
import Formatter from "../../../utils/CurrencyDashboard/Formatter";
import CurrencyImage from "./CurrencyImage";

const FormatterInstance = new Formatter();

function CurrencyItem({ data }: { data: CurrencyItemProps }) {
    if (!data) return null;
    const { id, rank, symbol, name, supply, volumeUsd24Hr, marketCapUsd, changePercent24Hr, vwap24Hr, explorer, priceUsd } = data;

    const formattedPrice = FormatterInstance.formatCurrency(priceUsd);
    const formattedSupply = FormatterInstance.formatUnit(supply);
    const formattedMarketCap = FormatterInstance.formatUnit(marketCapUsd);
    const formattedVWap24Hr = FormatterInstance.formatCurrency(vwap24Hr as string);
    const formattedVolume = FormatterInstance.formatUnit(volumeUsd24Hr);
    const formattedChange = FormatterInstance.formatChange(changePercent24Hr)
    return (<tr className='desktop:h-[57px]'>

        <td className='text-[14px] mobile:hidden tablet:table-cell'>{rank}</td>
        <td className='text-[14px] text-left desktop:px-[20px]'>

            {/* <CurrencyImage symbol={symbol} /> */}
            {/* {name} */}
            {/* {symbol} */}
            <div className='flex gap-[10px] items-center'>
                <CurrencyImage symbol={symbol} />
                <div className='flex flex-col'>
                    <div>{name}
                    </div>
                    <div className='text-[11.2px] font-normal'>{symbol}
                    </div>
                </div>

            </div>

        </td>
        <td className='text-[14px] mobile:text-right pr-[15px]'>{formattedPrice}</td>
        <td className='text-[14px] mobile:hidden tablet:table-cell'>{formattedMarketCap}</td>
        <td className='tablet:inline  text-[14px] mobile:hidden tablet:hidden desktop:table-cell'>{formattedVWap24Hr}</td>
        <td className='text-[14px] mobile:hidden tablet:table-cell desktop:table-cell'>{formattedSupply}</td>
        <td className='text-[14px] mobile:hidden tablet:hidden desktop:table-cell '>{formattedVolume}</td>
        <td className='text-[14px]'
            style={{ color: parseFloat(formattedChange) <= 0 ? '#f44366' : '#18C683' }}
        >{formattedChange}%</td>
    </tr>
    )
}

export default CurrencyItem