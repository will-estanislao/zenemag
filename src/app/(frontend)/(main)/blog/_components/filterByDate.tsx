'use client'

import { useEffect, useId, useRef, useState } from "react";

import { format, isValid, parse, endOfMonth, startOfMonth  } from "date-fns";
import { DateRange, DayPicker } from "@daypicker/react";

export function FilterByDate() {
    // Hold the month in state to control the calendar when the input changes
    const [monthRange, setMonthRange] = useState<DateRange | undefined>();
    
    const toMonthRange = (day: Date): DateRange => ({
        from: startOfMonth(day),
        to: endOfMonth(day),
    });

    const isInRange = (day: Date) => 
        monthRange?.from && monthRange?.to
            ? day >= monthRange.from && day <= monthRange.to
            : false;
    

    return (
        <div>
            <DayPicker
                showOutsideDays
                modifiers={{
                selected: monthRange,
                range_start: monthRange?.from,
                range_end: monthRange?.to,
                range_middle: monthRange,
            }}
            onDayClick={(day, modifiers) => {
                if (modifiers.disabled || modifiers.hidden) return;
                setMonthRange(isInRange(day) ? undefined : toMonthRange(day));
            }}
            />
        </div>
    );
}