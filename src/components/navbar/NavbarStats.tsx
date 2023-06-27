const navbarData = [
    { title: 'Market Cap', value: '$1.07T' },
    { title: 'Exchange Vol', value: '$10.42B' },
    { title: 'Assets', value: '2,296' },
    { title: 'Exchanges', value: '73' },
    { title: 'Markets', value: '11,370' },
    { title: 'BTC DOM Index', value: '48.1%' },
]

function NavbarStats() {
    return (
        <>
            <div className='w-[100vw] h-[60px] flex items-center justify-between mobile:flex tablet:hidden' style={{ background: 'linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255)' }}>
                <div className='text-[14px] text-[#fff] ml-[10px]'>Market Snapshot</div>
            </div>
            <div className='w-[100vw] h-[200px] flex items-center justify-center mobile:hidden tablet:flex' style={{ background: 'linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255)' }}>
                <div className='flex justify-around max-w-[1150px] w-[100%] flex-wrap'>
                    {navbarData.map((item) => {
                        return <div key={item.title} className='flex flex-col items-center'>
                            <div className='text-[14px] text-[#fff] font-bold uppercase'>{item.title}</div>
                            <div className='text-[21px] font-bold text-[#fff]'>{item.value}</div>
                        </div>
                    })}
                </div>

            </div>
        </>
    )
}

export default NavbarStats;