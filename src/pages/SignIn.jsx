import React from 'react';
import Login from '@react-login-page/page1';

const css = {
    '--login-bg': '#edeff3',
    '--login-bg-from': '#46acfc',
    '--login-bg-to': '#3ffbd8',
};
const SignIn = () => {
    return (
        <div className='my-20'>
            <Login style={{ height: 620, ...css }} className='rounded-3xl' />
        </div>
    );
};

export default SignIn;