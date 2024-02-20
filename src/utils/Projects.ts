import { Project } from "../types/Project";
import RestaurantMenu from '../assets/RestaurantMenu.png';
import BookingApp from '../assets/BookingApp.png';
import ArennaApp from '../assets/ArennaApp.png';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Restaurant Menu',
    description: 'With intuitive navigation, real-time cart updates, and responsive design, customers can easily explore and place orders from any device, enhancing their dining experience.',
    link: 'https://github.com/matheusvoriboli/RestaurantMenu',
    image: RestaurantMenu
  },
  {
    id: 2,
    title: 'Arenna App',
    description: 'With intuitive browsing easy scheduling, venue booking and push notifications, users effortlessly connect with players and venues nearby simplifying match organization and participation.',
    link: 'https://github.com/matheusvoriboli/ArennaApp',
    image: ArennaApp
  },
  {
    id: 3,
    title: 'Booking App',
    description: 'Travel booking app that streamlines the process of planning and booking trips.',
    link: 'https://github.com/matheusvoriboli/BookingApp',
    image: BookingApp
  },
];