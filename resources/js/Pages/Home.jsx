import Button from "../Components/Button";
import Nav from "../../Layouts/Nav";
// export default function Home() {
//     return <div>
//         <Button>sss</Button>
//         <Button>sss</Button>
//         <Button>sss</Button>
//         <Button>sss</Button>
//         <Button>sss</Button>
//         <Button>sss</Button>
//         <Button>sss</Button>
//         </div>
// }

function Home({ posts }) {
    return (
        <>
    		<h1>hai</h1>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quidem ipsum repellendus vel provident! Debitis est praesentium molestiae atque quia cupiditate quibusdam accusantium exercitationem ratione voluptatibus. Minus, beatae asperiores. Natus!</p>
       </>
    )
}

Home.Nav =  page =><Nav children={page} />
export default Home;