import * as React from 'react';
import BaseComponent from 'src/utils/baseComponent';
import { Row, Col } from 'antd';
import Card from './card';

interface IProps {
    columnCount: 3,
    data: any,
    className?: string
}

class Grid extends BaseComponent<IProps> {
    render() {
        return (
            <div className='glb-grid'>
                <Row gutter={[24, 24]} style={{ margin: 15 }}>
                    {this.props.data.map((item, index) =>
                        <Col key={index} className={this.props.className} span={8} style={{ backgroundColor: 'inherit' }} >
                            <Card
                                height={'100%'}
                                width={'100%'}
                                title={item.title}
                                description={item.description}
                                avatarSize={55}
                                style={{ marginTop: '0%' }}
                            />
                        </Col>
                    )}
                </Row>
            </div>
        )
    }
}

export default Grid