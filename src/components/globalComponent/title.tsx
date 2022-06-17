import * as React from 'react';
import BaseComponent from 'src/utils/baseComponent';
import { Button } from 'antd';

interface IProps {
    className?: string,
    type: 'primary' | 'dashed' | 'danger' | 'link',
    children: React.ReactNode,
    width?: number | string,
    height?: number | string,
    fontSize?: number | string,
    fontFamily?: string,
    border?: string,
}

class Title extends BaseComponent<IProps> {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <Button
                    className={this.props.className}
                    type={this.props.type}
                    ghost
                    onClick={e => e.preventDefault()}
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                        fontSize: this.props.fontSize,
                        fontFamily: this.props.fontFamily,
                        minWidth: 200,
                        minHeight: 30,
                        marginTop: 'auto',
                        border: this.props.border
                    }}
                >
                    {this.props.children}
                </Button>
            </>
        )
    }
}

export default Title