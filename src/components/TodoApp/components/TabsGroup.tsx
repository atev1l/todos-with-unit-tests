import React from 'react';
import { Tabs } from '../../../types/Tabs'
import {Tab, TabsGroupContainer} from '../../../styles/TodoAppStyles'

interface TabsGroupProps {
    activeFilter: string;
    setActiveFilter: React.Dispatch<React.SetStateAction<Tabs>>
}

const TabsGroup: React.FC<TabsGroupProps> = ({ activeFilter, setActiveFilter }) => {
    const tabs: { label: string; filter: Tabs }[] = [
        { label: 'All', filter: 'all' },
        { label: 'Active', filter: 'uncompleted' },
        { label: 'Completed', filter: 'completed' },
    ];

    return (
        <TabsGroupContainer>
            {tabs.map((tab) => (
                <Tab
                    key={tab.filter}
                    pad={"15"}
                    border={activeFilter === tab.filter ? 'bd' : ''}
                    onClick={() => setActiveFilter(tab.filter)}
                >
                    {tab.label}
                </Tab>
            ))}
        </TabsGroupContainer>
    );
};

export default TabsGroup;
