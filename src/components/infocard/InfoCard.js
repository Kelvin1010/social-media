import React, { useState } from 'react';
import '../../styles/InfoCard.css';
import AddIcon from '@mui/icons-material/Add';
import ProfileModal from '../profilemodal/ProfileModal';

function InfoCard() {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className='infocard'>
            <div className='info_head'>
                <h4>Your Info</h4>
                <div>
                    <AddIcon
                        width="2rem"
                        height="1.2rem"
                        onClick={() => setModalOpened(true)}
                    />
                    <ProfileModal
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                    />
                </div>
            </div>

            <div className="info">
                <span>
                <b>Status </b>
                </span>
                <span>in Relationship</span>
            </div>

            <div className="info">
                <span>
                <b>Lives in </b>
                </span>
                <span>Multan</span>
            </div>

            <div className="info">
                <span>
                <b>Works at </b>
                </span>
                <span>Zainkeepscode inst</span>
            </div>

            <button className="button logout-button">Logout</button>
        </div>
    )
}

export default InfoCard