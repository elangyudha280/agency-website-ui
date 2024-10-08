import CardComunityInterface from "@/interaface/comunityInterface";

// import gambar
import iconP3 from '@/assets/images/icon-p3.svg'
import iconBuilding from '@/assets/images/icon-building.svg'
import icon3hand from '@/assets/images/icon-3hand.svg'

const CardComunity : readonly CardComunityInterface[] = [
    {
        id:1,
        title:'Membership Organisations',
        description:'Our membership management software provides full automation of membership renewals and payments',
        poster:iconP3
    },
    {
        id:2,
        title:'National Associations',
        description:'Our membership management software provides full automation of membership renewals and payments',
        poster:iconBuilding
    },
    {
        id:3,
        title:'Clubs And Groups',
        description:'Our membership management software provides full automation of membership renewals and payments',
        poster:icon3hand
    },
]

export default CardComunity