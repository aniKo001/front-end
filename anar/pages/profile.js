export default function Home() {
  return (
    <div className="flex w-full h-screen bg-orange-300 justify-center items-center">
        <div className="relative flex w-4/5 h-4/5 bg-orange-200 rounded-2xl justify-center items-center">
            <img
             src="https://mintykitchen.com/wp-content/uploads/2023/10/pomegranate-open-500x375.jpg"
             className="absolute left-0 top-0 w-20 h-20 rounded-full m-8"
            ></img>
            <h1 className="absolute text-5xl text-bold text-orange-500 left-20 top-4 m-8"> Анар</h1>
            <p className="absolute flex text-3xl text-bold text-orange-500 justify-center items-center m-4 top-0">Намайг Ганбаатрийн Анар гэдэг. Би 16 настай "Нэст it" сургуулийн сурагч. Би ам бүл 7 хүнтэй амьдардаг , би чөлөөт цагаараа сагсан бөмбөг тоголж компитэр тоглоом тоглох дуртай. </p>  
        </div>

    </div>
  );
};

