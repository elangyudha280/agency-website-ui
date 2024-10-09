

// import gambar 
import iconPeople from '@/assets/images/Icon-utils-people.svg'
import iconHandToss from '@/assets/images/Icon-utils-hand.svg'
import iconHandTouch from '@/assets/images/Icon-utils-hand-touch.svg'
import iconCreditCard from '@/assets/images/Icon-utils-credit-card.svg'

export interface InterfaceLocalBisnis {
    id:string|number,
    title:string,
    icon:any,
    count:string|number
}

  // info local bisnis
export const infoLocalBisnis : readonly InterfaceLocalBisnis[] = [
    {
        id:1,
        title:'Members',
        icon:iconPeople,
        count:'2,245,341'
    },
    {
        id:2,
        title:'Clubs',
        icon:iconHandToss,
        count:'46,328'
    },
    {
        id:3,
        title:'Event Bookings',
        icon:iconHandTouch,
        count:'828,867'
    },
    {
        id:4,
        title:'Payments',
        icon:iconCreditCard,
        count:'1,926,436'
    },
]

