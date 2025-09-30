const Footer = () => {
  return (
<footer className="footer footer-center bg-primary text-primary-content p-10 w-full">
      <aside>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 640 640"
  className="w-6 h-6 md:w-8 md:h-8"
  fill="currentColor"
>
  <path d="M64 160C64 124.7 92.7 96 128 96L512 96C547.3 96 576 124.7 576 160L576 400L512 400L512 160L128 160L128 400L64 400L64 160zM0 467.2C0 456.6 8.6 448 19.2 448L620.8 448C631.4 448 640 456.6 640 467.2C640 509.6 605.6 544 563.2 544L76.8 544C34.4 544 0 509.6 0 467.2zM281 273L250 304L281 335C290.4 344.4 290.4 359.6 281 368.9C271.6 378.2 256.4 378.3 247.1 368.9L199.1 320.9C189.7 311.5 189.7 296.3 199.1 287L247.1 239C256.5 229.6 271.7 229.6 281 239C290.3 248.4 290.4 263.6 281 272.9zM393 239L441 287C450.4 296.4 450.4 311.6 441 320.9L393 368.9C383.6 378.3 368.4 378.3 359.1 368.9C349.8 359.5 349.7 344.3 359.1 335L390.1 304L359.1 273C349.7 263.6 349.7 248.4 359.1 239.1C368.5 229.8 383.7 229.7 393 239.1z"/>
</svg>


        <p className="font-bold">
          Proyecto de Prueba <br />
          Aplicación React + DaisyUI
        </p>
        <p>
          © {new Date().getFullYear()} — Todos los derechos ficticios reservados 😅
        </p>
      </aside>
    </footer>
  )
}

export default Footer