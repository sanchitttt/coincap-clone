import { CoinBaseLogo } from "../../assets/Icons"

function NavbarHeader() {
    return (
        <div className='w-[100vw] h-[55px] bg-[#fff] flex items-center justify-center'>
            <div className='max-w-[1150px] flex justify-between items-center'>
                <div className='flex gap-[20px]'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <CoinBaseLogo />
                <div className='flex gap-[25px]'>
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
                    <div>Search</div>
                    <div>Settings</div>
                </div>
            </div>
        </div>
    )
}

export default NavbarHeader