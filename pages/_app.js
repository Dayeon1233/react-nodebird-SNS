import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
// 헤드를 조작하게 해주는 Next에서 제공해주는거
import 'antd/dist/antd.css'

  // 다른 페이지들의 부모같은 느낌
const App = ({Component}) =>{
return(
    <>
    <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
    </Head>
    <Component />
    </>
  
)
};

App.proptypes={
    Component:PropTypes.elementType.isRequired,
}
export default App;