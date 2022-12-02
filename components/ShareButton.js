import styles from './ShareButton.module.css';

export default function ShareButton(props) {
    async function share() {
        try {
            await navigator.share({url: props.url, title: props.title, text: props.text})
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <a
            className={`${styles.shareButton} trim-both`}
            onClick={share}
        >
            Share
        </a>
    )
}