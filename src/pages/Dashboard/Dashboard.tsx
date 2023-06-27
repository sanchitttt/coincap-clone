import CurrencyTable from "./CurrencyTable/CurrencyTable";
import mockData from '../../assets/MockData.json';
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { Pagination } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { SyncLoader } from "react-spinners";

const pageItemsLength = 50
const initialVisibleData = mockData.slice(0, 50)

const getCurrenciesData = () => {
    return axios.get('https://api.coincap.io/v2/assets')
}

function Dashboard() {
    const [currentPage, setCurrentPage] = useState(1);
    const [visibleData, setVisibleData] = useState(initialVisibleData);
    const { data } = useQuery({
        queryKey: "coincap-data",
        queryFn: getCurrenciesData
    })

    const handlePageChange = (_e: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value)
        const newArr = mockData.slice((value - 1) * 50, (value) * 50);
        setVisibleData(newArr)
    }


    if (data) {
        return (
            <div className='flex justify-center'>
                <div className='flex items-center justify-center flex-col'>
                    <Navbar />
                    <div className='tablet:mt-[-50px] mobile:mt-[0px] z-[1000] w-[100%] flex-col gap-[30px] flex items-center justify-center'>
                        <CurrencyTable data={visibleData} />
                        <Pagination page={currentPage} color='primary' count={Math.ceil(mockData.length) / pageItemsLength}
                            onChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
    return <div className='absolute left-[50%] top-[50%]' style={{transform:'translate(-50%,-50%)'}}>
        <SyncLoader color="#36d7b7" />
    </div>



}

export default Dashboard