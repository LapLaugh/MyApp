import * as React from 'react';
import BaseComponent from 'src/utils/baseComponent';
import store from '../stores/mobxStorage'
import { observer } from 'mobx-react';

@observer
class DemoComponent extends BaseComponent<any> {
    render() {
        return <>
            <h1>DemoComponent</h1>
            {store.count}
            <button onClick={() => store.increase()}>Increase</button>
        </>
    }
}

export default DemoComponent