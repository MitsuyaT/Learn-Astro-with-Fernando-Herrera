import { createSignal, type Component, type JSX } from "solid-js";

interface Props {
  initValue: number;
  children?: JSX.Element;
}

export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initValue);

  return (
    <>
      {/* <h1>Counter</h1> */}
      {props.children}
      <h3>Value: {counter()}</h3>

      <button
        onclick={() => setCounter((prev) => --prev)}
        class="bg-blue-400 p-3 mr-2 rounded"
      >
        -1
      </button>
      <button
        onclick={() => setCounter((prev) => ++prev)}
        class="bg-blue-400 p-3 mr-2 rounded"
      >
        +1
      </button>
    </>
  );
};