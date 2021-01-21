import React from 'react';
import getBackground from '../../helpers/background';
import * as Styles from './styles'

function Footer() {

    return (
        <Styles.Footer>
            <a
                href="https://kwartoverbier.nl"
                target="_blank"
                rel="noopener noreferrer"
            >
                kwartoverbier.nl
            </a>
            <a
                href="https://ishetborreltijd.nl/"
                target="_blank"
                rel="noopener noreferrer"
            >
                ishetborreltijd.nl
            </a>

            <p>
                photo by: {getBackground().madeBy}
            </p>
        </Styles.Footer>
    )
}

export default Footer