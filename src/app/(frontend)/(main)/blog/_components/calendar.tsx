export default function Calendar() {

    // Modal way to sort
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC",];
    const yearsList: any = [];
    let currentYear = new Date().getFullYear();
    let latestYear = new Date();
    latestYear.setFullYear(2010);
    
    const monthList = months.map(month =>
        <div
            key={months.indexOf(month)}
            className="w-15 h-10 bg-amber-400 border-2 border-amber-600 text-center cursor-pointer">
            {month}
        </div>
    );

    return (
        <div>
            <div>
                <select></select>
            </div>
                <div className="grid grid-cols-4 grid-rows-4 text-center font-bold">
                    {monthList}
                </div>
        </div>
    );
}