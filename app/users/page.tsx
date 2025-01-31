import React from 'react'
import Workspace from '../components/Workpace'
import UserTable from '../components/UserTable'

const users = [
    { id: 1, nickname: 'ゆうと', email: 'example1@example.com', birthDate: '1992年 12月', gender: '男性', residence: '東京都', registrationDate: '2024年 01月 12日' },
    { id: 2, nickname: 'ニックネーム最大12文字', email: 'user234@example.net', birthDate: '1987年 5月', gender: '女性', residence: '東京都', registrationDate: '2024年 01月 12日' },
    { id: 3, nickname: 'わんこ好き', email: 'test_user@gmail.com', birthDate: '1996年 10月', gender: '男性', residence: '東京都', registrationDate: '2024年 01月 12日' },
    { id: 4, nickname: 'はるかぜ', email: 'dummy_email_567@yahoo.co.jp', birthDate: '1998年 2月', gender: '男性', residence: '静岡県', registrationDate: '2024年 01月 12日' },
    { id: 5, nickname: 'あおい', email: 'ecampleaddress124e23@outlook.co.jp', birthDate: '1978年 5月', gender: '女性', residence: '埼玉県', registrationDate: '2024年 01月 11日' },
    { id: 6, nickname: 'ポンたろう', email: 'random.user@example.org', birthDate: '1978年 6月', gender: '女性', residence: '栃木県', registrationDate: '2024年 01月 11日' },
    { id: 7, nickname: 'まさやん', email: 'email1234@example.co.jp', birthDate: '1972年 8月', gender: '回答しない', residence: '鹿児島県', registrationDate: '2024年 01月 11日' },
    { id: 8, nickname: 'なつこ', email: 'user_test456@gmail.com', birthDate: '1969年 11月', gender: '回答しない', residence: '茨城県', registrationDate: '2024年 01月 11日' },
    { id: 9, nickname: 'ぴょんぴょん', email: 'example_email@yahoo.com', birthDate: '1984年 4月', gender: '女性', residence: '東京都', registrationDate: '2024年 01月 10日' },
    { id: 10, nickname: 'ひまわりさん', email: 'dummy.address@example.net', birthDate: '1988年 4月', gender: 'その他', residence: '福岡', registrationDate: '2024年 01月 10日' },
];

const page = () => {
    return (
        <Workspace>
            <div>
                <UserTable users={users} />
            </div>
        </Workspace>
    )
}

export default page