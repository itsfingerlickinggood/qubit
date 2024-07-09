import Image from "next/image";
import Bg from "../a1.jpg";

export default function SignIn() {
  return (
    <div className="items-center mt-96">
      <h1>Hello World</h1>
      <div className="image">
        <Image src={Bg} width={400} height={400} alt="img" />
      </div>
    </div>
  );
}
