"use client";
import CustomButton from "@/app/components/CustomButton";
import InputFields from "@/app/components/InputFields";
import TopBar from "@/app/components/TopBar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from 'bcryptjs';


const Page = () => {
  const router = useRouter();
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const hashedPassword = localStorage.getItem('adminPassword') || '';
    if (bcrypt.compareSync(password, hashedPassword)) {
      router.push('/dashboard');
    } else {
      setError('Invalid password');
      setLoading(false);
    }
    setLoading(false)
  };


  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1 flex-col justify-center items-center space-y-4 w-[400px] mx-auto">
        <h1 className="text-black set-heading">ログイン</h1>

        <form onSubmit={handleSubmit}>
          <InputFields
            label="メールアドレス"
          />
          <InputFields
            label="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <CustomButton title="ログイン" loading={loading} />
        </form>

        <button
          className="forgot-password"
          onClick={() => router.push("/auths/change")}
        >
          パスワードをお忘れの場合
        </button>
      </div>
    </div>
  );
};

export default Page;
