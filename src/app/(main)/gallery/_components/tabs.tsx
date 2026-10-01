'use client';

import { useState } from 'react';
import styles from '../../mainstyles.module.css';
import Magazine from './magazine';
import Photos from './photos';
import Videos from './videos';

export default function Tabs() {

    const [tabContent, setTabContent] = useState(<Magazine />);
    const galleryTabs = ['zene', 'photo', 'videos'];
    const [selected, setSelected] = useState('zene');
    
    function handleClick(e:any) {
        setSelected(e.target.id);
        if (e.target.id === "zene") {
            setTabContent(<Magazine />);
        } else if (e.target.id === "photo") {
            setTabContent(<Photos />);
        } else if (e.target.id === "videos") {
            setTabContent(<Videos />);
        }
    }

    return (
        <div>
            <ul className={`text-shadow-lg/50 flex ${styles.tabBar} font-bold text-lg`}>
                <li id="zene" className={`${selected === galleryTabs[0] ? 'bg-[#e14b57]  font-extrabold border-r-5 border-r-[#2fada0]' : 'bg-[#4e758b]'}`} onClick={handleClick}>Zene Magazine</li>
                <li id="photo" className={selected === galleryTabs[1] ? 'bg-[#3f8ae4] font-extrabold border-r-5 border-r-[#2fada0]' : 'bg-[#4e758b]'} onClick={handleClick}>Photos</li>
                <li id="videos" className={selected === galleryTabs[2] ? 'bg-[#e8d032] font-extrabold border-r-5 border-r-[#2fada0]' : 'bg-[#4e758b]'} onClick={handleClick}>Videos</li>
            </ul>
            <div className={`${styles.tabContent}`}>
                {tabContent}
            </div>
        </div>
    );
}