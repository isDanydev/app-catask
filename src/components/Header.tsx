import Logo from "../assets/react.svg";

const Header = () => {
  return (
    <header className="bg-pink-300 p-2 flex justify-start items-center gap-3">
      <img
        src={Logo}
        alt="cat-task"
        className="size-14 rounded stroke-pink-800"
      />
      <h1
        className="text-5xl font-black uppercase tracking-wider text-white"
        style={{
          WebkitTextStroke: "3px #F472B6",
        }}
      >
        CaTask
      </h1>
    </header>
  );
};
export default Header;
