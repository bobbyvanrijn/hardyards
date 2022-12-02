export default function Lead({ children, gridArea }) {
    return (
        <p
            className='lead trim-both'
            grid-area={gridArea}
        >
            { children }
        </p>
    );
}