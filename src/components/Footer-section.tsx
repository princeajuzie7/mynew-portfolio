
export  function Footersection() {
  const Year = new Date();

  const mainYear = Year.getFullYear()
  return (
    <footer className="w-full pt-[17px] px-[30px] pb-[7px] flex flex-wrap shadow-md text-[11px] items-center justify-between text-[#8c8c8e] bg-[#2C2C36] ">
      <div>
      © {mainYear} Prince Ajuzie
      </div>
      <div>Template author:&nbsp; <a href="https://themeforest.net/user/millerdigitaldesign" target="_blank" data-no-swup="">Prince Ajuzie</a></div>
    </footer>
  )
}

export default Footersection;