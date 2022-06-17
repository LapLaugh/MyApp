import * as React from 'react';
import BaseComponent from 'src/utils/baseComponent';
import { Layout } from 'antd';
import Title from '../globalComponent/title';
import Grid from '../globalComponent/grid';
import Card from '../globalComponent/card';
const { Header, Footer, Sider, Content } = Layout;

const fakeData = [
    {
        title: 'Summoners War',
        description: 'Fake description'
    },
    {
        title: 'Summoners War',
        description: 'Fake description'
    },
    {
        title: 'Summoners War',
        description: 'Fake description'
    },
    {
        title: 'Summoners War',
        description: 'Fake description'
    },
    {
        title: 'Summoners War',
        description: 'Fake description'
    },
    {
        title: 'Summoners War',
        description: 'Fake description'
    },
    {
        title: 'Summoners War',
        description: 'Fake description'
    }
]

class Category extends BaseComponent<any> {
    render() {
        return (
            <>
                <Layout className='body-layout'>
                    <Sider className='body-sider' width={'25%'}>
                        <Card
                            height={'100%'}
                            width={'100%'}
                            title='Summoners War'
                            description='Tool & Summoners War'
                            avatarSize={55}
                            style={{ marginTop: '10%' }}
                            isSider={true}
                        />
                    </Sider>
                    <Layout className='body-child-layout'>
                        <Header className='body-header'>
                            <Title className='mt-px' type='danger' width={'100%'} height={'90%'} fontSize={30} border={'none'}>
                                CATEGORY
                            </Title>
                        </Header>
                        <Content className='body-content'>
                            <Grid columnCount={3} data={fakeData} className={'col-cate'}></Grid>
                        </Content>
                        <Footer className='body-footer'>
                            <Title className='mt-px' type='danger' width={'100%'} height={'90%'} fontSize={15} border={'none'}>
                                Thanks to swarena.gg - https://swarena.gg/
                            </Title>
                        </Footer>
                    </Layout>
                </Layout>
            </>
        )
    }
}

export default Category