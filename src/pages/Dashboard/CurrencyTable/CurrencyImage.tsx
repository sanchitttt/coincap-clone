function CurrencyImage({ symbol }: { symbol: string }) {
    return (
        <img
            src={` https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png `}
            width='30px'
            height={'30px'}
            className='rounded-full mt-[10px]'
        />
    )
}

export default CurrencyImage