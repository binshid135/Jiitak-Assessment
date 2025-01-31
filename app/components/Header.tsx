"use client";
import { useRouter } from "next/navigation";
import Image from 'next/image';


export default function Header() {

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('adminPassword');
    router.push('/auths/login');
  };

  return (
    <header className="bg-white text-black p-4 w-full border-b flex justify-end" style={{ borderColor: "rgb(245, 240, 233)" }}>
      <Image
        src="/My profile.svg"
        alt="Profile"
        title="log out"
        className="cursor-pointer"
        onClick={handleLogout}
        width={30}  
        height={30} 
      />
    </header>
  );
}
