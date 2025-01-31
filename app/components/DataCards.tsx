
interface DataCardsProps {
    heading?: string,
    // date?: string,
    value?: string,
    unit?: string,
    undertext?: string,
    change?: string,
    isRed?: boolean;

}

const UpArrow = () => (
    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2060_2203)">
            <path d="M2.63379 3.70015L5.00044 1.3335L7.3671 3.70015" stroke="#13AF35" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 1.3335V9.66683" stroke="#13AF35" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_2060_2203">
                <rect width="10" height="10" fill="white" transform="translate(0 0.5)" />
            </clipPath>
        </defs>
    </svg>
);

const DownArrow = () => (
    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2060_2203)">
            <path d="M2.63379 7.29985L5.00044 9.6665L7.3671 7.29985" stroke="#E53E3E" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 9.6665V1.33317" stroke="#E53E3E" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_2060_2203">
                <rect width="10" height="10" fill="white" transform="translate(0 0.5)" />
            </clipPath>
        </defs>
    </svg>
);


const DataCards: React.FC<DataCardsProps> = ({ heading, value, unit, undertext, change, isRed }) => {

    return (
        <div className=" text-black rounded-lg shadow-md bg-white w-full">
            <div className="border-b pb-4">
                <h1 className="p-2 card-head">
                    {heading}
                </h1>
                <p className="card-subhead p-2">2024年2月1日 - 2024年2月5日</p>
            </div>
            <div className="p-2">
                <h1 className="text-2xl font-semibold">{value}<span className="font-light text-sm pl-1">{unit}</span></h1>
                <div className="flex justify-between">
                    <p className="card-subhead">{undertext}</p>
                    <div
                        className={`rounded text-sm text-center items-center flex px-2 font-semibold 
                            ${isRed ? "text-red-500 bg-red-100" : "text-green-500 bg-green-100"}`}
                    >   {isRed ? <DownArrow /> : <UpArrow />}
                        {change}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DataCards;
