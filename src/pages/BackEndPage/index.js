import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

export default Loadable({
    loader: () =>
        import(/* webpackChunkName: 'BackEndPage' */ './BackEndPage'),
    loading: () => <Loading size={20} height="calc(100vh - 50px)" />
});
