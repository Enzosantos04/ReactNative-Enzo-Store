import { Category } from '../types/category'
import { Product } from '../types/product';


type Data = {
    categories: Category[],
    products: Product[]
};
export const data: Data = {
    categories: [
        {
            id: 1,
            title: 'Electronics',
            cover: 'https://picsum.photos/id/0/1000/300'
        },
        {
            id: 2,
            title: 'Accessories',
            cover: 'https://picsum.photos/id/60/1920/1200'
        },
        {
            id: 3,
            title: 'Home Appliances',
             cover: 'https://picsum.photos/id/625/1000/300'
        }
    ],
    products: [
        { id: 4, idCategory: 1, image: "https://www.jbhifi.com.au/cdn/shop/files/746484-Product-0-I-638615191805575632.jpg?v=1727141018", title: "iPhone 16 Pro Max", description: "Built for Apple. Featuring a stunning titanium design.", price: 1600 },
        { id: 23, idCategory: 1, image: "https://www.jbhifi.com.au/cdn/shop/files/748099-Product-0-I-638659260051938919.jpg?v=1730329273", title: "MacBook Pro M4", description: "MacBook Pro with M4 chip gives you spectacular performance.", price: 1900 },
        { id: 15, idCategory: 1, image: "https://www.jbhifi.com.au/cdn/shop/files/745707-Product-0-I-638490952804520877_2283da6e-d3bd-4af5-911c-79b8a46e6b63.jpg?v=1722319571", title: "PlayStation 5", description: "Unleashes new gaming possibilities and Powerful Processor.", price: 699.99 },
        { id: 9, idCategory: 2, image: "https://www.jbhifi.com.au/cdn/shop/products/654750-Product-0-I-638307591649046021.jpg?v=1695162443", title: "Samsung Galaxy Watch6", description: "Experience edge-to-edge stainless steel luxury on Samsung.", price: 379.99 },
        { id: 12, idCategory: 1, image: "https://www.jbhifi.com.au/cdn/shop/files/672256-Product-0-I-638490165603385142.jpg?v=1713419788", title: "Samsung Galaxy S24 Ultra", description: "With enhanced cooling performance and Snapdragon 8 Gen 3 chip.", price: 1859.99 },
        { id: 6, idCategory: 2, image: "https://www.jbhifi.com.au/cdn/shop/products/664070-Product-0-I-638301556805609773.jpg?v=1694558893", title:"Apple AirPods Pro 2", description: "Featuring pro-level Active Noise Cancellation.", price: 299.99 },
        { id: 21, idCategory: 1, image: "https://www.jbhifi.com.au/cdn/shop/files/487923-Product-0-I-637369904292431894.jpg?v=1722319719", title: "Xbox Series X ", description: "The fastest, most powerful Xbox ever.", price: 589.99 },
        { id: 25, idCategory: 1, image: "https://www.jbhifi.com.au/cdn/shop/files/778099-Product-0-I-638573077299975383.jpg?v=1730682624", title: "Google Pixel 9 Pro", description: "Sun protection, casual and fashionable style.", price: 1219.99 },
        { id: 5, idCategory: 1, image: "https://www.jbhifi.com.au/cdn/shop/files/722106-Product-0-I-638453842252661019_f7f978e1-3306-49e4-a038-edd1ab717d22.jpg?v=1719882750", title: "LG 55 OLED EVO", description: "AI processing helps remove noise and enhances the colours .", price: 149.99 },
        { id: 8, idCategory: 2, image: "https://www.jbhifi.com.au/cdn/shop/files/623427-Product-0-I-638615225402982645.jpg?v=1726034058", title: "Apple Watch Series 10 ", description: "Bigger display with more screen area and a thinner, lighter design.", price: 399.99 },
        { id: 24, idCategory: 2, image: "https://www.jbhifi.com.au/cdn/shop/products/521878-Product-0-I-637602224301162434.jpg?v=1624589702", title: "Garmin Forerunner", description: "This easy-to-use GPS smartwatch is designed for people of all skill levels.", price: 199.99 },
        { id: 28, idCategory: 2, image: "https://cdn.shopify.com/s/files/1/0024/9803/5810/files/777661-Product-0-I-638635084805725735_600x600.jpg?v=1727911750", title: "Case for AirPods", description: "High quality, Woolenex overlay, durable.", price: 14.99 },
        { id: 3, idCategory: 2, image: "https://www.jbhifi.com.au/cdn/shop/products/670019-Product-0-I-638350008602920759.jpg?v=1706159352", title: "PULSE Elite", description: "Enjoy extraordinary lifelike sound in your favourite games.", price: 199.99 },
        { id: 18, idCategory: 2, image: "https://www.jbhifi.com.au/cdn/shop/files/610751-Product-0-I-638591205604073517.jpg?v=1723585474", title: "PlayStation VR2", description: "Enjoy heightened sensory and emotional experiences.", price: 264.99 },
        { id: 30, idCategory: 3, image: "https://www.jbhifi.com.au/cdn/shop/files/596356-Product-0-I-637926310377409968.jpg?v=1722491595", title: "E6 Automatic Coffee Machine", description: "The E6 perfectly combines variety with outstanding aesthetic appeal.", price: 899.99 },
        { id: 11, idCategory: 3, image: "https://www.jbhifi.com.au/cdn/shop/files/651469-Product-0-I-638231165403316017.jpg?v=1712809692", title: "Westinghouse Fridge ", description: "French door refrigerator, in silver with Twist & Serve icemaker.", price: 1149.99 },
        { id: 19, idCategory: 3, image: "https://www.jbhifi.com.au/cdn/shop/files/626210-Product-0-I-638168643492298517.jpg?v=1718488372", title: "Hisense Washing machine", description: "Automatically senses the weight of your laundry during the wash cycle.", price: 799.99 },
        { id: 16, idCategory: 3, image: "https://www.jbhifi.com.au/cdn/shop/products/672425-Product-0-I-638432847642610992.jpg?v=1707688038", title: "Eufy Clean Robovac", description: "Up to 60 Days of Hands-Free Cleaning.", price: 354.99 },
        { id: 14, idCategory: 3, image: "https://www.jbhifi.com.au/cdn/shop/files/753980-Product-0-I-638580685205224856.jpg?v=1722471785", title: "Germanica 8L Air Fryer", description: "Visual window. Touch control - Multiple 10 presets.", price: 99.99 },
        { id: 29, idCategory: 3, image: "https://www.jbhifi.com.au/cdn/shop/files/776422-Product-0-I-638602467003572368.jpg?v=1724649986", title: "Shark FlexBreeze ", description: "Sophisticated design, charm, and refinement.", price: 139.99 },
        { id: 1, idCategory: 3, image: "https://www.jbhifi.com.au/cdn/shop/products/654371-Product-1-I-638251663211841818.jpg?v=1689569593", title: "Philips OneBlade ", description: "A revolutionary technology designed for facial grooming.", price: 179.99 },
        { id: 2, idCategory: 1, image: "https://www.jbhifi.com.au/cdn/shop/files/659859-Product-0-I-638507251293697925_ec29e27c-4840-471b-acc5-2b29ece8bd1f.jpg?v=1715137155", title: "Apple iPad Pro ", description: "Ultra Retina XDR delivers extreme brightness and contrast.", price: 1299.99 }
    ]
}
