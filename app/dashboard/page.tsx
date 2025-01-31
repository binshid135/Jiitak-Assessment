"use client"
import React from 'react'
import Workspace from '@/app/components/Workpace';
import CustomBarChart from '../components/BarChart';
import DataCards from '../components/DataCards';
import { Container, Row, Col } from 'react-bootstrap';


const Page = () => {


    return (
        <Workspace>
            <Container fluid>
                <Row>
                    <Col lg={3}>
                        <DataCards
                            heading='ユーザー登録数累計'
                            value='450'
                            unit='人'
                            undertext='400人 (前月時点の累計）'
                            change='12.5%'
                        />
                    </Col>
                    <Col lg={3}>
                        <DataCards
                            heading='アクティブユーザー'
                            value='50'
                            unit='人 / 今月'
                            undertext='12人 (前月時点）'
                            change='316.6%'
                        />
                    </Col>
                    <Col lg={3}>
                        <DataCards
                            heading='定着率'
                            value='10'
                            unit='% / 前月'
                            undertext='12% (前々月）'
                            change='16.6%'
                            isRed={true}
                        />
                    </Col>
                    <Col lg={3}>
                        <DataCards
                            heading='平均検索回数'
                            value='4'
                            unit='回 / 今月'
                            undertext='2回 (前月の今日時点）'
                            change='100%'
                        />
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col lg={6}>
                        <CustomBarChart />
                    </Col>
                    <Col lg={3}>
                        <DataCards
                            heading='抽選利用回数'
                            value='125'
                            unit='回 / 今月'
                            undertext='85回 (前月の今日時点）'
                            change='47%'
                        />
                    </Col>
                    <Col lg={3}>
                        <DataCards
                            heading='アカウント削除数'
                            value='10'
                            unit='人 / 今月'
                            undertext='8人 (前月の今日時点）'
                            change='25%'
                        />
                    </Col>
                </Row>
            </Container>
        </Workspace>
    )
}

export default Page