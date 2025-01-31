"use client";
import { useRouter } from "next/navigation";


export default function Header() {

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('adminPassword');
    router.push('/auths/login');
  };

    return (
        <header className="bg-white text-black p-4 w-full border-b flex justify-end" style={{ borderColor: "rgb(245, 240, 233)" }}>
            <img src="/My profile.svg" title="log out" className="cursor-pointer" onClick={handleLogout}></img>
        </header>
    );
}
