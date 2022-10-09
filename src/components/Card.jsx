export default function Card(props) {
  return (
    <div>
      <div className="p-5 w-60 h-36 bg-white text-black font-WorkSans mx-3 md:w-72 md:h-40 lg:w-60 lg:h-36 xl:max-w-screen-xl">
        <h5 className="mb-2 text-3xl font-bold">{props.by}</h5>
        <p className="text-left">{props.testi.substring(0, 60) + "..."}</p>
      </div>
    </div>
  );
}
