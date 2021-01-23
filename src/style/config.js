import DaySmall from '../images/balkouras-nicos-8tadBT_8Gag-unsplash-small.jpg'
import DayMedium from '../images/balkouras-nicos-8tadBT_8Gag-unsplash-medium.jpg'
import DayLarge from '../images/balkouras-nicos-8tadBT_8Gag-unsplash-original.jpg'

import NightSmall from '../images/francois-hoang-xxZCfAnMUrM-unsplash-small.jpg'
import NightMedium from '../images/francois-hoang-xxZCfAnMUrM-unsplash-medium.jpg'
import NightLarge from '../images/francois-hoang-xxZCfAnMUrM-unsplash-original.jpg'

const Theme = {
    color : {
        title: {
            night: 'rgb(40, 80, 120)',
            day: 'rgb(16, 35, 72)'
        },
        positive: 'rgb(100, 200, 20)',
        negative: 'rgb(170, 40, 10)',
        config: {
            night: {
                default: 'green',
                hover: 'rgb(16, 35, 72)'
            },
            day: {
                default: 'green',
                hover: 'rgb(16, 35, 72)'
            }
        }
    },
    images : {
        day : {
            small: DaySmall,
            medium: DayMedium,
            large: DayLarge,
            madeBy: 'Balkouras Nicos - unsplash'
        },
        night : {
            small: NightSmall,
            medium: NightMedium,
            large: NightLarge,
            madeBy: 'Francois Hoang - unsplash'
        }
    }
}

export default Theme