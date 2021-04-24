import Link from 'next/link';
import styles from '../../styles/SocialMedia.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { 
    faGithubAlt,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,
    faMedium,
    faLinkedin,
    faDev,
    faSteam
 } from '@fortawesome/free-brands-svg-icons'

library.add(
    faGithubAlt,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,
    faMedium,
    faLinkedin,
    faDev,
    faSteam
);

export default function SocialMedia() {
    return (
      <>
        <div className={styles.social}>
            <Link href="https://github.com/anatrone"><a target="_blank"><i><FontAwesomeIcon id="github" icon={faGithubAlt} size="2x" /></i></a></Link>
            <Link href="https://instagram.com/anatrone"><a target="_blank"><i><FontAwesomeIcon icon={faInstagram} size="2x" /></i></a></Link>
            <Link href="https://dev.to/anatrone"><a target="_blank"><i><FontAwesomeIcon icon={faDev} size="2x" /></i></a></Link>
            <Link href="https://linkedin.com/in/anatrone"><a target="_blank"><i><FontAwesomeIcon icon={faLinkedin} size="2x" /></i></a></Link>
            <Link href="https://steamcommunity.com/id/anatrone/"><a target="_blank"><i><FontAwesomeIcon icon={faSteam} size="2x" /></i></a></Link>
        </div>
      </>  
    )
}