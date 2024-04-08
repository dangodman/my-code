import React from 'react';



export default class ClassComponent extends React.Component {
  constructor(){
    super()
     this.list = [
      {id:1,name:'react'},
      {id:2,name:'vue'}
    ]
  }

  onDel(id){
    console.log(id)
  }


    render()
    {
        return (
            <div>
                <h1>This is a class component</h1>
                <ul>
                  {
                    this.list.map((item)=>{
                      return <li key={item.id}>
                        <span>{item.name}</span>
                        <button onClick={() => this.onDel(item.id)}>X</button>
                      </li>

                    })
                  }
                </ul>
            </div>
        );
    }
}