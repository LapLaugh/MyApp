import * as React from 'react';
import BaseComponent from 'src/utils/baseComponent';
import classnames from 'classnames';

interface IProps {
    width?: number,
    height?: number,
    color?: string,
    btnName: string,
    type?: string,
    onClick?: () => void
}

class Button extends BaseComponent<IProps> {
    render() {
        return <button
            className={classnames(this.props.color, this.props.type ?? '')}
            style={
                (this.props.width || this.props.height) &&
                {
                    width: this.props.width, height: this.props.height
                }
            }
            onClick={this.props.onClick}
        >
            {this.props.btnName}
        </button>
    }
}

export default Button