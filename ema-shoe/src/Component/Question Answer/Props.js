import React from 'react';

const Props = () => {
    return (
        <div>
            <h1 className='fs-3'>Describe Props vs State?</h1>
            <p className='fs-6'>First of all, There are many difference between props vs state. Props are mainly used to pass the variable object anything through parent to child component and State is mainly used to when browser have to rerender the website for dynamic changes. Then, state can be changed or manupulate by the user but when a Props send it can not be changed and its immutable. So a state can be accessed or modified by the user but a props can not be . Props are only read only memory.</p>
        </div>
    );
};

export default Props;