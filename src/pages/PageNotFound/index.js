import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

export default Loadable({
    loader: () =>
        import(/* webpackChunkName: 'PageNotFound' */ './PageNotFound'),
    loading: () => <Loading size={20} height="calc(100vh - 50px)" />
});
