interface CoinBaseLogo {
    width?: number,
    height?: number
}

export function CoinBaseLogo({ width = 80, height = 30 }: CoinBaseLogo) {
    return <img
        width={width}
        height={height}
        alt='CoinBase'
    />
}