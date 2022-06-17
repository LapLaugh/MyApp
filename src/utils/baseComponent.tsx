import * as React from 'react';
import Utils from './utils';

class BaseComponent<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {
    public utils = new Utils
}

export default BaseComponent;