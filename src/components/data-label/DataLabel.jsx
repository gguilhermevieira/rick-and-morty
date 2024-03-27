import './DatLabel.css';

export default function DataLabel({ label, value }) {
    return (
        <div className='data-label'>
            <small>{label}</small>
            <span>{value}</span>
        </div>
    )
}