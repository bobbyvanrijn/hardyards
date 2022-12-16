export default function Lead(props) {
    return (
        <p
            { ...props }
            className='lead trim-both'
        >
            { props.children }
        </p>
    );
}