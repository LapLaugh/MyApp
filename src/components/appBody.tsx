import * as React from 'react';
import BaseComponent from 'src/utils/baseComponent';
import classnames from 'classnames';
import Carousel from './globalComponent/carousel';
import Category from './bodyComponent/category';
import { observer } from 'mobx-react';
import store from '../stores/mobxStorage';

class AppBody extends BaseComponent<any> {
    render() {
        return (
            <div className={classnames('app-body')}>
                {store.tab === 0 && <Carousel />}
                {store.tab === 1 && <Category />}
            </div>
        )
    }
}

export default observer(AppBody)