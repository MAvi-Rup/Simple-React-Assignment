import React from 'react';

const ReactWorks = () => {
    return (
        <div>
            <h1 className='fs-3'>How React Works ?</h1>
            <p className='fs-6'>We know that react works through virtual dom. React converts the real dom into vitual dom to render in quickly. Virtual dom is mainly a javascript component which make the rerender of the website fast. It identify quickly that where the state are changing and only changes on those component and rerender those component. When a state change browser have to rerender and repaint the UI, so normal dom render the whole page again and repaint the UI again and thats take too much time and so react introduce the virtual dom that makes the thing faster and smoother. By this way react works.</p>
        </div>
    );
};

export default ReactWorks;