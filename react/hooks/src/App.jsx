// import State from "./components/State";
// import Effect from "./components/Effect";
// import MyHooks from "./components/MyhHooks";
// import State2 from "./components/State2";
// import Ref from "./components/Ref";
// import Context from "./components/Context";
// import Con from "./_content";
// import { Button } from "antd";
import TodoList from "./todo/TodoList";

const App = () => {
  return (
    // <Con.Provider value={"来自App中的数据"}>
    //   <div>
    //     {/* <State /> */}
    //     {/* <Effect /> */}
    //     {/* <MyHooks /> */}
    //     {/* <State2 num={10} /> */}
    //     {/* <Ref /> */}
    //     <Context />
    //   </div>
    //   <Button type="primary">antd</Button>
    // </Con.Provider>
    <div>
      <TodoList></TodoList>
    </div>
  );
};

export default App;
