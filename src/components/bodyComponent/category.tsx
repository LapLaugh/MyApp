import * as React from 'react';
import BaseComponent from 'src/utils/baseComponent';
import { Button } from 'antd';

class Category extends BaseComponent<any> {
    render() {
        return (
            <>
                <Button type="primary">
                    Primary
                </Button>
            </>
        )
    }
}

export default Category