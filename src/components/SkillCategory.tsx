import React, { useState } from 'react';
import SkillItem from './SkillItem';

type SkillCategoryProps = {
    text: string;
    children: string[];
    id?: string;
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ text, children }) => {
    const [isOpen, setOpen] = useState(false);

    const showChildren = () => {
        setOpen(!isOpen);
    };

    return (
        <div>
            <button
                onMouseEnter={showChildren}
                className="flex text-center justify-center items-center p-2 m-4 rounded-md inline-block bg-fuchsia-700"
            >
                {text}
            </button>
            {isOpen && (
                <ul>
                    {children.map((skillItem, index) => (
                        <li key={index}>
                            <SkillItem>{skillItem}</SkillItem>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SkillCategory;
