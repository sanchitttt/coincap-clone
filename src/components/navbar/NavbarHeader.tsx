import { CoinBaseLogo, HamburgerIcon, SearchIcon, SettingsIcon } from "../../assets/Icons"


function NavbarHeader() {
    return (
        <>
            <div className='w-[100vw] h-[55px] bg-[#fff] flex items-center justify-between px-[10px] mobile:flex tablet:hidden'>
                <SearchIcon />
                <CoinBaseLogo />
                <HamburgerIcon />
            </div>
            <div className='w-[100vw] h-[55px] bg-[#fff] flex items-center justify-center mobile:hidden tablet:flex'>
                <div className='max-w-[1150px] flex justify-between items-center w-[100%] relative'>
                    <div className='flex gap-[20px]'>
                        <div>Coins</div>
                        <div>Exchanges</div>
                        <div>Swap</div>
                    </div>
                    <div className='absolute left-[50%] top-[50%]' style={{ transform: 'translate(-50%,-50%)' }}>
                        <CoinBaseLogo />
                    </div>
                    <div className='flex gap-[25px] items-center'>
                        <div>
                            <select name='currency'>
                                <option value={'USD'}>USD</option>
                            </select>
                        </div>
                        <div>
                            <select name='language'>
                                <option value={'English'}>English</option>
                            </select>
                        </div>
                        <SearchIcon />
                        <SettingsIcon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarHeader