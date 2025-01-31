"use client";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TooltipItem,
    ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface DataItem {
    ageGroup: string;
    男性: number;
    女性: number;
    その他: number;
    回答なし: number;
}

const ageGroups = [
    "10代未満", "10代", "20代", "30代", "40代",
    "50代", "60代", "70代", "80代", "90代以上"
];

const monthNames = [
    "1月", "2月", "3月", "4月", "5月", "6月",
    "7月", "8月", "9月", "10月", "11月", "12月"
];

const monthlyData: { [key: string]: DataItem[] } = {
    "1月": [
        { ageGroup: "10歳未満", 男性: 200, 女性: 180, その他: 80, 回答なし: 30 },
        { ageGroup: "10代", 男性: 250, 女性: 230, その他: 120, 回答なし: 40 },
        { ageGroup: "20代", 男性: 400, 女性: 350, その他: 150, 回答なし: 50 },
        { ageGroup: "30代", 男性: 500, 女性: 450, その他: 200, 回答なし: 100 },
        { ageGroup: "40代", 男性: 300, 女性: 250, その他: 100, 回答なし: 30 },
        { ageGroup: "50代", 男性: 250, 女性: 220, その他: 120, 回答なし: 70 },
        { ageGroup: "60代", 男性: 180, 女性: 160, その他: 90, 回答なし: 40 },
        { ageGroup: "70代", 男性: 120, 女性: 110, その他: 60, 回答なし: 20 },
        { ageGroup: "80代", 男性: 90, 女性: 80, その他: 40, 回答なし: 10 },
        { ageGroup: "90歳以上", 男性: 50, 女性: 40, その他: 20, 回答なし: 5 },
    ],
    "2月": [
        { ageGroup: "10歳未満", 男性: 220, 女性: 190, その他: 85, 回答なし: 35 },
        { ageGroup: "10代", 男性: 260, 女性: 240, その他: 130, 回答なし: 45 },
        { ageGroup: "20代", 男性: 420, 女性: 370, その他: 160, 回答なし: 60 },
        { ageGroup: "30代", 男性: 510, 女性: 470, その他: 210, 回答なし: 110 },
        { ageGroup: "40代", 男性: 310, 女性: 270, その他: 110, 回答なし: 40 },
        { ageGroup: "50代", 男性: 260, 女性: 240, その他: 130, 回答なし: 80 },
        { ageGroup: "60代", 男性: 190, 女性: 170, その他: 100, 回答なし: 50 },
        { ageGroup: "70代", 男性: 130, 女性: 120, その他: 70, 回答なし: 30 },
        { ageGroup: "80代", 男性: 100, 女性: 90, その他: 50, 回答なし: 15 },
        { ageGroup: "90歳以上", 男性: 60, 女性: 50, その他: 30, 回答なし: 8 },
    ],
};


monthNames.forEach((month) => {
    if (!monthlyData[month]) {
        monthlyData[month] = ageGroups.map((ageGroup) => ({
            ageGroup,
            男性: 0,
            女性: 0,
            その他: 0,
            回答なし: 0,
        }));
    }
});

const CustomBarChart = () => {
    const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);

    const handlePrevMonth = () => {
        setSelectedMonthIndex((prev) => (prev === 0 ? 11 : prev - 1));
    };

    const handleNextMonth = () => {
        setSelectedMonthIndex((prev) => (prev === 11 ? 0 : prev + 1));
    };

    const selectedMonth = monthNames[selectedMonthIndex];
    const data = monthlyData[selectedMonth];

    const chartData = {
        labels: data.map((item) => item.ageGroup),
        datasets: [
            {
                label: "男性",
                data: data.map((item) => item.男性),
                backgroundColor: "rgb(255, 149, 0)",
                stack: "a",
            },
            {
                label: "女性",
                data: data.map((item) => item.女性),
                backgroundColor: "rgb(255, 184, 84)",
                stack: "a",
            },
            {
                label: "その他",
                data: data.map((item) => item.その他),
                backgroundColor: "rgb(255, 206, 138)",
                stack: "a",
            },
            {
                label: "回答なし",
                data: data.map((item) => item.回答なし),
                backgroundColor: "rgb(255, 222, 176)",
                stack: "a",
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
                align: "start",
                labels: {
                    usePointStyle: true,
                    pointStyle: "rect",
                    color: "rgb(100, 100, 100)",
                },

            },
            tooltip: {
                callbacks: {
                    label: (context: TooltipItem<'bar'>) => {
                        const value = context.raw;
                        return `${value}人`;
                    },
                },
                backgroundColor: 'white', 
                bodyColor: 'black', 
                titleColor: 'black', 
                borderColor: '#ccc',
                borderWidth: 1, 
                padding: 5, 
                caretSize: 10, 
                caretPadding: 10, 
                position: 'nearest', 
                xAlign: 'center', 
                yAlign: 'bottom',
                titleFont: {
                    size: 0,
                  },
                
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    maxRotation: 0,
                    minRotation: 0,
                    autoSkip: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)",
                    drawTicks: false,
                },
                ticks: {
                    stepSize: 100,
                    padding: 5,
                },
                min: 0,
                max: 1000,
                border: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className=" bg-white shadow-md rounded-lg">
            <div className="flex justify-between border-b mb-2">
                <h2 className="bar-head px-3 pt-3">性別・年代比</h2>

                <div className="px-3 pt-3 mb-4 flex items-center">
                    <p>2024年</p>
                    <button className="mx-2" onClick={handlePrevMonth}>
                        <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.272727 3.9727C-0.0909091 3.76276 -0.0909089 3.23789 0.272727 3.02795L5.18182 0.193682C5.54546 -0.0162634 6 0.246169 6 0.66606L6 6.33459C6 6.75448 5.54545 7.01691 5.18182 6.80697L0.272727 3.9727Z" fill="#291C0A" />
                        </svg>
                    </button>
                    <p>{selectedMonth}</p>
                    <button className="mx-2" onClick={handleNextMonth}>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.72727 7.02779C10.0909 7.23773 10.0909 7.76259 9.72727 7.97254L4.81818 10.8068C4.45454 11.0168 4 10.7543 4 10.3344L4 4.6659C4 4.24601 4.45455 3.98357 4.81818 4.19352L9.72727 7.02779Z" fill="#291C0A" />
                        </svg>
                    </button>
                </div>
            </div>

            <div style={{ height: 320 }} className="p-3">
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

export default CustomBarChart;
