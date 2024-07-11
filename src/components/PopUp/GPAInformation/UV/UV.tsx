import {UVProps} from "../../../../models/UV";

import './UV.css'
import {useTranslation} from "react-i18next";

export default function UV(uv: UVProps) {

    const { t } = useTranslation();

    let letterBackground = 'var(--a-letter)';
    switch(uv.letter) {
        case 'A': letterBackground = 'var(--a-letter)';
        break;
        case 'B': letterBackground = 'var(--b-letter)';
        break;
        case 'C': letterBackground = 'var(--c-letter)';
        break;
    }

    return (
        <div className={"UV"}>
            <p className={"UVText"}>{uv.name}</p>
            <p className={"UVText"}>{uv.description}</p>
            <div className={"UVLetterContainer"} style={{backgroundColor: letterBackground, width: 35, height: 35}}>
                <p className={"UVLetterText"}>{uv.letter}</p>
            </div>
            <div className={"UVCreditContainer"} style={{backgroundColor: letterBackground, height: 35}}>
                <p className={"UVCreditText"}>{uv.credits} {t('credits')}</p>
            </div>
        </div>
    )
}