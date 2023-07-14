import React from 'react';

type SectionTitleProps = {
    children: React.ReactNode;
    id?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children, id }) => {
    return <h1 id={id} className='text-2xl mb-5'>{children}</h1>;
};

export default SectionTitle;
