import React from 'react';

const Array = ({ array, start, mid, end, discarded }) => {
    return (
        <div className="flex justify-center items-end h-64 mb-8 border bg-zinc-200 p-4 rounded min-w-[30%]">
            {array.map((value, index) => {
                let bgColor = 'bg-blue-500';
                // if (currentStep === index) bgColor = 'bg-yellow-500';
                if (start === index) bgColor = 'bg-green-500/60';
                if (mid === index) bgColor = 'bg-purple-500/60';
                if (end === index) bgColor = 'bg-red-500/60';
                if (discarded.includes(index)) bgColor = 'bg-zinc-300/60';

                return (
                    <div
                        key={index}
                        className={`w-8 mx-1 ${bgColor} flex justify-center`}
                        style={{ height: `${value * 2}px`, transition: 'background-color 0.5s' }}
                    >
                        <span className="text-sm -translate-y-5">{value}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default Array;