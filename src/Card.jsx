export function Card({ label, value }) {
    return (
        <p id={'card_' + value}>{label}</p>
    );
}