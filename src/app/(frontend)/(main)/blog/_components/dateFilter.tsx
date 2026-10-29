'use client'
import { months } from "../_util/date";
import { useEffect, useId, useRef, useState } from "react";

export default function DateFilter() {
    const [month, setMonth] = useState('');

    const monthList = months.map(month =>
        <option
            key={month.id}
            value={month.month}
            className="w-15 h-10 bg-amber-400 border-2 border-amber-600 text-center cursor-pointer">
            {month.month}
        </option>
    );

    function handleClick() {
        setMonth()
    }

    return (
        <div>
            <label>Filter Posts</label>
            <select>{monthList }</select>
            <select> </select>
            <button>Search</button>
        </div>
    );
}