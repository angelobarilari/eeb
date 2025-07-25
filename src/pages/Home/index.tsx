// src/pages/Home.tsx
import RestaurantCard from "../../components/RestaurantCard";
import { Container } from "../../components/Container";

interface Produto {
    title: string;
    description: string;
    image: string;
}

interface Restaurante {
    id: string;
    name: string;
    description: string;
    image: string;
    rating: number;
    saibaMais: string;
    produto: Produto[];
}

const restaurantData: Restaurante[] = [
    {
        id: "1",
        name: "La Dolce Vita Trattoria",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        image: "https://tse2.mm.bing.net/th/id/OIP.FB6L6RD14W1IoeDX95kSFwHaFg?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        rating: 4.9,
        saibaMais: "Saiba mais",
        produto: [
            {
                title: "Pizza Margherita",
                description:
                    "Massa fina, molho de tomate, mussarela de búfala e manjericão fresco.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
                title: "Pizza Margherita",
                description:
                    "Arroz arbóreo cremoso com cogumelos frescos e queijo parmesão.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
                title: "Pizza Margherita",
                description:
                    "Massa fina, molho de tomate, mussarela de búfala e manjericão fresco.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
                title: "Pizza Margherita",
                description:
                    "Arroz arbóreo cremoso com cogumelos frescos e queijo parmesão.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
        ],
    },
    {
        id: "2",
        name: "La Dolce Vita Trattoria",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        image: "https://tse2.mm.bing.net/th/id/OIP.FB6L6RD14W1IoeDX95kSFwHaFg?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        rating: 4.6,
        saibaMais: "Saiba mais",
        produto: [
            {
                title: "Pizza Margherita",
                description:
                    "Massa fina, molho de tomate, mussarela de búfala e manjericão fresco.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
                title: "Pizza Margherita",
                description:
                    "Arroz arbóreo cremoso com cogumelos frescos e queijo parmesão.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
                title: "Pizza Margherita",
                description:
                    "Massa fina, molho de tomate, mussarela de búfala e manjericão fresco.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
                title: "Pizza Margherita",
                description:
                    "Arroz arbóreo cremoso com cogumelos frescos e queijo parmesão.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
        ],
    },
    {
        id: "1",
        name: "La Dolce Vita Trattoria",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        image: "https://tse2.mm.bing.net/th/id/OIP.FB6L6RD14W1IoeDX95kSFwHaFg?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        rating: 4.9,
        saibaMais: "Saiba mais",
        produto: [
            {
                title: "Pizza Margherita",
                description:
                    "Massa fina, molho de tomate, mussarela de búfala e manjericão fresco.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
                title: "Pizza Margherita",
                description:
                    "Arroz arbóreo cremoso com cogumelos frescos e queijo parmesão.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
                title: "Pizza Margherita",
                description:
                    "Massa fina, molho de tomate, mussarela de búfala e manjericão fresco.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
                title: "Pizza Margherita",
                description:
                    "Arroz arbóreo cremoso com cogumelos frescos e queijo parmesão.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
        ],
    },
    {
        id: "2",
        name: "La Dolce Vita Trattoria",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        image: "https://tse2.mm.bing.net/th/id/OIP.FB6L6RD14W1IoeDX95kSFwHaFg?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        rating: 4.6,
        saibaMais: "Saiba mais",
        produto: [
            {
                title: "Pizza Margherita",
                description:
                    "Massa fina, molho de tomate, mussarela de búfala e manjericão fresco.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
                title: "Pizza Margherita",
                description:
                    "Arroz arbóreo cremoso com cogumelos frescos e queijo parmesão.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
                title: "Pizza Margherita",
                description:
                    "Massa fina, molho de tomate, mussarela de búfala e manjericão fresco.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
                title: "Pizza Margherita",
                description:
                    "Arroz arbóreo cremoso com cogumelos frescos e queijo parmesão.",
                image: "https://tse2.mm.bing.net/th/id/OIP.ildCrKedl5wZSDvDouexMQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
        ],
    },
];

const Home = () => {
    return (
        <Container>
            {restaurantData.map((data) => (
                <RestaurantCard key={data.id} {...data} />
            ))}
        </Container>
    );
};

export { restaurantData };
export default Home;
