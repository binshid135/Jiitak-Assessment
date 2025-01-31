"use client";
import { usePathname } from 'next/navigation'
import { useRouter } from "next/navigation";


export default function Sidebar() {
    const router = useRouter();


    const pathname = usePathname()
    const isActive = (path: string) => pathname === path;

    const handleDashboard = () => {
        router.push('/dashboard');
    }

    const handleUsers = () => {
        router.push('/users');
    }

    return (
        <aside style={{ borderColor: "rgb(245, 240, 233)", color: "rgb(103, 101, 98)" }}
            className="bg-white border-r w-64 h-screen fixed left-0 top-0">
            <div className='p-4'>
                <img src="/text.svg"></img>
            </div>

            <nav className="mt-3">
                <ul className="space-y-3">
                    <li className={`flex side-items items-center px-5 py-2 ${isActive('/dashboard') ? 'active-link' : ''}`} onClick={handleDashboard}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V9.16667C2.5 9.6269 2.8731 10 3.33333 10H7.5C7.96024 10 8.33333 9.6269 8.33333 9.16667V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.667 2.5H12.5003C12.0401 2.5 11.667 2.8731 11.667 3.33333V5.83333C11.667 6.29357 12.0401 6.66667 12.5003 6.66667H16.667C17.1272 6.66667 17.5003 6.29357 17.5003 5.83333V3.33333C17.5003 2.8731 17.1272 2.5 16.667 2.5Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.667 10H12.5003C12.0401 10 11.667 10.3731 11.667 10.8333V16.6667C11.667 17.1269 12.0401 17.5 12.5003 17.5H16.667C17.1272 17.5 17.5003 17.1269 17.5003 16.6667V10.8333C17.5003 10.3731 17.1272 10 16.667 10Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.5 13.3335H3.33333C2.8731 13.3335 2.5 13.7066 2.5 14.1668V16.6668C2.5 17.1271 2.8731 17.5002 3.33333 17.5002H7.5C7.96024 17.5002 8.33333 17.1271 8.33333 16.6668V14.1668C8.33333 13.7066 7.96024 13.3335 7.5 13.3335Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <a href="/dashboard" className="block p-2 rounded sidebar-text">
                            ダッシュボード
                        </a>
                    </li>
                    <li className={`flex side-items items-center px-5 py-2 ${isActive('/users') ? 'active-link' : ''}`} onClick={handleUsers} >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0003 17.5002C15.0003 15.7321 14.2979 14.0364 13.0477 12.7861C11.7975 11.5359 10.1018 10.8335 8.33366 10.8335C6.56555 10.8335 4.86986 11.5359 3.61961 12.7861C2.36937 14.0364 1.66699 15.7321 1.66699 17.5002" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.33366 10.8333C10.6348 10.8333 12.5003 8.96785 12.5003 6.66667C12.5003 4.36548 10.6348 2.5 8.33366 2.5C6.03247 2.5 4.16699 4.36548 4.16699 6.66667C4.16699 8.96785 6.03247 10.8333 8.33366 10.8333Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18.3333 16.6668C18.3333 13.8585 16.6667 11.2502 15 10.0002C15.5478 9.58914 15.9859 9.0494 16.2755 8.42872C16.565 7.80804 16.6971 7.12555 16.66 6.44166C16.6229 5.75777 16.4178 5.09357 16.0629 4.50783C15.7079 3.92209 15.2141 3.43288 14.625 3.0835" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <a href="/users" className="block p-2  rounded sidebar-text">
                            登録ユーザー
                        </a>
                    </li>
                    <li className="flex side-items items-center px-5 py-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 4.0625V6.25M10 4.0625C10 3.62985 10.1283 3.20692 10.3687 2.84719C10.609 2.48746 10.9507 2.20708 11.3504 2.04151C11.7501 1.87595 12.1899 1.83263 12.6143 1.91703C13.0386 2.00144 13.4284 2.20978 13.7343 2.51571C14.0402 2.82163 14.2486 3.21141 14.333 3.63574C14.4174 4.06007 14.3741 4.49991 14.2085 4.89962C14.0429 5.29933 13.7625 5.64098 13.4028 5.88134C13.0431 6.12171 12.6201 6.25 12.1875 6.25H10M10 4.0625C10 3.62985 9.87171 3.20692 9.63134 2.84719C9.39098 2.48746 9.04933 2.20708 8.64962 2.04151C8.24991 1.87595 7.81007 1.83263 7.38574 1.91703C6.96141 2.00144 6.57163 2.20978 6.26571 2.51571C5.95978 2.82163 5.75144 3.21141 5.66703 3.63574C5.58263 4.06007 5.62595 4.49991 5.79151 4.89962C5.95708 5.29933 6.23746 5.64098 6.59719 5.88134C6.95692 6.12171 7.37985 6.25 7.8125 6.25H10" stroke="currentColor" strokeWidth="1.67" strokeMiterlimit="10" strokeLinecap="round" />
                            <path d="M16.25 6.25H3.75C3.05964 6.25 2.5 6.80964 2.5 7.5V9.375C2.5 10.0654 3.05964 10.625 3.75 10.625H16.25C16.9404 10.625 17.5 10.0654 17.5 9.375V7.5C17.5 6.80964 16.9404 6.25 16.25 6.25Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.25 10.625V16.25C16.25 16.7473 16.0525 17.2242 15.7008 17.5758C15.3492 17.9275 14.8723 18.125 14.375 18.125H5.625C5.12772 18.125 4.65081 17.9275 4.29917 17.5758C3.94754 17.2242 3.75 16.7473 3.75 16.25V10.625M10 6.25V18.125" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <a className="block p-2 rounded sidebar-text">
                            当選者
                        </a>
                    </li>
                    <li className="flex side-items items-center px-5 py-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.8333 17.5002C14.8333 15.7321 14.131 14.0364 12.8807 12.7861C11.6305 11.5359 9.93478 10.8335 8.16667 10.8335C6.39856 10.8335 4.70286 11.5359 3.45262 12.7861C2.20238 14.0364 1.5 15.7321 1.5 17.5002" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.16667 10.8333C10.4679 10.8333 12.3333 8.96785 12.3333 6.66667C12.3333 4.36548 10.4679 2.5 8.16667 2.5C5.86548 2.5 4 4.36548 4 6.66667C4 8.96785 5.86548 10.8333 8.16667 10.8333Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.23398 13.5H7.43398M9.23398 13.5L9.57058 11.7896C9.60061 11.6994 9.6088 11.6035 9.59447 11.5095C9.58014 11.4156 9.5437 11.3264 9.48817 11.2493C9.43263 11.1722 9.35957 11.1094 9.27501 11.0661C9.19045 11.0227 9.0968 11.0001 9.00178 11H7.66618C7.57116 11.0001 7.47752 11.0227 7.39296 11.0661C7.3084 11.1094 7.23534 11.1722 7.1798 11.2493C7.12426 11.3264 7.08783 11.4156 7.0735 11.5095C7.05917 11.6035 7.06736 11.6994 7.09738 11.7896L7.43398 13.5M9.23398 13.5L9.83398 17.3L8.33398 18.8L6.83398 17.3L7.43398 13.5" stroke="currentColor" strokeWidth="1.50021" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <a className="block p-2 rounded sidebar-text">
                            運営管理者
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
