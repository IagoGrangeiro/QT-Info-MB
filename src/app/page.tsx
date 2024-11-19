import Image from "next/image";
import MyComponent from '../components/MyComponent';

// Code snipets
{/* <Image
  className="dark:invert"
  src="/filename" // /public
  alt="Next.js logo"
  width={0}
  height={0}
  priority
/> */}

const Home = () => {
  return (
    <div>
      <p>Hello World!</p>
      <MyComponent title={"Myname"}/>
    </div>
  );
}

export default Home;