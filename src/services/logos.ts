import {Logo} from "../models/Logo";

import UtBarista from '../assets/images/logos/utbarista.png';
import OutBM from '../assets/images/logos/outbm.png';
import UtRC from '../assets/images/logos/utrc.png';
import CoustUT from '../assets/images/logos/cousut.png';
import Eventum from '../assets/images/logos/eventum.png';
import {useTranslation} from "react-i18next";

export const useLogos = (): Logo[] => {
    const { t } = useTranslation();
    return [
        { src: UtBarista, name: "UT Barista", description: t('ut_barista_description') },
        { src: OutBM, name: "OutBM", description: t('outbm_description') },
        { src: UtRC, name: "UT RC", description: t('ut_rc_description') },
        { src: CoustUT, name: "Coust UT", description: t('coust_ut_description') },
        { src: Eventum, name: "Eventum", description: t('eventum_description') },
    ]
}