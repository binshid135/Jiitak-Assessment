"use client"
import CustomButton from '@/app/components/CustomButton'
import InputFields from '@/app/components/InputFields'
import TopBar from '@/app/components/TopBar'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import bcrypt from 'bcryptjs';



const page = () => {
  const router = useRouter();
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    localStorage.setItem('adminPassword', hashedPassword);
    router.push('/auths/login');
  };


  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1 flex-col justify-center items-center space-y-4 w-[400px] mx-auto">
        <h1 className="text-black set-heading">パスワード再設定</h1>
        <form onSubmit={handleSubmit}>
          <InputFields label="新しいパスワード" value={password} onChange={(e) => setPassword(e.target.value)} undertext="半角大文字・小文字・数字を含めた8文字以上20文字以内" type="password" />
          <InputFields label="新しいパスワード確認用" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" />
          <CustomButton title="設定" />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default page;
