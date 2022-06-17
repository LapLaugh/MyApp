import * as React from 'react';
import BaseComponent from 'src/utils/baseComponent';
import classnames from 'classnames';
import Button from './globalComponent/button';
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import store from '../stores/mobxStorage'

const buttons = [
    {
        key: 0,
        btnName: 'HOME',
        width: 150,
        type: 'mr-px app-btn'
    },
    {
        key: 1,
        btnName: 'CATEGORY',
        width: 150,
        type: 'mr-px app-btn'
    },
    {
        key: 2,
        btnName: 'TIPS',
        width: 150,
        type: 'mr-px app-btn'
    }
]

class AppHeader extends BaseComponent<any> {
    render() {
        return (
            <div className={classnames('app-header')}>
                <div className={classnames('app-title')}>
                    <img className={classnames('app-logo')} src="https://swarena.gg/swarena-logo.svg" alt="" />
                    <span className={classnames('app-title-text ml-px balance-tb')}>THINGS</span>
                </div>
                <div className={classnames('app-button-group')}>
                    {buttons.map(btn =>
                        <Button
                            key={btn.key}
                            btnName={btn.btnName}
                            width={btn.width}
                            type={`mr-px app-btn ml-px ${store.tab === btn.key ? 'app-btn-active' : ''}`}
                            onClick={() => store.changeTab(btn.key)}
                        />
                    )}
                    <input className={classnames('app-search ml-px')} type="search" />
                    <FontAwesomeIcon className={classnames('icon-search ml-px')} icon={faSearch} />
                </div>
            </div>
        )
    }
}

export default observer(AppHeader)