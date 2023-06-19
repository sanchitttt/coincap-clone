import CurrencyTable from "./CurrencyTable/CurrencyTable";
import mockData from '../../assets/MockData.json';
import Navbar from "../../components/navbar/Navbar";

function Dashboard() {
    return (
        <div className='flex justify-center'>
            <div className='flex items-center justify-center flex-col'>
                <Navbar />
                <div className='mt-[-50px] z-[1000] w-[100%] flex items-center justify-center'>
                    <CurrencyTable data={mockData} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard