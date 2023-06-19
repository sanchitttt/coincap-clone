export interface CurrencyItemProps {
    id: string,
    rank: string,
    symbol: string,
    name: string,
    supply: string,
    maxSupply: string | null,
    volumeUsd24Hr: string,
    marketCapUsd: string,
    changePercent24Hr: string,
    vwap24Hr: string | null,
    explorer: string | null,
    priceUsd: string,
}

export interface TableHeadProps {
    children: React.ReactNode,
    className?: string
}

export interface CurrencyTableProps {
    data: CurrencyItem[]
}