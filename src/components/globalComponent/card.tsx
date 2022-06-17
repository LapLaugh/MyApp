import * as React from 'react';
import BaseComponent from 'src/utils/baseComponent';
import { Avatar, Card } from 'antd';

interface IProps {
    className?: string,
    height: number | string,
    width: number | string,
    image?: string,
    avatarSrc?: string
    avatarSize?: number | 'large' | 'small' | 'default',
    title?: string,
    description?: string,
    style?: any,
    isSider?: boolean
}

class CardModify extends BaseComponent<IProps> {
    render() {
        return (
            <div style={this.props.style}>
                <Card className={`${this.props.className}-top card-modify`} style={this.props.isSider && { borderRightColor: 'whitesmoke' }} hoverable={true}>
                    <img
                        className='card-modify-child'
                        src={this.props.image ?? "https://swarena.gg/_nuxt/img/left-col-img.4184ac4.jpg"}
                        style={{ height: this.props.height, width: this.props.width }}
                        alt=""
                    />
                </Card>
                <Card className={`${this.props.className}-bottom card-modify`} hoverable={true}>
                    {
                        this.props.title &&
                        <Card.Meta
                            className='card-modify-child'
                            title={<span className='card-meta-title'>{this.props.title}</span>}
                            avatar={
                                <Avatar
                                    size={this.props.avatarSize}
                                    src={this.props.avatarSrc ?? "https://swarena.gg/_nuxt/img/left-col-img.4184ac4.jpg"}
                                />
                            }
                            description={<span className='card-meta-description'>{this.props.description}</span>}>
                        </Card.Meta>
                    }
                </Card>
            </div>
        )
    }
}

export default CardModify