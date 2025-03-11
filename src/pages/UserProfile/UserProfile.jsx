import { FaRegUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { PiTelegramLogoBold } from "react-icons/pi";

import styles from "./UserProfile.module.css";

function UserProfile() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.image}>
                    <FaRegUser fontSize="1.5rem" opacity="0.5" />
                </div>
                <div>
                    <h4>username</h4>
                    <p>eve.holt@reqres.in</p>
                </div>
            </div>

            <div className={styles.conction}>
                <p>contact me</p>
                <a href="mailto:mdyavarii@gmail.com">
                    Email <MdAlternateEmail />
                </a>

                <a href="https://t.me/mmd_yavarii">
                    Telegram <PiTelegramLogoBold />
                </a>
            </div>
        </>
    );
}

export default UserProfile;
