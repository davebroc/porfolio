import React, { ReactNode } from 'react';

type SkillItemProps = {
    children: ReactNode;
    id?: string;
};

const SkillItem: React.FC<SkillItemProps> = ({ children }) => {
    return (
        <div className="flex text-center justify-center items-center p-2 m-4 rounded-md bg-fuchsia-700">
            {children}
        </div>
    );
};

export default SkillItem;
