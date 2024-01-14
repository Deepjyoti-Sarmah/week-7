import { useContext, useMemo, useState } from "react"
// import { CountContext } from "./context";
import { Navigate } from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";


function App() {
  // const [count, setCount] = useState(0);  
  // wrap anyone that wants to use the teleported value inside a provider
  // recoil, redux, Themes in mUI
  return (
    <div>
      {/* <CountContext.Provider value={count}> */}
      <RecoilRoot>
        <Count /* setCount={setCount} */ />
      </RecoilRoot>
      {/* </CountContext.Provider> */}
    </div>
  )
}

function Count(/* {setCount} */) {
  // console.log("count rerender");
  return <div>
    <CountRenderer />
    <Buttons /* setCount={setCount} */ />
    <IsEven />
  </div>
}

function CountRenderer() {
  // const count = useContext(CountContext);
  const count = useRecoilValue(countAtom);
  
  // console.log("re render count-render");

  return <div>
    {count}
  </div>
}

function Buttons(/* {setCount} */) {
  // const count = useContext(CountContext);
  // const count = 0;
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);

  // console.log("rerender button");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

function IsEven() {
  // const count = useRecoilValue(countAtom);
  // const isEven = useMemo( () => {
  //   return (count % 2 == 0)
  // }, [count]);

  const isEven = useRecoilValue(evenSelector);

  // console.log("re render iseven");

  return <div>
    <h4>
      { isEven ? "It is Even": null}
    </h4>
  </div>
}
export default App
