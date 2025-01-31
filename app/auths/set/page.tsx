"use client"
import CustomButton from '@/app/components/CustomButton'
import InputFields from '@/app/components/InputFields'
import TopBar from '@/app/components/TopBar'
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import bcrypt from 'bcryptjs';

const Page = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');
  const router = useRouter();

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    return regex.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!password) {
      setPasswordError('Password cannot be empty');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be 8-20 characters and include uppercase, lowercase, and a number.');
      return;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password cannot be empty');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
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
        <h1 className="text-black set-heading">パスワード設定</h1>
        <p className="text-black set-subheading">
          パスワードを入力後 [設定ボタン] を押してサービスの利用を開始してください。
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <InputFields
            label="パスワード"
            value={password}
            undertext="半角大文字・小文字・数字を含めた8文字以上20文字以内"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            error={!!passwordError}
          />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          
          <InputFields
            label="パスワード確認用"
            value={confirmPassword}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!passwordError}
            
          />
          {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <CustomButton title="設定" />
        </form>
      </div>
    </div>
  );
}

export default Page;
