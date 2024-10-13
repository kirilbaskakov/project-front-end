import React from 'react';
import FollowCard from './FollowCard';

const Follows = () => {
    return (
        <div className='flex flex-col gap-4 flex-1 py-6'>
            <FollowCard/>
            <FollowCard/>
            <FollowCard/>
            <FollowCard/>
            <FollowCard/>
        </div>
    );
};

export default Follows;