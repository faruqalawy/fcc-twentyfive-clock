import { FaPlus, FaMinus } from 'react-icons/fa';

interface TimerSetterProps {
time: number;
setTime: (time: number) => void;
min: number;
max: number;
interval: number;
type: "break" | "session";
}

const TimeSetter: React.FC<TimerSetterProps> = ({
time,
setTime,
min,
max,
interval,
type,
}) => {
return (
    <div>
    <button
        onClick={() => (time > min ? setTime(time - interval) : null)}
        id={`${type}-decrement`}
    >
        <FaMinus />
    </button>
    <span id={`${type}-length`}>{time / interval}</span>
    <button
        onClick={() => (time < max ? setTime(time + interval) : null)}
        id={`${type}-increment`}
    >
        <FaPlus />
    </button>
    </div>
);
};

export default TimeSetter;