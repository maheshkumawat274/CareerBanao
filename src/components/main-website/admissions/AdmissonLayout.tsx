import { Link } from "react-router-dom"
import CardSkeleton from "ui/CardSkeleton"
import { useDispatch, useSelector } from "react-redux"
import no_data_found from "../../../assets/no_data.gif"
import { setDefault, setGovernment, setPrivate } from "../../../redux/admissionCategorySlice"
import defaultLogo from "../../../assets/defaultCardLogo.jpeg";
import { useState } from "react"



const governBtn = "rounded-3xl text-sm py-[7px] px-[12px] "
const privateBtn = "rounded-[1.76rem] text-sm py-[7px] px-[12px] "

type AdmissionLayoutType = {
    data: AdmissionEngineeringDataType[];
    loading: boolean;
    category: string;

}


function AdmissonLayout({ data, loading, category }: AdmissionLayoutType) {
    const dispatch = useDispatch();
    const [displayCount, setDisplayCount] = useState(10);
    const filterCategory = useSelector((state: any) => state.admissionCategory);
    let filterData = filterCategory.data
    const handleLoadMore = () => {
        setDisplayCount(displayCount + 10); // Increase the number of records to display by 10
    };

    if (filterCategory.private) {
        if (filterCategory.data) {
            filterData = filterData?.filter((item: any) => {
                return item.college_category == "Private"
            })
            data = filterData
        }
    }
    if (filterCategory.government) {
        if (filterCategory.data) {
            filterData = filterData?.filter((item: any) => {
                return item.college_category == "Government"
            })
            data = filterData
        }
    }

    return (
        <div className="admissonLayout relative font-popins">
            <div className="layout-container min-h-[450px] w-full px-4 py-8 flex flex-col lg:flex-row gap-20 relative top-[80px] bg-[#edede9] ">
                <div className="layout-container-left w-full lg:w-[22%] flex flex-col gap-5">
                    <div className="flex justify-between bg-white p-[1rem] text-sm">
                        <div>CATEGORY</div>
                        <div onClick={() => { dispatch(setDefault()) }} className="underline cursor-pointer">DEFAULT</div>
                    </div>

                    <div className="flex gap-4 lg:flex-col">
                        <div><button onClick={() => { dispatch(setGovernment()) }} className={filterCategory.government ? governBtn + " bg-white text-hoverBtn" : governBtn + " bg-primaryBtn text-white"}>GOVERNMENT</button></div>
                        <div><button onClick={() => { dispatch(setPrivate()) }} className={filterCategory.private ? privateBtn + " bg-white text-hoverBtn" : privateBtn + " bg-primaryBtn text-white"}>PRIVATE</button></div>
                    </div>
                </div>
                <div className="layout-container-right pb-5 flex flex-col gap-5 w-full min-h-[50vh] lg:w-[78%]">
                    {loading ? <CardSkeleton /> : data?.length > 0 ? <>
                        {
                            data.filter((item) => item.hide_record == "0" && item.delete_status != "1")
                                .slice(0, displayCount)
                                .map((item) => {
                                    return (
                                        <ExamCard data={item} category={category} key={item.id} />
                                    );
                                })}
                    </> : <img src={no_data_found} className="w-full h-[50%] object-contain mix-blend-multiply" />
                    }
                    {
                        displayCount < data?.filter((item)=> item.hide_record == "0" && item.delete_status != "1").length && (
                            <div className="flex justify-center mt-4">
                                <button onClick={handleLoadMore} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                                    Load More
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )



}

export default AdmissonLayout

type ExamCardType = {
    data: AdmissionEngineeringDataType;
    category: string
}
function ExamCard({ data, category }: ExamCardType) {
    // const dispatch = useDispatch()
    let collegeLogo = data.college_logo;
  

    return (
        <div className="exam-card w-full flex gap-[3%] bg-white p-[1rem]">
            <div className="exam-img w-[20%] lg:w-[10%] flex justify-center items-start">
                <div className="lg:w-[60px] w-[50px] h-[60px] rounded-full flex justify-center items-center">
                    <img src={collegeLogo.match(/\.(jpeg|jpg|gif|png)$/) != null ? collegeLogo : defaultLogo} className="w-full h-full rounded-full" alt="college logo" />
                </div>
            </div>
            <div className="exam-name flex flex-col lg:flex-row w-[85%]">
                <div className="w-full lg:w-[70%]">
                    <p className="text-[16px]">{data.college_name}</p>
                    <p className="text-[12px] text-[#808080] line-clamp-3 pr-3">{data.college_address}</p>
                    <p className="text-[#808080] text-sm mt-5">{data.Last_date}</p>
                </div>
                <div className="exam-apply w-full lg:w-[30%] lg:flex lg:items-end mt-2">
                    <Link to={`/admissions/${category}/apply/${data.college_name}`}><button className="px-10 rounded-3xl py-2 lg:py-3 bg-primaryBtn hover:bg-hoverBtn text-white lg:font-semibold">APPLY NOW</button></Link>
                </div>
            </div>
        </div>
    );
}
