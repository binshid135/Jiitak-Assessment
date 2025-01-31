"use client"
import CustomButton from '@/app/components/CustomButton'
import InputFields from '@/app/components/InputFields'
import TopBar from '@/app/components/TopBar'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";


const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setMessage('パスワード再設定用URLを送信しました');
    setTimeout(() => {
      router.push('/auths/login');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1 flex-col justify-center items-center space-y-4 w-[400px] mx-auto">
        <h1 className="text-black set-heading">パスワード再設定</h1>
        <p className="text-black set-subheading">現在使っているメールアドレスを入力してください。?
          パスワード再設定用のURLをメールで送信いたします。</p>
        <form onSubmit={handleSubmit}>
          <InputFields label="メールアドレス" type="text" onChange={(e) => setEmail(e.target.value)} />
          <CustomButton title="パスワード再設定用URLを送信する" />
        </form>
        <button className='forgot-password' onClick={() => router.push('/auths/login')}>ログイン画面にもどる</button>
      </div>
      <footer className="py-4 flex justify-center">
        {message && (
          <div className='flex items-center bg-white rounded px-4 py-2 shadow-md w-[350px] justify-center'>
            <img src="/Success.svg" alt="Success" className="mr-2" />
            <p className='text-sm'>{message}</p>
          </div>
        )}
      </footer>
    </div>
  )
}

export default page