import List from "./components/List";
import Page from "./components/Page";
import Life from "./components/Life";
import TodoList from "./todoList/ToList";
const App = () => {
  const colors = [
    { id: 1, name: "红色" },
    { id: 2, name: "蓝色" },
    { id: 3, name: "黄色" },
  ];
  return (
    <div>
      <h2>Hello React</h2>
      {/* <List colors={colors} fn={(id) => {}} obj={{ name: "dante", age: 18 }} /> */}
      {/* <Page page={20} /> */}
      {/* <Life /> */}
      <TodoList />
    </div>
  );
};

export default App;
