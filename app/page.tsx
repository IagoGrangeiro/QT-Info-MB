import Image from "next/image";
import { Header, Sidebar, Footer } from './ui/Components';

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
    <div className="grid grid-cols-3">
      <Header title={"Myname"}/>
      <Sidebar />
      <main className="col-span-2 grid grid-cols-1">
        <div className="p-2">
          
        </div>
        <div className="p-2">
          <ul>
            <li>
              <input name="resposta" type="radio" id="a"/><label htmlFor="a">resposta 1</label>
            </li>
            <li>
              <input name="resposta" type="radio" id="b"/><label htmlFor="b">resposta 2</label>
            </li>
            <li>
              <input name="resposta" type="radio" id="c"/><label htmlFor="c">resposta 3</label>
            </li>
            <li>
              <input name="resposta" type="radio" id="d"/><label htmlFor="d">resposta 4</label>
            </li>
            <li>
              <input name="resposta" type="radio" id="e"/><label htmlFor="e">resposta 5</label>
            </li>
          </ul>
        </div>
        <div className="p-2">
          <button>Anterior</button>
          <button>Próxima</button>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;